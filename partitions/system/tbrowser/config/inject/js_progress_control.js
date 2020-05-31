// Stranka detailu filmu
// +-----+---------+
// |  1  |    2    |
// |  3  |         |
// |  4  |         |
// +-----+---------+
// 1 - videoprehravac
// 2 - Jmeno filmu, zanry, herci, popis
// 3 - Ovladaci tlacitka prehravace videa
// 4 - Tlacitko pro prehrati plneho filmu / nakup licence

Util.println("run--------------------js_progress_control.js---------------------");
function cDetailFilmu()
{
	// Kody stavu video prehravace
    var VIDEO_KONEC = 5;
    var VIDEO_ZASTAVENO = 0;
    var VIDEO_CHYBA = 6;
    var VIDEO_PREHRAVANI = 1;
    var VIDEO_POZASTAVENO = 2;
    var VIDEO_PRIPOJOVANI = 3;
    var VIDEO_NACITANI = 4;

	// Klice pro ukladani pozice rozkoukaneho videa do cookies
    var STR_COOKIES_POSLEDNI_VIDEO_ID = "VideoId";
    var STR_COOKIES_POSLEDNI_VIDEO_POZICE = "VideoPozice";

	// Aktualni cas videa (v rezimu video v okne)
    var lblInfoCas = null;
	
	// Aktualni cas video (v rezimu cele obrazovky)
	var lblInfoCasCelaObrazovka = null;
	
	// Timer aktualizujici cas prehravani
    var casovacInfoCas = null;
	
	// Timer ukladajici pozici rozkoukaneho vida do cookies
    var casovacUlozitPoziciVidea = null;
	
	// Priznak, jestli se video spousti poprve po prichodu na stranku, nebo uz po nekolikate (poprve se hleda ulozena pozice a pokracuje v ni, pri dalsich pokusech uz ne)
    var _PrvniSpusteniVidea = true;

	// ID zobrazeneho filmu
    var _ID_Film = "";

	// ID Sluzby (??? je potreba ???)
    var _ID_Sluzba = "";
	// ID Hlavniho menu (??? je potreba ???)
    this.ID_HlavniMenu = function () { return _ID_HlavniMenu; };
    var _ID_HlavniMenu = "";
	
	// Objekt s detailem filmu
    var _FilmDetail = null;
	
	// Rodicovsky zamek (??? je potreba ???)
    var _RodicovskyZamek = false;
    var _koupenNovyFilm = false;

	// Priznak pro zobrazovani dialogu pres tuto stranku
    var _ZobrazenoDalsiOkno = false;

	// Objekt video prehravace
    var videoMP4 = null;

	// Priznak prehravani pres celou obrazovku (fullscreen)
    var videoCelaObrazovka = false;

	// Objekt aktualne prehravaneho soubor
    var currentFile = null; 

	// Priznak prvniho spusteni DRM (u Philipsu muze pri prvnim pokusu vzniknout chyba, je potreba pozadavek zopakovat)
    var _PrvniStartDRM = false;
	
	// Priznak, jestli je prave prehravan trailer nebo plny film (kvuli zobrazeni posouvacich tlacitek)
    var plnyFilm = false;
  
    var _RolovaciSeznamAudio = null;
    var _RolovaciSeznamTitulky = null;
    var _RolovaciSeznamFilm = null;
    var _RolovaciSeznamStrana = 0;
    var _ZobrazenaSluzbaPosun = 0;
    var STR_ID_PRAZDNE = "empty";

    this.Zobrazeno = false;

    this.Zobrazit = Zobrazit;
	
	// Zobraz svoje prvky
    function Zobrazit(ID_Film, ID_Sluzba, ID_HlavniMenu)
    {
        SkrytVse();

        this.Zobrazeno = true;
		
        ZobrazitHorniListu();
        ZobrazitSpodniListu();

        _koupenNovyFilm=false;
        _ID_Film = ID_Film;
        _ID_Sluzba = ID_Sluzba;
        _ID_HlavniMenu = ID_HlavniMenu;
        _RodicovskyZamek = false;

        _PrvniSpusteniVidea = true;
        _ZobrazenoDalsiOkno = false;

        //*** Pokud nastane prvni chyba pri DRM tak se pokusim spustit prehravani znovu (kvuli Philipsu 2012)
        _PrvniStartDRM = false;
        //***

        Licence.Vymazat();

		// Vychozi stav v okne
        videoCelaObrazovka = false;

		// Naplni detail filmu daty
        if (ID_Film!="")
          _ZobrazitDetailFilmu();
        if (_ID_Sluzba=="1") // Zive kanaly
          _ZobrazZiveKanaly();
    }

    this.Skryt = Skryt;
	// Skryj svoje prvky - cast 1
    function Skryt()
    {
        if (this.Zobrazeno)
        {
            this.Zobrazeno = false;

            _SkrytObsah();
            _SkrytSeznamFilmu();
            $("#nadpis").remove();
        }
    }

	// Skryj svoje prvky - cast 2
    function _SkrytObsah()
    {
        _VideoZruseni();

        $("#ID_DetailFilmuLevyPanel").remove();
        $("#ID_DetailFilmuText").remove();
        $("#ID_DetailFilmu").remove();
        $("#divVyber").remove();

        _ZobrazenoDalsiOkno = false;
    }

	// Naplni obrazovku daty aktualniho filmu
    function _ZobrazitDetailFilmu()
    {
		// Cekaci dialog
        ZobrazitCekani(true);
		
		// Stazeni dat o filmu ze serveru
        var parametry=["ID=" + _ID_Film, "PodporovaneFormaty=1"];
        if (_ID_Sluzba=="1")
            parametry=["ID=" + _ID_Film, "PodporovaneFormaty=3"];
        GetJSON("GetDetailFilmu" + DoplnitParametryUrl(parametry),
            function (filmDetail) {
				// Uloz datovy objekt
                _FilmDetail = filmDetail;
				
				// Zjisti licence k filmu
                Licence.Naplnit(_FilmDetail.LicenceCol, _AsynchronniAkce, _ID_Sluzba);
				
				// Zobraz nactena data
                _NaplnitDetailFilmu(filmDetail);

				// Po koupi filmu se znovunacte a je potreba automaticky pustit prehravani
                if (_koupenNovyFilm) {
                    _koupenNovyFilm = false;
                    _PrehratFilm();
                }
                else { // jinak se automaticky spousti 
                    if (filmDetail.VideoUkazka != null) {
                        currentFile = filmDetail.VideoUkazka;
                        _PlayVideo();
                    }
                }
				
				// Skryj cekaci dialog
                ZobrazitCekani(false);
            });
    }

	// Vrati aktualni objekt prehravace
    function _GetVideo()
    {
        return videoMP4;
    }

	// Vytvori novy video prehravac (podle toho zda je potreba DRM ci obyc. prehravac)
    function _VideoVytvoreni() {
        if (currentFile == null || currentFile.ID_DRM == "")
            videoMP4 = _VytvoritVideoObjektMP4();
        else
            videoMP4 = _VytvoritVideoObjektMP4DRM();

        $("#ID_DetailFilmuVideoKontejner").append(videoMP4);
        videoMP4.onPlayStateChange = _ZmenaStavu;
    }

	// Zrusi aktualni video prehravac
    function _VideoZruseni()
    {
        if (videoMP4 != null)
        {
            _VideoZruseniPrehravac(videoMP4);
            videoMP4 = null;
        }
    }

	// Zruseni objektu prehravace
    function _VideoZruseniPrehravac(video)
    {
		// Zruseni rezimu cele obrazovky (pokud byl zapnuty)
		// Nechavalo cerny pruh
        if (videoCelaObrazovka) {
			_CelaObrazovka();
			Navigace.VyberPrvku($("#ID_DetailFilmuPlay")); // vyber play tlacitko pro pokracovani
            /*$("#spodniListaObsah").show();
            try { 
			if (CelaObrazovkaPlatform)
				CelaObrazovkaPlatform(false);
			else
				video.setFullScreen(false); 
			
			} catch (err) { }
            $(video).removeClass("clsVideoFullScreen");
            videoCelaObrazovka = false;*/
        }
		
		// Zastaveni prehravani videa (pokud hralo)
        try {
            //*** Zdenek - Animace u cele obrazovky
            $("#ID_DetailFilmuVideoStavFullscreen").hide();
            //***

            $("#imgDetailFilmuVideoNacitani").hide();
            if (video.playState != VIDEO_ZASTAVENO) {
                if (BLN_TEST_NA_PC == false) video.stop();
            } 
        } catch (err) { }

		// Zruseni procesu aktualizujiciho cas
        _CasovacInfoVypnout();
		
        // Zruseni samotneho objektu - Musi byt volano pres ID
        $("#" + video.id).remove();
    }

	// Zobrazi informace o filmu
    function _NaplnitDetailFilmu(filmDetail)
    {
		// Skryj puvodni obsah
        _SkrytObsah();
		
		// Kontejner
        var div = $("#stranka");

		// Hlavni rozvrzeni
        var divLevyPanel = $("<div>", { id: "ID_DetailFilmuLevyPanel" });
        var divVideo = $("<div>", { id: "ID_DetailFilmuVideo" });
		
		// Kontejner pro tlacitka ovladajici video
		var divVideoTlacitka = $("<div>", { id: "ID_DetailFilmuVideoTlacitka" });
		
		// Video je jeste v obalu, kvuli snazsi manipulaci s fullscreenem
		var divVideoKontejnerObal = $("<div>", { id: "ID_DetailFilmuVideoKontejnerObal" });
        var divVideoKontejner = $("<div>", { id: "ID_DetailFilmuVideoKontejner" });
		
		// Kontejner pro zobrazeni postupu prehravani (neklikaci posuvnik)
        var divPosuvnikKontejner = $("<div>", { id: "ID_DetailFilmuPosuvnikKontejner" });
        var divPosuvnikAktualni = $("<div>", { id: "ID_DetailFilmuPosuvnikAktualni" });
		
        var divVideoPod = $("<div>", { id: "ID_DetailFilmuVideoPod" });
        div.prepend(divLevyPanel);
        divLevyPanel.append(divVideo);
        divVideoKontejnerObal.append(divVideoKontejner);
		divVideo.append(divVideoKontejnerObal);
        divVideo.append(divPosuvnikKontejner);
        divPosuvnikKontejner.append(divPosuvnikAktualni);
        divLevyPanel.append(divVideoPod);
		divVideo.append(divVideoTlacitka);
		
		// Jednotliva ovladaci tlacitka
        var cmdPlay = $("<div>", { id: "ID_DetailFilmuPlay", class: " btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
        divVideoTlacitka.append(cmdPlay);
        var cmdPause = $("<div>", { id: "ID_DetailFilmuPause", class: " btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
        divVideoTlacitka.append(cmdPause);
        var cmdStop = $("<div>", { id: "ID_DetailFilmuStop", class: " btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
        divVideoTlacitka.append(cmdStop);
        if (_ID_Sluzba!="1") {
        var cmdVzad = $("<div>", { id: "ID_DetailFilmuRewind", class: " btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
        divVideoTlacitka.append(cmdVzad);
        var cmdVpred = $("<div>", { id: "ID_DetailFilmuForward", class: " btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
        divVideoTlacitka.append(cmdVpred);
        cmdVzad[0].AkceClick = function () { _PosunVzad(60) };
        cmdVpred[0].AkceClick = function () { _PosunVpred(60) };
        }
        var cmdCelaObrazovka = $("<div>", { id: "ID_DetailFilmuCelaObrazovka", class: " btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
        divVideoTlacitka.append(cmdCelaObrazovka);

		// Akce ovladacich tlacitek
        cmdPlay[0].AkceClick = _PlayTlacitko;
        cmdPause[0].AkceClick = _Pause;
        cmdStop[0].AkceClick = _Stop;
        //cmdCelaObrazovka[0].AkceClick = function () { _CelaObrazovka(); Navigace.VyberPrvku($("#divPrehravacCelaObrazovkaCelaObrazovka")); }
	cmdCelaObrazovka[0].AkceClick = function () { 
        _CelaObrazovka();
        if(!_GetVideo()){Navigace.VyberPrvku($("#ID_DetailFilmuCelaObrazovka"));return;}
         Navigace.VyberPrvku($("#divPrehravacCelaObrazovkaCelaObrazovka"));
        }
		
		// Aktualni cas prehravani
        divVideoTlacitka.append($("<span>", { id: "ID_DetailFilmuVideoCas" }));
		
		// Aktualni stav prehravani (pozastaveno, atd.)
        var divVideoStav = $("<div>", { id: "ID_DetailFilmuVideoStav" });
        divVideoTlacitka.append(divVideoStav);
		
		// Ikonka zobrazena pri nacitani videa (napr. pri bufferovani)
        var imgNacitani = $("<img>", { id: "imgDetailFilmuVideoNacitani", src: "pic/loading_24.gif" });
        divVideoTlacitka.append(imgNacitani);
        var offsetVideoStav = divVideoStav.offset();
        imgNacitani.css("left", offsetVideoStav.left + divVideoStav.outerWidth() - imgNacitani.outerWidth());
        imgNacitani.css("top", offsetVideoStav.top + divVideoStav.outerHeight() - imgNacitani.outerHeight());
        imgNacitani.hide();

        //*** Zdenek - Nacitaci ikonka i u cele obrazovky
        divVideo.append($("<div>", { id: "ID_DetailFilmuVideoStavFullscreen" }));
        $("#ID_DetailFilmuVideoStavFullscreen").hide();     
        //***

		// Barevna tlacitka pro rychly posun ve videu
        if (_ID_Sluzba!="1") {
        var cmdCervena = $("<div>", { id: "ID_DetailFilmuCervena", class: " btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
        divVideoPod.append(cmdCervena);
        divVideoPod.append($("<span>", { class: "btnDetailFilmuTlacitkaPopisek" }).append("+10min"));
        var cmdZelena = $("<div>", { id: "ID_DetailFilmuZelena", class: " btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
        divVideoPod.append(cmdZelena);
        divVideoPod.append($("<span>", { class: "btnDetailFilmuTlacitkaPopisek" }).append("+30min"));
        var cmdZluta = $("<div>", { id: "ID_DetailFilmuZluta", class: " btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
        divVideoPod.append(cmdZluta);
        divVideoPod.append($("<span>", { class: "btnDetailFilmuTlacitkaPopisek" }).append("-10min"));
        var cmdModra = $("<div>", { id: "ID_DetailFilmuModra", class: " btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
        divVideoPod.append(cmdModra);
        divVideoPod.append($("<span>", { class: "btnDetailFilmuTlacitkaPopisek" }).append("-30min"));
		
		// Funkce barevnych tlacitek
        cmdCervena[0].AkceClick = function () { _PosunVpred(10 * 60) };
        cmdZelena[0].AkceClick = function () { _PosunVpred(30 * 60) };
        cmdZluta[0].AkceClick = function () { _PosunVzad(10 * 60) };
        cmdModra[0].AkceClick = function () { _PosunVzad(30 * 60) };

        // Barevne tlacitka viditelne pouze u plneho filmu (prvnich 8 prvku v divu)
        $("#ID_DetailFilmuVideoPod").find("*:lt(8)").css("visibility", "hidden");
        }
		plnyFilm = false;

        lblInfoCas = $("#ID_DetailFilmuVideoCas");    // Pro zrychleni - vola se casto, at se to zbytecne nehleda

		// Kontejner pro tlacitka
        var divTlacitkaLicence = $("<div>", { id: "divTlacitkaLicence" });
        divVideoPod.append(divTlacitkaLicence);

		// Pokud je nejaky soubor u filmu, ktery by se mohl prehrat, zobraz prehravaci tlacitko
        if (filmDetail!=null && _MohuPrehrat(filmDetail.VideoSouborCol)) 
        {
            if (_ID_Sluzba!="1") {
            var cmdPrehrat = $("<button>", { id: "cmdDetailFilmuPrehrat" }).PodporaNavigace(); 
            divTlacitkaLicence.append(cmdPrehrat);
            cmdPrehrat.text(SlovnikSlovo("PrehratFilm"));
            cmdPrehrat[0].AkceClick = _PrehratFilm;
            }
            else 
                _koupenNovyFilm=true;

			// Pokud je zaroven u filmu neco ke koupi, zobraz nakupovaci tlacitko
            //*** Leos - Uprava (8.1.2013)
//             if (Licence.MohuNakupovat()) {
//                 var cmdKoupitDalsi = $("<button>", { id: "cmdDetailFilmuKoupitDalsi"}).PodporaNavigace();
//                 divTlacitkaLicence.append(cmdKoupitDalsi);
//                 cmdKoupitDalsi.text(SlovnikSlovo("KoupitFilmDalsi"));
//                 cmdKoupitDalsi[0].AkceClick = _ZobrazitKoupitFilm;
//             }
            //***

        }
        //*** Leos - Uprava (8.1.2013)
        //        if (Licence.MohuNakupovat()) 
		// Pokud je co nakupovat, zobraz nakupovaci tlacitko
        else if (filmDetail!=null && Licence.MohuNakupovat()) 
        //***
        {
            var cmdKoupit = $("<button>", { id: "cmdDetailFilmuKoupit" }).PodporaNavigace();
            divTlacitkaLicence.append(cmdKoupit);
            if (_ID_Sluzba!="1")
              cmdKoupit.text(SlovnikSlovo("KoupitFilm") + Licence.TextCena());
            else
              cmdKoupit.text(SlovnikSlovo("KoupitKanal") + Licence.TextCena());
            cmdKoupit[0].AkceClick = _ZobrazitKoupitFilm;
        }

		// Napln prave pole - popis filmu
        if (_ID_Sluzba!="1") {
        var divText = $("<div>", { id: "ID_DetailFilmuText" });
        div.append(divText);
        divText.append($("<div>").append($("<span>", { class:"spanNazevFilmu" }).append(filmDetail.Nazev)));
        divText.append($("<div>").append($("<span>", { class:"spanNazevOdstavce" }).append(SlovnikSlovo("Zanry") + ":")).append(_ZanryText(filmDetail.ZanrCol)));
        divText.append($("<div>").append($("<span>", { class:"spanNazevOdstavce" }).append(SlovnikSlovo("Rezie") + ":")).append(_OsobyText(filmDetail.ReziserCol)));
        divText.append($("<div>").append($("<span>", { class: "spanNazevOdstavce" }).append(SlovnikSlovo("Hraji") + ":")).append(_OsobyText(filmDetail.HerecCol)));
        divText.append($("<div>").append($("<br>")));
        divText.append($("<div>").append(filmDetail.Popis));
        }
        Navigace.VyberPrvku($("#ID_DetailFilmuPlay"));
    }

	// Play tlacitko u video prehravace (chovani dle stavu)
    function _PlayTlacitko() {
        if (_VideoPrehrava()) return;
        if (_JeVideoPozastaveno() == false && currentFile != null && currentFile.ID_DRM != "")
            _VyberAudioTitulky(currentFile);
        else
            _Play();
    }

	// Existuje film, ktery se da prehrat?
    function _MohuPrehrat(FilmKoupenyCol) {
        if (FilmKoupenyCol.length == 0)
            return false;
        else
            return true;
    }

	// Lokalizace zanru filmu
    function _ZanryText(prvekCol)
    {
        var ret = "";
        for (var i = 0; i < prvekCol.length; i++)
        {
            if (ret != "")
                ret += ", ";
            ret += prvekCol[i].Nazev;
        }
        return ret;
    }

	// Formatovani osob u filmu (herci, rezie, atd.)
    function _OsobyText(prvekCol)
    {
        var ret = "";
        for (var i = 0; i < prvekCol.length; i++)
        {
            if (ret != "")
                ret += ", ";
            ret += prvekCol[i].Jmeno;
        }
        return ret;
    }

	// Prehraj film (pokud je jeden, rovnou jej prehrej, pokud je jich vice, uzivatel musi vybrat)
    function _PrehratFilm() {
        if (_FilmDetail.VideoSouborCol.length == 1)
            _VyberAudioTitulky(_FilmDetail.VideoSouborCol[0]);
        else if (_FilmDetail.VideoSouborCol.length > 1)
            _ZobrazitPrehratFilmVybratSoubor();
    }
    
    function _VyberAudioTitulky(videoSoubor) {
      if (videoSoubor.Audio.length==1 && videoSoubor.Titulky.length==0)
        _PrehratFilmAktivovatLicenci(videoSoubor, 0, videoSoubor.Audio[0].ID, null);
      else {
        _NaplnitDetailFilmu(_FilmDetail);
        _SkrytObsah();
        _ZobrazenoDalsiOkno = true;
        var divVyber = $("<div>", {id: "divVyber" });
        $("#stranka").append(divVyber);
        var sloupec = $("<div>", { class: "clsMenu" });
        divVyber.append(sloupec);
        sloupec.append($("<div>", { class: "spanNazevFilmu" }).text(SlovnikSlovo("Audio")));
        var menu = $("<div>", {id: "divAudio"});
        sloupec.append(menu);
        var c=0;
        for (var i = 0; i < videoSoubor.Audio.length; i++) {
          var div = $("<div>", { class: "clsMenuPolozka " + STR_CLS_PODPORA_NAVIGACE + " " + STR_CLS_PODPORA_ROLOVANI + (c==0 ? ' selectedItem' : '') });
          menu.append(div);
          var a = $("<div>", { class: "clsMenuPolozkaText" });
          div.append(a);
          div[0].Pozice = c;
          div[0].AudioId = videoSoubor.Audio[i].ID;
          div[0].PosunDolu = _SeznamPosunDoluAudio;
          div[0].PosunNahoru = _SeznamPosunNahoruAudio;
          div[0].onclick = function () { VyberAudio(this); };
          if (c>=10) div.hide();
          a.text(videoSoubor.Audio[i].Jazyk);
          c++;
        }
        _RolovaciSeznamAudio = new cRolovaciSeznam();
        _RolovaciSeznamAudio.PocetPrvku = c-2;
        _RolovaciSeznamAudio.PocetRadkuNaStranku = 10;
        _RolovaciSeznamAudio.PocetRadkuPosun = 10;
        _RolovaciSeznamAudio.PozicePrvkuPosunNahoru = [0];
        _RolovaciSeznamAudio.PozicePrvkuPosunDolu = [9];
        _RolovaciSeznamAudio.ZobrazitPosuvnik(menu);
        Navigace.VyberPrvkuPrvni();
        sloupec = $("<div>", { class: "clsMenu" });
        divVyber.append(sloupec);
        sloupec.append($("<div>", { class: "spanNazevFilmu" }).text(SlovnikSlovo("Titulky")));
        menu = $("<div>", {id: "divTitulky", class: "clsMenu" });
        sloupec.append(menu);
        c=0;
        for (var i = -1; i < videoSoubor.Titulky.length; i++) {
          var div = $("<div>", { class: "clsMenuPolozka " + STR_CLS_PODPORA_NAVIGACE + " " + STR_CLS_PODPORA_ROLOVANI + (c==0 ? ' selectedItem' : '') });
          menu.append(div);
          var a = $("<div>", { class: "clsMenuPolozkaText" });
          div.append(a);
          div[0].Pozice = c;
          div[0].TitulkyId = (i==-1 ? null : videoSoubor.Titulky[i].ID);
          div[0].PosunDolu = _SeznamPosunDoluTitulky;
          div[0].PosunNahoru = _SeznamPosunNahoruTitulky;
          div[0].onclick = function () { VyberTitulky(this); };
          if (c>=10) div.hide();
          a.text(i==-1 ? SlovnikSlovo("BezTitulku") : videoSoubor.Titulky[i].Jazyk);
          c++;
        }
        _RolovaciSeznamTitulky = new cRolovaciSeznam();
        _RolovaciSeznamTitulky.PocetPrvku = c-2;
        _RolovaciSeznamTitulky.PocetRadkuNaStranku = 10;
        _RolovaciSeznamTitulky.PocetRadkuPosun = 10;
        _RolovaciSeznamTitulky.PozicePrvkuPosunNahoru = [0];
        _RolovaciSeznamTitulky.PozicePrvkuPosunDolu = [9];
        _RolovaciSeznamTitulky.ZobrazitPosuvnik(menu);
        
        sloupec = $("<div>", { class: "clsMenu" });
        divVyber.append(sloupec);
        var btn=$("<button>", { id : "btnPrehraj", class: STR_CLS_PODPORA_NAVIGACE });
        sloupec.append(btn);
        btn.text(SlovnikSlovo("PrehratFilm"));
        btn[0].VideoSoubor=videoSoubor;
        btn[0].AudioId=videoSoubor.Audio[0].ID;
        btn[0].AudioIndex=0;
        btn[0].TitulkyId=null;
        btn[0].onclick = function (){
          _PrehratFilmAktivovatLicenci(this.VideoSoubor, this.AudioIndex, this.AudioId, this.TitulkyId);
        }
      }
    }
    function VyberAudio(div) {
      $("#divAudio .clsMenuPolozka").removeClass("selectedItem");
      div=$(div);
      div.addClass("selectedItem");
      $('#btnPrehraj')[0].AudioId=div[0].AudioId;
      $('#btnPrehraj')[0].AudioIndex=div[0].Pozice;
      Navigace.PosunDoprava();
    }
    function VyberTitulky(div) {
      $("#divTitulky .clsMenuPolozka").removeClass("selectedItem");
      div=$(div);
      div.addClass("selectedItem");
      $('#btnPrehraj')[0].TitulkyId=div[0].TitulkyId;
      Navigace.PosunDoprava();
    }
    function _SeznamPosunDoluTitulky(index) {
      return _SeznamPosun(index, _RolovaciSeznamTitulky, 'divTitulky', true);
    }
    function _SeznamPosunNahoruTitulky(index) {
      return _SeznamPosun(index, _RolovaciSeznamTitulky, 'divTitulky', false);
    }
    function _SeznamPosunDoluAudio(index) {
      return _SeznamPosun(index, _RolovaciSeznamAudio, 'divAudio', true);
    }
    function _SeznamPosunNahoruAudio(index) {
      return _SeznamPosun(index, _RolovaciSeznamAudio, 'divAudio', false);
    }
    function _SeznamPosun(index, seznam, div, dolu) {
  		if ((dolu && seznam.SeznamPosunDolu(index)) || (!dolu && seznam.SeznamPosunNahoru(index))) {
	      var posun = seznam.PocetRadkuPosun;
        var prvni = seznam.PrvniPrvekNaStrance() + ( dolu ? seznam.PocetRadkuNaStranku - posun : 0 );
        var posledni = dolu ? seznam.PosledniPrvekNaStrance() : prvni + posun - 1;
        
        $('#' + div + ' .clsMenuPolozka').hide();
	      var col=$('#' + div + ' .clsMenuPolozka');
        for (var i=prvni; i<=posledni; i++)
          $(col[i]).show();
        
        seznam.ZobrazitPosuvnik($("#" + div));
	      Navigace.VyberPrvku($(col[dolu ? prvni : posledni]));
        return true;
      }
      return false;
    }

	// Prehraj tento konkretni videosoubor filmu
    function _PrehratFilmAktivovatLicenci(videoSoubor, audioIndex, audio, titulky) {
        _NaplnitDetailFilmu(_FilmDetail);
		// Cekaci dialog
        ZobrazitCekani(true);
		
		// Ziskej adresu pro prehrani videa
        var parametry=["ID_VideoSoubor=" + videoSoubor.ID, "ID_Audio=" + audio, "ID_Titulky=" + titulky, "PodporovaneFormaty=1"];
        if (_ID_Sluzba=="1")
            parametry=["ID_VideoSoubor=" + videoSoubor.ID, "ID_Audio=" + audio, "ID_Titulky=" + titulky, "PodporovaneFormaty=3"];
        GetJSON("GetVideoUrlAudioSubtitles" + DoplnitParametryUrl(parametry),
				function (vysledekVolani) {
					// Pokud mame normalni url
				    if (vysledekVolani.Vysledek == true) {

				        // Barevne tlacitka viditelne pouze u plneho filmu (prvnich 8 prvku v divu)
				        $("#ID_DetailFilmuVideoPod").find("*:lt(8)").css("visibility", "visible");
						plnyFilm = true;

						// Nastav vybrany video soubor, jeho adresu a nech jej prehrat
				        currentFile = videoSoubor;
				        currentFile.Link = vysledekVolani.LinkVideo;
                currentFile.AudioIndex = audioIndex;                
                currentFile.LinkTitulky = vysledekVolani.LinkTitulky;
                currentFile.ContentFormat = vysledekVolani.ContentFormat;
                currentFile.CustomData = vysledekVolani.CustomData;
                currentFile.LicenseServer = vysledekVolani.LicenseServer;
                _PlayVideo();
				    }
					// Neco se mohlo pokazit, napr. prekrocil pocet prehrati, atd.
				    else {
				        _ZobrazitNeplatnaLicence(vysledekVolani.ChybaKod);
				    }
					
					// Skryj cekaci dialog
				    ZobrazitCekani(false);
				});
    }

	// Nelze vydat licenci k prehrati filmu (napr. prekroceny pocet prehrani)
    function _ZobrazitNeplatnaLicence(chybaKod) {
        _SkrytObsah();
        _ZobrazenoDalsiOkno = true;
        var div = $("<div>", { id: "ID_DetailFilmu" });
        $("#stranka").append(div);

		// Zobrazim popis chyby
        var text = "";
        if (chybaKod == "PlayCountForLicenseExceeded")
            text = SlovnikSlovo("LicenceChybaPocetPrehrani");
        else if (chybaKod == "DeviceCountForLicenseExceeded")
            text = SlovnikSlovo("LicenceChybaPocetZarizeni");
        else if (chybaKod == "MaxMovieActivationFromPackageExceeded ")
            text = SlovnikSlovo("LicenceChybaPocetFilmuVBalicku");
        else
            text = SlovnikSlovo("LicenceChyba");

        div.append($("<div>", { id: "ID_DetailFilmuLicenceText" }).append(text));
		
		// Uzivatel muze pouze potvrdit
        var tlacitko = $("<button>", {  }).PodporaNavigace();
        div.append(tlacitko);
        tlacitko.text(SlovnikSlovo("Pokracovat"));
        tlacitko[0].AkceClick = _DalsiOknoStorno;
        
		// Vracim se, neco musi mit focus, bude to prvni tlacitko
        Navigace.VyberPrvkuPrvni();
    }

	// K filmu je vice souboru, uzivatel musi vybrat ktery si chce prehrat
    function _ZobrazitPrehratFilmVybratSoubor() {
        _SkrytObsah();
        _ZobrazenoDalsiOkno = true;
        var div = $("<div>", { id: "ID_DetailFilmu" });
        $("#stranka").append(div);

        div.append($("<div>", { id: "ID_DetailFilmuPrehratFilmText" }).append(SlovnikSlovo("VyberFilmu") + " - " + _FilmDetail.Nazev));

        var tabulka = $("<table>");
        div.append(tabulka);
        
		// Pro jednotlive soubory
        for (var i = 0; i < _FilmDetail.VideoSouborCol.length; i++) {
		
			// Pokud k nim existuje licence
//             var licence = Licence.ZakoupenaLicence(_FilmDetail.VideoSouborCol[i]);
//             if (licence != null) {
              if (_FilmDetail.VideoSouborCol[i].MuzePrehrat == true) {
                var licence = _FilmDetail.VideoSouborCol[i];
				// Vytvor jejich radek
                var radek = $("<tr>");
                tabulka.append(radek);
                radek.append($("<td>").append($("<div>", { class: "clsDetailFilmuTabulkaText" }).append(licence.Kvalita)));
                var tlacitko = $("<button>", {  }).PodporaNavigace();
                radek.append($("<td>").append(tlacitko));
                tlacitko.text(SlovnikSlovo("PrehratFilm"));
                tlacitko[0].VideoSoubor = licence;
				// A po vyberu jej nech prehrat
                tlacitko[0].AkceClick = function () {
                    _VyberAudioTitulky(this.VideoSoubor);
                };
            }
        }

        Navigace.VyberPrvku($("." + STR_CLS_PODPORA_NAVIGACE + ":first"));
    }

	// Uzivatel chce koupti film, dame mu na vyber z moznosti
    function _ZobrazitKoupitFilm()
    {
        _SkrytObsah();
        _SkrytSeznamFilmu();
        _ZobrazenoDalsiOkno = true;
        _AsynchAkceKoupitFilm = true;
        Licence.Zobrazit()
    }

	// Zrusi aktualne zobrazeny dialog (napr. informaci o licenci) a vrati se do puvodniho rezimu s prehranim traileru
    function _DalsiOknoStorno() {
        _ZobrazenoDalsiOkno = false;
        if (_ID_Sluzba=="1") {
            _ZobrazitDetailFilmu();
            _ZobrazZiveKanaly();
        }
        else {
        _NaplnitDetailFilmu(_FilmDetail);
        if (_FilmDetail.VideoUkazka != null) {
            currentFile = _FilmDetail.VideoUkazka;
            _Play();
        }
        }
    }
    	// Zobrazi aktualni cas prehravani videa a naformatuje posuvnik prehravani (at uz v okne nebo v rezimu cele obrazovky)
    function _ZobrazitAktualniCas()
    {
        if (_ID_Sluzba=="1") return;
        var text = "";

        var posun = 0;
        if (casovacInfoCas == null) {
            text = "";
        }
        else {
            text = _MsToString(videoMP4.playPosition) + " / " + _MsToString(videoMP4.playTime);
            if (videoMP4.playTime > 0) {
                var maxPosun = 0;
				
				if (videoCelaObrazovka)
					maxPosun = $("#divPrehravacCelaObrazovkaPosuvnikKontejner").width();
				else
					maxPosun = $("#ID_DetailFilmuPosuvnikKontejner").width();
				
                posun = Math.round((videoMP4.playPosition / videoMP4.playTime) * maxPosun);
                if (posun > maxPosun)
                    posun = maxPosun;
            }
        }

		// Nastav sirku posuvniku a vypis text s casem
		if (!videoCelaObrazovka)  {
			lblInfoCas.text(text);
			$("#ID_DetailFilmuPosuvnikAktualni").width(posun);
		}
		else {
			lblInfoCasCelaObrazovka.text(text);
			$("#divPrehravacCelaObrazovkaPosuvnikAktualni").width(posun);
		}
		
    }

	// Formatovani casu prehravani (ms -> h:m:s)
    function _MsToString(ms)
    {
        if (ms == -1)
            return "";

        var sec = Math.floor(ms / 1000);
        var min = Math.floor(sec / 60);
        var hod = Math.floor(min / 60);
        sec -= min * 60;
        min -= hod * 60;

        return hod.toString() + ":" + ("0" + min).substr(-2, 2) + ":" + ("0" + sec).substr(-2, 2);
    }

	// Zaznamenej aktualni pozici video do cookies pro pripad znovu spusteni z tohoto mista
    function _UlozitPoziciVidea()
    {
        if (currentFile != null && currentFile != _FilmDetail.VideoUkazka) {
            var video = _GetVideo();
            if (video == null)
                return;
            CreateCookie(STR_COOKIES_POSLEDNI_VIDEO_ID, _ID_Film, INT_COOKIES_PLATNOST_DNU);
            CreateCookie(STR_COOKIES_POSLEDNI_VIDEO_POZICE, video.playPosition, INT_COOKIES_PLATNOST_DNU);
        }
    }

	// Odstran zaznamenanou pozici videa (napr. pote co byla obnovena)
    function _SmazatPoziciVidea()
    {
        if (currentFile != null && currentFile != _FilmDetail.VideoUkazka) {
            EraseCookie(STR_COOKIES_POSLEDNI_VIDEO_ID);
            EraseCookie(STR_COOKIES_POSLEDNI_VIDEO_POZICE);
        }
    }

	this.NastavitPoziciVidea = _NastavitPoziciVidea;
	
	// Obnovi pozici prehravaneho videa do mista kde se posledne skoncilo
    function _NastavitPoziciVidea()
    {
		// Pokud existuje video soubor
        if (currentFile != null && currentFile != _FilmDetail.VideoUkazka && casovacUlozitPoziciVidea == null) {
			// Pri prvnim spusteni videa na teto obrazovce zkontroluj jestli mame ulozenou pozici
            if (_PrvniSpusteniVidea == true && _ID_Film == ReadCookie(STR_COOKIES_POSLEDNI_VIDEO_ID)) {
                _PrvniSpusteniVidea = false;
				// Pokud ano, posun video do spravneho okamziku
                var novaPozice = ReadCookie(STR_COOKIES_POSLEDNI_VIDEO_POZICE);
                if (novaPozice != null)
                    _NastavitPoziciVideaSeZpozdenim(novaPozice);
            }
            else {
                if (BLN_TEST_NA_PC == false) setTimeout("video.seek(0)", 500);   // Osetreni stavu, kdy na zacatku filmu se zobrazil cas filmu, ktery byl predtim prehravany
            }
            
			// Priste uz to pro tyto data nedelej
            _SmazatPoziciVidea();
        }
    }

	// Provede posun videa ovsem az ve chvili, kdy je video prehravac pripraven k posunu (nelze hned po nastaveni url videa)
    _NastavitPoziciVideaSeZpozdenim = function(novaPozice) {
        var video = _GetVideo();
        if (video == null)
            return;           
        
		// Uz mohu ted (zpozdeni tusim kvuli Philipsu)
        if (video.playState == VIDEO_PREHRAVANI) {
            if (BLN_TEST_NA_PC == false) setTimeout("video.seek(" + novaPozice + ")", 500);
        }
        else // jeste nemohu, musim pockat
            setTimeout("_NastavitPoziciVideaSeZpozdenim(" + novaPozice + ")", 500);
    }

	// Zapne casovac pravidelne aktualizujici postup prehravani
    function _CasovacInfoZapnout() {
        if (casovacInfoCas == null) {
            casovacInfoCas = setInterval(_ZobrazitAktualniCas, 1000);
        }
        if (casovacUlozitPoziciVidea == null) {
            casovacUlozitPoziciVidea = setInterval(_UlozitPoziciVidea, 15 * 1000);
        }
        _ZobrazitAktualniCas();
    }
	
	// Vypne casovac pravidelne aktualizujici postup prehravani
    function _CasovacInfoVypnout() {
        if (casovacInfoCas != null) {
            clearInterval(casovacInfoCas);
            casovacInfoCas = null;
        }
        if (casovacUlozitPoziciVidea != null) {
            clearInterval(casovacUlozitPoziciVidea);
            casovacUlozitPoziciVidea = null;
        }
        _ZobrazitAktualniCas();
    }


    this.ZmenaStavu = _ZmenaStavu;
	
	// Handler zmeny stavu video objektu
    function _ZmenaStavu() {
        _ZobrazitAktualniCas();

        var video = _GetVideo();
        switch (video.playState)
        {
			// Normalni konec prehravani videa
            case VIDEO_KONEC:
                _VideoZobrazitStav();
                _VideoZruseni();
                //_CelaObrazovka(); //Celou obrazovku vrati zpet (update: uz to dela videozruseni)
                _SmazatPoziciVidea();
                break;

			// Normalni stop
            case VIDEO_ZASTAVENO:
                break;

			// Nastala chyba
            case VIDEO_CHYBA:
                var strChyba = video.error.toString();
                _VideoZruseni();
                //_CelaObrazovka(); //Celou obrazovku vrati zpet (update: uz to dela videozruseni)

                //*** Pokud nastane prvni chyba pri DRM tak se pokusim spustit prehravani znovu (kvuli Philipsu 2012)
                if (_PrvniStartDRM == true) {
                    _Play();
                }
                else
                //***
                    $("#ID_DetailFilmuVideoStav").text(SlovnikSlovo("Chyba") + ": " + strChyba);
                break;

			// Vse v poradku hraje
            case VIDEO_PREHRAVANI:
                //*** Pokud nastane prvni chyba pri DRM tak se pokusim spustit prehravani znovu (kvuli Philipsu 2012)
                _PrvniStartDRM = false;
                //***
                _CasovacInfoZapnout();
                _VideoZobrazitStav();
                break;

			// Faze Paused
            case VIDEO_POZASTAVENO:
                _VideoZobrazitStav();
                break;

			// Faze Connecting
            case VIDEO_PRIPOJOVANI:
                _VideoZobrazitStav();
                break;

			// Faze Buffering
            case VIDEO_NACITANI:
                //*** Pokud nastane prvni chyba pri DRM tak se pokusim spustit prehravani znovu (kvuli Philipsu 2012)
                _PrvniStartDRM = false;
                //***
                _VideoZobrazitStav();
                break;

            default:
                // nic
                break;
        }
    }

	this.VideoZobrazitStav = _VideoZobrazitStav;
	
	// Zobrazi text s informaci o aktualnim stavu prehravani
    function _VideoZobrazitStav()
    {
        $("#imgDetailFilmuVideoNacitani").hide();
        //*** Zdenek - Animace u cele obrazovky, prozatim skryji, pokud je potreba, zobrazim nize
        $("#ID_DetailFilmuVideoStavFullscreen").hide();
        //***

        var video = _GetVideo();
        if (video == null)
            return;
        switch (video.playState)
        {
			// Prehravani skoncilo
            case VIDEO_KONEC:
                $("#ID_DetailFilmuVideoStav").text(SlovnikSlovo("Konec"));
                break;

            case VIDEO_ZASTAVENO:
                break;

            case VIDEO_CHYBA:
                break;

			// Hraje
            case VIDEO_PREHRAVANI:
                $("#ID_DetailFilmuVideoStav").text(SlovnikSlovo("Prehravani"));
                break;

			// Pauza
            case VIDEO_POZASTAVENO:
                $("#ID_DetailFilmuVideoStav").text(SlovnikSlovo("Pozastaveno"));
                break;

			// Faze Connecting (zobrazuju ikonu ve fullscreenu)
            case VIDEO_PRIPOJOVANI:
                $("#imgDetailFilmuVideoNacitani").show();
                //*** Zdenek - Animace u cele obrazovky
                if (videoCelaObrazovka)
                    $("#ID_DetailFilmuVideoStavFullscreen").show();
                //***
                $("#ID_DetailFilmuVideoStav").text(SlovnikSlovo("Pripojovani"));
                break;

			// Faze Buffering (zobrazuju ikonku ve fullscreenu)
            case VIDEO_NACITANI:
                $("#imgDetailFilmuVideoNacitani").show();
                //*** Zdenek - Animace u cele obrazovky
                if (videoCelaObrazovka)
                    $("#ID_DetailFilmuVideoStavFullscreen").show();
                //***
                $("#ID_DetailFilmuVideoStav").text(SlovnikSlovo("Nacitani"));
                break;
        }
    }

	// Je video paused?
    function _JeVideoPozastaveno() {
        var video = _GetVideo();
        return video != null && video.playState == VIDEO_POZASTAVENO;        
    }
    
    function _VideoPrehrava() {
        var video = _GetVideo();
       	return video != null && video.playState == VIDEO_PREHRAVANI;
    }        

	// Stisknuto tlacitko play (at uz na obrazovce ci ovladaci)
    function _Play()
    {
        if (_VideoPrehrava()) return;    
		// Pokud bylo paused, pokracujeme v prehravani
        if (_JeVideoPozastaveno()) {
            if (BLN_TEST_NA_PC == false) video.play(1);
        }
        else {
			// Pokud neexistuje prehravac, odejdi
            if (currentFile == null)
                return;
				
			// Zobraz stav "Nacitani"
            $("#imgDetailFilmuVideoNacitani").show();
            //*** Zdenek - Nacitaci ikonka i u cele obrazovky
            if (videoCelaObrazovka)
                $("#ID_DetailFilmuVideoStavFullscreen").show();
            //***
            $("#ID_DetailFilmuVideoStav").text(SlovnikSlovo("Pripojovani"));
            setTimeout(_PlayVideo, 100);  // ms
        }
    }
	
	// Pokyn k prehrati videa (at uz trailer ci DRM)
    function _PlayVideo() {
        try {
			// Zrus puvodni prehravac
            _VideoZruseni();
			
			// Vytvor novy (automaticky pro DRM i bez)
            _VideoVytvoreni();
			
			// Ziskej video prehravac
            video = _GetVideo();

			// Pokud ma platforma vlastni implementaci nasledujici logiky (napr. LG), zavolame radeji ji misto teto univerzalni a odejdeme
		if(typeof _PlayVideoPlatform == 'function')
			//if (_PlayVideoPlatform != null) 
			{
				_PlayVideoPlatform(currentFile, _ID_Film, video);
				return;
			}
			
			// Pokud soubor neni chranen DRM, proste nastavime URL
            if (currentFile.ID_DRM == "") {
                video.data = currentFile.Link;
            }
            else {
				// Pokud je video pod DRM, je potreba nastavit spravny link (napr. na generovany CAD souboru u Philipsu)
                video.data = _FormatujVideoLink(currentFile.Link, _ID_Film);

                //*** Pokud nastane prvni chyba pri DRM tak se pokusim spustit prehravani znovu (kvuli Philipsu 2012)
                // Poklud se nastavuje poprve tak bude TRUE. Pokud jiz chyba nastala tak se nastavi na FALSE a pristi chyba se zobrazi.
                    _PrvniStartDRM = !_PrvniStartDRM;
                //***

            }
				
			// Pokud netestujeme na PC, dame pokyn ke spusteni
            if (BLN_TEST_NA_PC == false) video.play(1);
            try {
                // Specialne pro Philips - je potreba sahnout na nejake objekty, jinak se DRM nerozjede
                _AkcePoSpusteniVidea();
            }
            catch (err) { }

            setTimeout(_VideoZobrazitStav, 60 * 1000);  // Osetreni stavu, kdy video nevyvola udalost, ze se prehrava
			
			// Automaticky resume prehravani (pokud uz jsme se driv na film koukali a skoncili treba v polovine)
            _NastavitPoziciVidea();
        }
        catch (err) {
            //                      $("#spnUzivatel").text($("#spnUzivatel").text() + " Chyba:" + err.message);
        }
    }

	// Prikaz k pauze videa
    function _Pause()
    {
        try {
            if (_GetVideo() != null) {
                if (BLN_TEST_NA_PC == false) _GetVideo().play(0);
            }
        }
        catch (err) { }
    }

	// Prikaz ke stop videa
    function _Stop() {
        try {
            var video = _GetVideo();
            if (video != null) {
                _VideoZruseni();
                _CelaObrazovka(); //Celou obrazovku vrati zpet
                $("#ID_DetailFilmuVideoStav").text(SlovnikSlovo("Zastaveno")); 
            }
        }
        catch (err) { }
    }

	// Prikaz k posunu vzad videa (o kolik v sekundach)
    function _PosunVzad(posun)
    {
        try {
            if (videoMP4 != null) {
				// Vypoctu novou pozici
                var novaPozice = videoMP4.playPosition - (posun * 1000); // in milliseconds
                $("#imgDetailFilmuVideoNacitani").show();
                //*** Zdenek - Ikonka nacitani i u cele obrazovky
                if (videoCelaObrazovka)
                    $("#ID_DetailFilmuVideoStavFullscreen").show();
                //***
                $("#ID_DetailFilmuVideoStav").text(SlovnikSlovo("Posouvani"));
                setTimeout(_VideoZobrazitStav, 5 * 1000);  // Osetreni stavu, kdy video nevyvola udalost, ze se prehrava
                if (novaPozice > 0) {
                    if (BLN_TEST_NA_PC == false) videoMP4.seek(novaPozice);
                }
				// Zacnu hrat od zacatku pokud jsem vypadl mimo (napr. posun o 30 minut zpet kdyz jsem na 10 minute)
                else {
                    if (BLN_TEST_NA_PC == false) videoMP4.seek(0);
                }
				// Zavolalo by se i automaticky po nejake dobe, takhle je to ale pro uzivatele prijemnejsi
                _ZobrazitAktualniCas();
            }
        }
        catch (err) { }
    }

	// Prikaz k posunu vpred videa (o kolik v sekundach)
    function _PosunVpred(posun)
    {
        try {
            if (videoMP4 != null) {
				// Vypoctu novou pozici
                var novaPozice = videoMP4.playPosition + (posun * 1000); // in milliseconds
				
				// Pokud jeste nejsem na konci
                if (novaPozice < videoMP4.playTime) {
                    $("#imgDetailFilmuVideoNacitani").show();
                    //*** Zdenek - Ikonka nacitani u cele obrazovky
                    if (videoCelaObrazovka)
                        $("#ID_DetailFilmuVideoStavFullscreen").show();
                    //***
                    $("#ID_DetailFilmuVideoStav").text(SlovnikSlovo("Posouvani"));
                    setTimeout(_VideoZobrazitStav, 5 * 1000);  // Osetreni stavu, kdy video nevyvola udalost, ze se prehrava
                    if (BLN_TEST_NA_PC == false) videoMP4.seek(novaPozice);
					
					// Zavolalo by se i automaticky po nejake dobe, takhle je to ale pro uzivatele prijemnejsi
                    _ZobrazitAktualniCas();
                }
            }
        }
        catch (err) { }
    }
	
	/* CelaObrazovka */
	
	// Pocitadlo, kolik zbyva jeste pred skrytim ovladani v celoobrazovkovem rezimu
	var casovacCelaObrazovkaOvladani = -1;
	
	// 5 sekund vydrzi zobrazene ovladani v celoobrazovkovem rezimu
	var casOvladani = 5;
	
	// Objekt casovace pri cele obrazovce
    var objCasovacCelaObrazovkaOvladani = null;
	
	// Panel s ovladacimi tlacitky pro celou obrazovku
	var divOvladani = null;
	
	// Pohyb mysi resetuje casovac pro skryti ovladani
	function MouseMoveOvladani(event) {
		casovacCelaObrazovkaOvladani = casOvladani;
	}
	
	// Vytvori ovladaci prvky pro prehravani pres celou obrazovku
	function _VytvoritCelaObrazovkaOvladani() {
		// Kontejner pro ovladaci prvky
		divOvladani = $("<div>", { id: "divPrehravacCelaObrazovkaOvladani" });
		$("#stranka").append(divOvladani);
		
		// Odchyt posuny mysi
		divOvladani.mousemove(MouseMoveOvladani);
		
		// Posuvnik zobrazujici aktualni stav prehravani
        var divPosuvnikKontejner = $("<div>", { id: "divPrehravacCelaObrazovkaPosuvnikKontejner" });
        var divPosuvnikAktualni = $("<div>", { id: "divPrehravacCelaObrazovkaPosuvnikAktualni" });
		var divTlacitka = $("<div>", { id: "divPrehravacCelaObrazovkaVideoTlacitka" });
        var divOvladaniPod = $("<div>", { id: "divPrehravacCelaObrazovkaVideoPod" });
        divOvladani.append(divPosuvnikKontejner);
        divPosuvnikKontejner.append(divPosuvnikAktualni);

		// Ovladaci tlacitka prehravani
		divOvladani.append(divTlacitka);
		var aa01 = $("<div>", { id: "divPrehravacCelaObrazovkaPlay", class: "btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
		divTlacitka.append(aa01[0]);
		var aa02 =$("<div>", { id: "divPrehravacCelaObrazovkaPause", class: "btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;"); 
		divTlacitka.append(aa02[0]);
		var aa03 = $("<div>", { id: "divPrehravacCelaObrazovkaStop", class: "btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
		divTlacitka.append(aa03[0]);
	        if (_ID_Sluzba!="1") {
  	  	var aa04 = $("<div>", { id: "divPrehravacCelaObrazovkaRewind", class: "btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
		divTlacitka.append(aa04[0]);
	    	var aa05 = $("<div>", { id: "divPrehravacCelaObrazovkaForward", class: "btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
		divTlacitka.append(aa05[0]);
	        aa04[0].AkceClick = function () { _PosunVzad(1 * 60) };
		aa05[0].AkceClick = function () { _PosunVpred(1 * 60) };
		}
	        var aa06 =$("<div>", { id: "divPrehravacCelaObrazovkaCelaObrazovka", class: "btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;"); 
		divTlacitka.append(aa06[0]);
		
		// Akce ovladacich tlacitek
		aa01[0].AkceClick = _Play;
		aa02[0].AkceClick = _Pause;
		aa03[0].AkceClick = _Stop;
		aa06[0].AkceClick = function () { _CelaObrazovka(); Navigace.VyberPrvku($("#ID_DetailFilmuCelaObrazovka")); }

		// Aktualni cas prehravani
		var aa07 = $("<span>", { id: "divPrehravacCelaObrazovkaVideoCas" }).append("&#160;");
 	       divOvladani.append(aa07[0]);
		
		$("#divPrehravacVideoStav").attr("id", "divPrehravacVideoStavRnm");
		var aa08 = $("<div>", { id: "divPrehravacVideoStav", class: "clsPrehravacCelaObrazovkaVideoStav" });
	        divOvladani.append(aa08[0]);
		$("#divPrehravacVideoStav").text($("#divPrehravacVideoStavRnm").text());
		if ($("#divPrehravacVideoStavRnm").hasClass("clsPrehravacVideoNacitani")) {
			$("#divPrehravacVideoStav").addClass("clsPrehravacVideoNacitani");
		}
		else { $("#divPrehravacVideoStav").removeClass("clsPrehravacVideoNacitani"); }
		
		divOvladani.append(divOvladaniPod);

		// Barevna tlacitka pro rychle skoky ve videu
		if (plnyFilm && _ID_Sluzba!="1")
		{
		var aa09 = $("<div>", { id: "divPrehravacCelaObrazovkaCervena", class: "btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
		divOvladaniPod.append(aa09[0]);
		var aa10 = $("<span>", { class: "clsPrehravacTlacitkaPopisek" }).append("+10min");
		divOvladaniPod.append(aa10[0]);
		var aa11 = $("<div>", { id: "divPrehravacCelaObrazovkaZelena", class: "btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
		divOvladaniPod.append(aa11[0]);
		var aa12 = $("<span>", { class: "clsPrehravacTlacitkaPopisek" }).append("+30min");
		divOvladaniPod.append(aa12[0]);
		var aa13 = $("<div>", { id: "divPrehravacCelaObrazovkaZluta", class: "btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
		divOvladaniPod.append(aa13[0]);
		var aa14 = $("<span>", { class: "clsPrehravacTlacitkaPopisek" }).append("-10min");
		divOvladaniPod.append(aa14[0]);
		var aa15 = $("<div>", { id: "divPrehravacCelaObrazovkaModra", class: "btnDetailFilmuTlacitka" }).PodporaNavigace().append("&#160;");
		divOvladaniPod.append(aa15[0]);
		var aa16 = $("<span>", { class: "clsPrehravacTlacitkaPopisek" }).append("-30min");
		divOvladaniPod.append(aa16[0]);
		
		// Akce barevnych tlacitek
		aa09[0].AkceClick = function () { _PosunVpred(10 * 60) };
		aa11[0].AkceClick = function () { _PosunVpred(30 * 60) };
		aa13[0].AkceClick = function () { _PosunVzad(10 * 60) };
		aa15[0].AkceClick = function () { _PosunVzad(30 * 60) };
		}

        lblInfoCasCelaObrazovka = $("#divPrehravacCelaObrazovkaVideoCas");    // Pro zrychleni	

		// Zobraz ovladaci listu pri prepnuti do fullscreenu
		_CelaObrazovkaOvladani(true);
		
		// Nastav casovac pro skryti ovladani
		casovacCelaObrazovkaOvladani = casOvladani;
	}

	// Zrusi celoobrazovkove ovladaci prvky
	function _ZrusitCelaObrazovkaOvladani() {
	    //*** Leos - Oprava (9.10.2012)
	    _CelaObrazovkaOvladani(false);

	    if (divOvladani != null) {
        //***
	        $("#divPrehravacVideoStavRnm").text($("#divPrehravacVideoStav").text());
	        if ($("#divPrehravacVideoStav").hasClass("clsPrehravacVideoNacitani")) {
	            $("#divPrehravacVideoStavRnm").addClass("clsPrehravacVideoNacitani");
	        }
	        else { $("#divPrehravacVideoStavRnm").removeClass("clsPrehravacVideoNacitani"); }

	        $("#divPrehravacVideoStavRnm").attr("id", "divPrehravacVideoStav");

	        casovacCelaObrazovkaOvladani = -1;
	        divOvladani.remove();
	        divOvladani = null;
	    }
	}
	
	// Zobrazi (prip. zrusi) ovladani pro celou obrazovku (prvni spusteni)
	function _CelaObrazovkaOvladani(ukaz) {
		
		if (ukaz) {
			divOvladani.show();
			// Predvyber prvni prvek
			Navigace.VyberPrvku($("#divPrehravacCelaObrazovkaPlay"));
			
			// Nastav casovac pro periodicke skryvani
			objCasovacCelaObrazovkaOvladani = setInterval(_SkrytCelaObrazovkaOvladani, 1000);
		}
        else {
            if (objCasovacCelaObrazovkaOvladani != null) {
                clearInterval(objCasovacCelaObrazovkaOvladani);
                objCasovacCelaObrazovkaOvladani = null;
            }
            if (divOvladani != null)
                divOvladani.hide();
		}
	}

	// Casovac pro automaticke skryvani ovladaciho prvku po uplynuti doby bez aktivity
	function _SkrytCelaObrazovkaOvladani() {
	    if (casovacCelaObrazovkaOvladani == 0) {
	        _CelaObrazovkaOvladani(false);
	        casovacCelaObrazovkaOvladani = -1;
	    }
	    else if (casovacCelaObrazovkaOvladani > 0) {
	        casovacCelaObrazovkaOvladani--;
	    }
	}


	this.MouseDown = _MouseDown;
	function _MouseDown(e) {
	    if (currentFile == null)
	        return false;
		if (videoCelaObrazovka) {
			if (casovacCelaObrazovkaOvladani < 0) {
				_CelaObrazovkaOvladani(true);
				casovacCelaObrazovkaOvladani = casOvladani;
				return true;
			}
			else {
				casovacCelaObrazovkaOvladani = casOvladani;
			}
		}
		
		return false;
	}

	window.onmouseon = _MouseOn;

	this.MouseOn = _MouseOn;
	function _MouseOn(event) {
	    if (currentFile == null)
	        return false;
	    if (videoCelaObrazovka) {
	        if (casovacCelaObrazovkaOvladani < 0) {
	            _CelaObrazovkaOvladani(true);
	            casovacCelaObrazovkaOvladani = casOvladani;
	            return true;
	        }
	        else {
	            casovacCelaObrazovkaOvladani = casOvladani;
	        }
	    }
	}
	/* CelaObrazovka konec */
	
    function _CelaObrazovka()
    {
        try {
            var video = _GetVideo();
            if (videoCelaObrazovka) {
                if (video != null) {
				
				/**/
				
				$("#ID_DetailFilmuVideoTlacitka").show();
				$("#ID_DetailFilmuVideoPod").show();
				$("#spodniListaObsah").show();
				$("#spodniLista").show();
        $("#ID_TlacitkoZpet").show();
				/**/
				_ZrusitCelaObrazovkaOvladani();

                    //$("#spodniListaObsah").show();
                    //*** Zdenek - Animace u cele obrazovky
                    $("#ID_DetailFilmuVideoStavFullscreen").hide();
                    //***
					if(typeof CelaObrazovkaPlatform == 'function')
					//if (CelaObrazovkaPlatform)
						CelaObrazovkaPlatform(false);
					else
					{
						video.setFullScreen(false);
						$(video).removeClass("clsVideoFullScreen");
						//*** Zmena podle dokumentace
						if (typeof (NetTV_ShowLocalUI) == 'function') {
							NetTV_ShowLocalUI(false); // disable local UI
						}
						//***
					}
                }
                videoCelaObrazovka = false;
            }
            // Zvetseni pokud neni video zrusene
            else if (video != null) {
                videoCelaObrazovka = true;
				
				/**/
				$("#ID_DetailFilmuVideoTlacitka").hide();
				$("#ID_DetailFilmuVideoPod").hide();
				$("#spodniListaObsah").hide();
				$("#spodniLista").hide();
        $("#ID_TlacitkoZpet").hide(); //nesla vybrat cervena, bylo prekryto neviditelnym tlacitkem
				/**/
				if(typeof CelaObrazovkaPlatform == 'function')
				//if (CelaObrazovkaPlatform)
					CelaObrazovkaPlatform(true);
                else
				{
					video.setFullScreen(true);
					
                //$("#spodniListaObsah").hide();
                $(video).addClass("clsVideoFullScreen");
                //*** Zmena podle dokumentace
                if (typeof (NetTV_ShowLocalUI) == 'function') {
                    NetTV_ShowLocalUI(true);  //to show local UI
                }
                //***
				}
				
				_VytvoritCelaObrazovkaOvladani();
            }
        }
        catch (err) { }
    }

    this.Zpet = function () {
        if (Licence.Zobrazeno && Licence.Zpet()) {
            return true;
        }

        if (_ZobrazenoDalsiOkno == true) {
            _DalsiOknoStorno();
            return true;
        }
        return false;
    }

    this.KeyDown = _KeyDown;
    function _KeyDown(e)
    {
        if (Licence.Zobrazeno && Licence.KeyDown(e)) {
            return true;
        }

		var videoButton = false;
		var vyberPrvekPoZobrazeni = null;
		
        switch (e.keyCode)
        {
            case INT_VK_PLAY:
				if (videoCelaObrazovka)
					vyberPrvekPoZobrazeni = "#divPrehravacCelaObrazovkaPlay";
				else
					vyberPrvekPoZobrazeni = "#ID_DetailFilmuPlay";
                //_Play();
				videoButton = true;
                _PlayTlacitko();
                break;

            case INT_VK_STOP:
				/*if (videoCelaObrazovka)
					vyberPrvekPoZobrazeni = "#divPrehravacCelaObrazovkaStop";
				else*/
				vyberPrvekPoZobrazeni = "#ID_DetailFilmuStop";
				videoButton = true;
                _Stop();
                break;

            case INT_VK_PAUSE:
				if (videoCelaObrazovka)
					vyberPrvekPoZobrazeni = "#divPrehravacCelaObrazovkaPause";
				else
					vyberPrvekPoZobrazeni = "#ID_DetailFilmuPause";
				videoButton = true;
                if (_GetVideo() != null)
                {
                    _Pause();
                }
                break;

            case INT_VK_PLAY_PAUSE:
				if (videoCelaObrazovka)
					vyberPrvekPoZobrazeni = "#divPrehravacCelaObrazovkaPause";
				else
					vyberPrvekPoZobrazeni = "#ID_DetailFilmuPause";
				videoButton = true;
                if (_GetVideo() != null) {
                    if (_GetVideo().playState == VIDEO_POZASTAVENO)
                        _Play();
                    else
                        _Pause();
                }
                break;

            case INT_VK_WIND:
				if (videoCelaObrazovka)
					vyberPrvekPoZobrazeni = "#divPrehravacCelaObrazovkaForward";
				else
					vyberPrvekPoZobrazeni = "#ID_DetailFilmuForward";
				videoButton = true;
                _PosunVpred(60);
                break;
				
			//*** Leos - Uprava (15.2.2013)
            case INT_VK_FAST_FWD:
                if (videoCelaObrazovka)
					vyberPrvekPoZobrazeni = "#divPrehravacCelaObrazovkaForward";
				else
					vyberPrvekPoZobrazeni = "#ID_DetailFilmuForward";
				videoButton = true;
                _PosunVpred(60);
                break;

            case INT_VK_REWIND:
				if (videoCelaObrazovka)
					vyberPrvekPoZobrazeni = "#divPrehravacCelaObrazovkaRewind";
				else
					vyberPrvekPoZobrazeni = "#ID_DetailFilmuRewind";
				videoButton = true;
                _PosunVzad(60);
                break;

            case INT_VK_9:			   
                if (_GetVideo() == null)
                    break;
				if (!videoCelaObrazovka) // nutno prohodit, protoze po tehle akci se prepne (cela obrazovka <-> okno)
					vyberPrvekPoZobrazeni = "#divPrehravacCelaObrazovkaCelaObrazovka";
				else
					vyberPrvekPoZobrazeni = "#ID_DetailFilmuCelaObrazovka";
				videoButton = true;
                _CelaObrazovka();
                break;

            case INT_VK_RED:
				if (videoCelaObrazovka)
					vyberPrvekPoZobrazeni = "#divPrehravacCelaObrazovkaCervena";
				else
					vyberPrvekPoZobrazeni = "#ID_DetailFilmuCervena";
				videoButton = true;
                _PosunVpred(10 * 60);
                break;

            case INT_VK_GREEN:
				if (videoCelaObrazovka)
					vyberPrvekPoZobrazeni = "#divPrehravacCelaObrazovkaZelena";
				else
					vyberPrvekPoZobrazeni = "#ID_DetailFilmuZelena";
				videoButton = true;
                _PosunVpred(30 * 60);
                break;

            case INT_VK_YELLOW:
				if (videoCelaObrazovka)
					vyberPrvekPoZobrazeni = "#divPrehravacCelaObrazovkaZluta";
				else
					vyberPrvekPoZobrazeni = "#ID_DetailFilmuZluta";
				videoButton = true;
                _PosunVzad(10 * 60);
                break;

            case INT_VK_BLUE:
				if (videoCelaObrazovka)
					vyberPrvekPoZobrazeni = "#divPrehravacCelaObrazovkaModra";
				else
					vyberPrvekPoZobrazeni = "#ID_DetailFilmuModra";
				videoButton = true;
                _PosunVzad(30 * 60);
                return true;

            case INT_VK_RETURN:
                if (videoCelaObrazovka)
                {
                    _CelaObrazovka();
					Navigace.VyberPrvku($("#ID_DetailFilmuPlay")); // vyber play tlacitko pro pokracovani
					
                    return true;
                }
                break;

        }

        // Osetreni stavu, kdy je video na celou obrazovku - nic se po zmacknuti klavesy nestane
        try
        {
            
			if (videoCelaObrazovka) {
				if (casovacCelaObrazovkaOvladani < 0) {
					_CelaObrazovkaOvladani(true);
					// pokud byl ovladac skryty, nema fungovat navigace, takze se vrati true
					videoButton = true;
				}
				
				casovacCelaObrazovkaOvladani = casOvladani;
			
				// vybrani tlacitka na obrazovce (po stisknuti tlacitka na fyzickem ovlada)
				if (vyberPrvekPoZobrazeni != null)
					Navigace.VyberPrvku($(vyberPrvekPoZobrazeni));
			
				return videoButton;
			}

			// vybrani tlacitka na obrazovce (po stisknuti tlacitka na fyzickem ovlada)
			if (vyberPrvekPoZobrazeni != null)
				Navigace.VyberPrvku($(vyberPrvekPoZobrazeni));
        }
        catch (err) { }

        return false;
    }

        var _AsynchAkceKoupitFilm = false;
        function _AsynchronniAkce(ID_Sluzba) {
            if (_AsynchAkceKoupitFilm) {
                _AsynchAkceKoupitFilm = false;
                if (Licence.ProvedenoStorno() == true)
                    _DalsiOknoStorno();
                else {
                    _koupenNovyFilm = true;
                    _ZobrazitDetailFilmu();
                    if (_ID_Sluzba=="1")
                        _ZobrazZiveKanaly();
                }
            }
        }
    
//-------------------------

  function _ZobrazZiveKanaly()
  {
    $("#nadpis").remove();
    $("#divHorniLista").append($("<h1>", { id: "nadpis" }).append(SlovnikSlovo("PayTv")));
		// Nacitaci dialog
//     ZobrazitCekani(true);
    if (_ID_Film=="")
      _NaplnitDetailFilmu(null);    
    _SeznamVytvorit();
  }
  
  	// Nacte ze serveru seznam filmu odpovidajici aktualnimu nastaveni stranky
    function _GetSeznamFilmu(poradiStranky, funkce)
    {
		// Nacti seznam filmu ze serveru
        GetJSON("GetSeznamKanalu" + DoplnitParametryUrl([
            "typ=TV",
            "ID_Skupina=",
            "ID_Podmenu=",
            "filtrZakoupeno=false",
            "filtrNazev=",
            "filtr3D=false",
            "filtrHD=false",
            "tridit=0",
            "poradiStranky=" + poradiStranky, "pocetFilmuNaStrance=6", "PodporovaneFormaty=3"
        ]), funkce);
    }
    
    	// Skryj svoje prvky, cast 2
    function _SkrytSeznamFilmu()
    {
        $("#divStrankaTV").remove();
    }
  
      // Seznam filmu do hlavniho pole podle hledaneho nazvu nebo podle zanru
    function _SeznamVytvorit() {	
        ZobrazitCekani(true);	
		// Schovam aktualni data
        _SkrytSeznamFilmu();
		
		// Nactu seznam filmu
        _GetSeznamFilmu(_RolovaciSeznamStrana,
        function (filmInfoCol)
        {
			// Po nacteni nastavim spravne scrollovani
            seznamCol = filmInfoCol.Col;
            _RolovaciSeznamFilm = new cRolovaciSeznam();
            _RolovaciSeznamFilm.PocetPrvku = filmInfoCol.PocetCelkem;
            _RolovaciSeznamFilm.PocetRadkuNaStranku = 6;
            _RolovaciSeznamFilm.PocetPrvkuVRadku = 1;
            _RolovaciSeznamFilm.AktualniPrvniRadek = 0;
            _RolovaciSeznamFilm.PocetRadkuPosun = 6;
            _RolovaciSeznamFilm.PozicePrvkuPosunNahoru = [0];
            _RolovaciSeznamFilm.PozicePrvkuPosunDolu = [5];

			// Kontejner pro data
            var div = $("<div>", { id: "divStrankaTV", class: "clsSeznamFilmuStrankaObsah" });
            $("#stranka").append(div);

			// Naplnim kontejner filmy
            _SeznamNaplnit(seznamCol);

            ZobrazitCekani(false);
        });
    }
    
    	// Naplni hlavni pole seznamem filmu - cast 2, konkretni stranka
    function _SeznamNaplnitPolozky(filmInfoCol, prvni, posledni, horni)
    {
		// Zobrazit scrollbar
        _RolovaciSeznamFilm.ZobrazitPosuvnik($("#divStrankaTV"));

		// Nic nenalezeno
        if (filmInfoCol.length == 0) {
            $("#divStrankaTV").append($("<div>", { id: "divTextPrazdnaStranka", text: SlovnikSlovo("NicNenalezeno") }));
        }

		// Jdu zdolu nebo zhora?
        if (horni)
        {
            for (var i = posledni; i >= prvni; i--)
            {
                var div = _SeznamNaplnitPolozku(filmInfoCol, i);
                $("#divStrankaTV").prepend(div);
            }
        }
        else
        {
            for (var i = prvni; i <= posledni; i++)
            {
                var div = _SeznamNaplnitPolozku(filmInfoCol, i);
                $("#divStrankaTV").append(div);
            }
        }
        if (filmInfoCol.length>0)
          Navigace.VyberPrvku($(".divSeznamTV:first"));
    }
    
    	// Posun seznam filmu dolu
    function _SeznamPosunDoluFilm(index)
    {
		// Je kam posouvat?
        if (_RolovaciSeznamFilm.SeznamPosunDolu(index + (_RolovaciSeznamFilm.AktualniStranka() * _RolovaciSeznamFilm.PocetRadkuNaStranku * _RolovaciSeznamFilm.PocetPrvkuVRadku) + _ZobrazenaSluzbaPosun))
        {
			// Cekaci dialog
            ZobrazitCekani(true);
			
			// Odeber stare polozky
            _SeznamOdebratPolozky(_RolovaciSeznamFilm.PocetRadkuPosun * _RolovaciSeznamFilm.PocetPrvkuVRadku, true)
			
			// Nacti seznam filmu ze serveru (strankovani, atd.)
            _GetSeznamFilmu(_RolovaciSeznamFilm.AktualniStranka(),
            function (filmInfoCol)
            {
				// Muzu dostat odpoved, ze aplikace je v udrzbe
                if (KontrolaServis(filmInfoCol.Servis))
                {
					// Naplnim vracena data
                    seznamCol = filmInfoCol.Col;
                    _SeznamNaplnit(seznamCol);
					
					// Vyberu prvni film
                    Navigace.VyberPrvku($(".divSeznamTV:first"));
                    ZobrazitCekani(false);
                }
            });

            return true;
        }
        return false;
    }
    
    	// Posun seznam filmu nahoru
    function _SeznamPosunNahoruFilm(index)
    {
		// Je kam posouvat?
        if (_RolovaciSeznamFilm.SeznamPosunNahoru(index + (_RolovaciSeznamFilm.AktualniStranka() * _RolovaciSeznamFilm.PocetRadkuNaStranku * _RolovaciSeznamFilm.PocetPrvkuVRadku) + _ZobrazenaSluzbaPosun))
        {
			// Cekaci dialog
            ZobrazitCekani(true);
			
			// Odeber stare polozky
            _SeznamOdebratPolozky(_RolovaciSeznamFilm.PocetRadkuPosun * _RolovaciSeznamFilm.PocetPrvkuVRadku, false)

			// Nacti seznam filmu ze serveru (strankovani, ,atd.)
            _GetSeznamFilmu(_RolovaciSeznamFilm.AktualniStranka(),
            function (filmInfoCol)
            {
				// Muzu dostat odpoved, ze aplikace je v udrzbe
                if (KontrolaServis(filmInfoCol.Servis))
                {
					// Naplnim vracena data
                    seznamCol = filmInfoCol.Col;
                    _SeznamNaplnit(seznamCol);
					
					// Vyberu posledni film
                    Navigace.VyberPrvku($(".divSeznamTV:last"));
                    ZobrazitCekani(false);
                }
            });

            return true;
        }
        return false;
    }
    
    	// Naplni hlavni pole seznamem filmu - cast 1
    function _SeznamNaplnit(filmInfoCol)
    {
        //        _SeznamNaplnitPolozky(filmInfoCol, _RolovaciSeznamFilm.PrvniPrvekNaStrance(), _RolovaciSeznamFilm.PosledniPrvekNaStrance() - _ZobrazenaSluzbaPosun, false);
        _SeznamNaplnitPolozky(filmInfoCol, 0, filmInfoCol.length - 1 - _ZobrazenaSluzbaPosun, false);
    }
    
    	// Naplni hlavni pole filmem - cast 3, konkretni polozka
    function _SeznamNaplnitPolozku(filmInfoCol, i)
    {
        if (filmInfoCol[i].ID == STR_ID_PRAZDNE)
            return;

        var divDetail = $("<div>", { class: STR_CLS_PODPORA_NAVIGACE + " " + STR_CLS_PODPORA_ROLOVANI + " divSeznamTV" 
             + (filmInfoCol[i].CanPlay ? ' playable' : '') + (filmInfoCol[i].ID==_ID_Film ? " selected" : "") });
        divDetail[0].Pozice = i;
		
		// Nabinduj scrolovaci funkce
        divDetail[0].PosunDolu = _SeznamPosunDoluFilm;
        divDetail[0].PosunNahoru = _SeznamPosunNahoruFilm;

        divDetail[0].ID_Film = filmInfoCol[i].ID;    // Nemuze byt divDetail[0].ID, protoze s tim ma problem Samsung 2011
        divDetail[0].ID_HlavniMenu = _ID_HlavniMenu;
		
		// Po vyberu zobrazeni detailu filmu
        divDetail[0].onclick = function () {
          $('.divSeznamTV').removeClass('selected');
          $(this).addClass('selected');
          _RolovaciSeznamStrana=_RolovaciSeznamFilm.AktualniStranka();
          _ID_Film=this.ID_Film; 
//           _koupenNovyFilm=true;
          _ZobrazitDetailFilmu(); };

        divDetail.append($("<img>", { alt: "", src: filmInfoCol[i].LinkObrazek, class: "clsSeznamTVObrazek" }));
        divDetail.append($("<div>", { class: "clsSeznamTVNadpis" }).append(filmInfoCol[i].Nazev));
        divDetail.append($("<div>", { class: "clsSeznamTVPopis" }).append(_ZanryText(filmInfoCol[i].ZanrCol)));
		
        return divDetail;
    }
    
    function _SeznamOdebratPolozky(pocet, horni)
    {
        for (var i = 0; i < pocet; i++)
        {
            if (horni)
                $(".divSeznamTV:first").remove();
            else
                $(".divSeznamTV:last").remove();
        }
    }

}

Util.println("run--------------------js_progress_control.js---------------------");
// Globalni zpracovani klaves (jednotlive stranky mohou mit vlastni)
function KeyDown(e) {
    try {
		// ZH: Debug, po zmacknuti zelene se znovu nacte aplikace
		/*if (e.keyCode == INT_VK_GREEN)
		{
			log(1, "App reload attempt");
			location.reload(true);
			e.preventDefault();
			return;
		}*/

        // Osetreni mackani tlacitek pred nactenim obrazovky
        if (ZobrazovaniStranky()) {
            e.preventDefault();
            return;
        }

        // Neni chybovy dialog
        if (ZobrazenaChyba == false) {
            if (DetailFilmu.Zobrazeno && DetailFilmu.KeyDown(e)) {
                e.preventDefault();
                return;
            }

            if (SeznamFilmu.Zobrazeno && SeznamFilmu.KeyDown(e)) {
                e.preventDefault();
                return;
            }

            if (SeznamBalicku.Zobrazeno && SeznamBalicku.KeyDown(e)) {
                e.preventDefault();
                return;
            }

            if (StatickaStranka.Zobrazeno && StatickaStranka.KeyDown(e)) {
                e.preventDefault();
                return;
            }
        }

        switch (e.keyCode) {
            case INT_VK_RETURN:
                if ((povolitZpetPriVybranemInputu) || (!Navigace.JeVybranInput())) {
                    if (Zpet())
                        e.preventDefault();
                }
                break;
            case INT_VK_LEFT:
                if (Navigace.NavigacePovolena() && !Navigace.JeVybranInput()) {
                    Navigace.PosunDoleva();
                    e.preventDefault();
                }
                break;
            case INT_VK_RIGHT:
                if(e.target.id == "txtRodicovskyZamek")
                {
                	if (Navigace.NavigacePovolena()) {
                    Navigace.PosunDoprava();
                    }
                }
                else{
                	if (Navigace.NavigacePovolena() && !Navigace.JeVybranInput()) {
                    Navigace.PosunDoprava();                  
                    }                	
                }
                e.preventDefault();
                break;
            case INT_VK_UP:
                if (Navigace.NavigacePovolena()) {
                    Navigace.PosunNahoru();
                    e.preventDefault();
                }
                break;
            case INT_VK_DOWN:
                if (Navigace.NavigacePovolena()) {
                    Navigace.PosunDolu();
                    e.preventDefault();
                }
                break;
            case INT_VK_ENTER:
                Navigace.AkcePrvku();
                e.preventDefault();
                break;
            case INT_VK_YELLOW:
                if (SpodniListaZobrazitZamekAktualni == true && Uzivatel != null)
                    SpravaUctu.Zobrazit();
                break;
        }
    }
    catch (err) {
        ChybaAjax({ status: -1 }, null, err.message, null);
    }
};


//***

// Genericka funkce pro nacitani CSS stylu, pokracovaci funkce se vola asynchronne bez ohledu na nacteni (dle specifikace, u Philipsu slo i synchronne)
function NacistStyl(cesta, funkcePoNacteni) {
    var styl = document.createElement("link");
	//styl.setAttribute('rel', 'stylesheet');

    styl.rel = "stylesheet";
    styl.type = "text/css";
	styl.onerror = function () { /*log(1, "Error loading style " + cesta + ": " + err.message);*/ };
    styl.onload = function () {
    	try{
            ChybaAjax({ status: -1 }, null, err.message, null);
            }catch(e){console.log('e.message  in hlavni.js NacistStyl styl.onload '+e.message);}
    };
    styl.href = cesta;
    document.getElementsByTagName("head")[0].appendChild(styl);
	funkcePoNacteni();
}

