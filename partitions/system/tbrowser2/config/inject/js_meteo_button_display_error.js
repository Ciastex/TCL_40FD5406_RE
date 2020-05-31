function createBtn(btn_id, text, text_style, style, parent, zone, xval, yval) {

	try {

		Btn = document.createElement('div');
		Btn.setAttribute('id', btn_id);
		Btn.zone = zone;
		Btn.btn_type = 'Btn';
		if (typeof (xval) != 'undefined')
			Btn.xval = xval;
		else
			Btn.xval = 0;

		// if (typeof (yval) != 'undefined') Btn.yval = yval;
		Btn.setAttribute("style", 'position:absolute; line-height: 38px; height: 38px;' + style);

		if (mouseSupport && !numericable)
			Btn.onmouseover = function() {
				moveSelecteur(this);
			};

		parent.appendChild(Btn);

		Btn_a = document.createElement('div');
		Btn_a.setAttribute('style', "position:absolute; top:0px; background: url(img/Btn.png) 0px 0px no-repeat; width:" + eval(10 + parseInt(Btn.style.width)) + "px; height:38px; ");
		Btn.appendChild(Btn_a);

		Btn_b = document.createElement('div');
		Btn_b.setAttribute('style', "position:absolute; top:0px; left:" + eval(9 + parseInt(Btn.style.width)) + "px; background: url(img/Btn.png) -210px 0px no-repeat; width:11px; height:38px; ");
		Btn.appendChild(Btn_b);

		Btn_text = document.createElement('span');
		Btn_text.setAttribute('id', btn_id + '_span');
		Btn_text.setAttribute('style', "position:absolute; top:2px; width:30px; line-height: 38px; height:38px; overflow:hidden; text-overflow:ellipsis; text-align: center;	font-size: 17px; " + text_style);
		// Btn_text.textContent = text;
		Btn.appendChild(Btn_text);
	}

	catch (e)

	{
		debug("error createBtn");
		debug(e);
	}

}