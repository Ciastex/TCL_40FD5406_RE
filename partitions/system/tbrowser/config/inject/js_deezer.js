Util.println("run--------------------js_deezer---------------------");

var textButton2 = document.getElementById("textButton2");

Accueil.prototype.init = function() {
    try {
        debug(" init accueil ", "green");
        nameUser = readCookie("name");
        this.subContentElement = createDivWithParent("subContentElementAccueil", "", document.getElementById("content"));
        this.titleElement = document.getElementById("title");
        var a = this;
        this.userNameTxt = createDivWithParent("userNameDiv", "", this.subContentElement);
        this.countfalse = 0;
        this.AccueilVector = new Matrix;
        this.AccueilVector.createItem = function(b, c) {
            debug(" init AccueilVector ", "green");
            isNaN(a.countfalse) && (a.countfalse = 0);
            var d = document.createElement("div"),
            e = document.createElement("img");
            e.setAttribute("id", "itemAccueilImg_" + c);
            3 > c ? (d.setAttribute("onclick", "screenLoadAlbum();"), d.setAttribute("onmouseover", "Main.selectMenuElement('accueilMatrix', 0, " + c + "); keyboardActive = false;")) : 3 == c ? (d.setAttribute("onclick", "screenLoadAlbum();"), d.setAttribute("onmouseover", "Main.selectMenuElement('accueilMatrix', 1, 0); keyboardActive = false;")) : 4 == c ? (d.setAttribute("onclick", "screenLoadAlbum();"), d.setAttribute("onmouseover", "Main.selectMenuElement('accueilMatrix', 1, 1); keyboardActive = false;")) : (d.setAttribute("onclick", "screenActualite();"), d.setAttribute("onmouseover", "Main.selectMenuElement('accueilMatrix', 1, 2); keyboardActive = false;"));
            var f = document.createElement("div");
            f.setAttribute("id", "itemAccueilTitle_" + c);
            d.setAttribute("id", "divSleeve_" + c);
            createImgWithParent("sleeveSelector", "", "Resource/image/accueils/selecteur-cover6.png", d);
            d.appendChild(e);
            d.appendChild(f);
            toggleClass(f, "accWidgetFont");
            if (5 == c) e.setAttribute("src", b.cover),
            setInnerHTML(f, trad.localize(trad.codeLang, "deezerAll")),
            isSamsung && device_2012() ? f.style.lineHeight = "1": isSamsung && !device_2012() ? f.style.lineHeight = "0.5": isLg && (f.style.lineHeight = "1"),
            "ko" == trad.codeLang && (f.style.marginTop = "7px", f.style.width = "160px");
            else {
                try {
                    e.setAttribute("src", b.cover + "&size=253"),
                    setInnerHTML(f, '<font class="titlePlayer" id="titleAlbum_' + c + '">' + b.title + '</font> - <font class="artistPlayer" id="artist_' + c + '">' + b.artist.name + "</font>")
                } catch(g) {
                    debug(" erreur create item accueil " + g + " : " + g.stack, "brown")
                }
                2 != c && (d.style.marginRight = "69px")
            }
            b.readable || void 0 == b.readable || (d.style.opacity = "0.2", d.notReadable = !0, a.countfalse += 1, debug(" count " + a.countfalse, "green"));
            return d
        };
        this.AccueilVector.select = function(a) {
            void 0 != a && a.firstChild && (a.firstChild.style.visibility = "visible")
        };
        this.AccueilVector.unSelect = function(a) {
            void 0 != a && a.firstChild && (a.firstChild.style.visibility = "hidden")
        };
        for (var b = 0; b < tab_.length; b++) index = Math.floor(Math.random() * indexRandom),
        tab_[b] = tabEditorial[index],
        tabEditorial = unset(tabEditorial, tabEditorial[index]);
        var c = 'batch?methods=[{"request_method":"get","relative_url":"editorial/' + tab_[0] + '/selection"}, ',
        c = c + ('{"request_method":"get","relative_url":"editorial/' + tab_[1] + '/selection"}, '),
        c = c + ('{"request_method":"get","relative_url":"editorial/' + tab_[2] + '/selection"}, '),
        c = c + ('{"request_method":"get","relative_url":"editorial/' + tab_[3] + '/selection"}, '),
        c = c + ('{"request_method":"get","relative_url":"editorial/' + tab_[4] + '/selection"}]&output=jsonp'),
        d = this,
        e = Array(5),
        g = new XMLHttpRequest;
        Main.loadJSON(urlBase + c, new XMLHttpRequest,
        function(b) {
            var c = b.batch_result.length,
            f, q = Math.floor(4 * Math.random() + 1);
            if (isDefined(c)) for (var u = 0; u < c; u++) {
                index = Math.floor(4 * Math.random() + 1),
                e[u] = b.batch_result[u].data[index];
                if (e[u] == null) {
                    //Util.println("index is:" + index + " data.length is:" + b.batch_result[u].data.length + " u is :" +u);
                    e[u] = b.batch_result[u].data[0];
                }
            }
            e[5] = element6;
            d.selectionJsonArray = e;
            a.countfalse = 0;
            d.AccueilVector.init(2, 3, e, d.subContentElement, "horizontal");
            f = urlBase + "album/" + e[q].id + "/tracks?output=jsonp";
            Main.selectMenuElement("accueilMatrix", 1, 2);
            isDefined(e[q].id) ? Main.loadJSON(f, g,
            function(b) {
                d.trackAlbumObject = b;
                d.numberOfTitlesInActiveAlbum = b.total;
                a.countfalse = 0;
                isDefined(d.numberOfTitlesInActiveAlbum) && 0 != d.numberOfTitlesInActiveAlbum ? (activeTrackSetType = "accueil", log("je suis dans le player d'accueil " + b.data[0]), isDefined(b.data[0]) && (songAccueil = b.data[0], songAccueil.src = e[q].cover, songAccueil.artist = e[q].artist.name, console.log("lancement du son " + f), Main.song = songAccueil, Main.song.id = songAccueil.id, Main.songAjaxRequest(songAccueil, !1))) : isDefined(b.error) ? log("Accueil - Exception, error.code : " + b.error.code + ", error.message : " + b.error.message) : log("Accueil - Exception : erreur inconnue !")
            },
            function(a) {}) : log("Accueil.prototype.init - le tableau tab[indexSong].id n'est pas defini")
        },
        function(a) {});
        this.srcButton1 = "Resource/image/boutons/bouton-quitter.png";
        this.srcButton2 = "Resource/image/boutons/bouton-connexion-deconnection.png";
        this.selector1 = document.getElementById("imgButtonSelector1");
        this.selector1.src = "Resource/image/boutons/bouton-selecteur.png";
        this.selector1.style.visibility = "hidden";
        this.selector2 = document.getElementById("imgButtonSelector2");
        this.selector2.src = "Resource/image/boutons/selecteur-bouton-connexion.png";
        this.selector2.style.visibility = "hidden";
        this.loadButtons()
    } catch(f) {
        debug(" erreur accueil " + f + " : " + f.stack)
    }
};