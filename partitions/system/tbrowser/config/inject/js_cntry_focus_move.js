Util.println("---run js_cntry_focus_move.js---");
var tcl_netrange_cntry = document.getElementById('cntry');
var tcl_netrange_cntryBtn = document.getElementById('cntryBtn');
var tcl_netrange_cntryListWrp = document.getElementById('cntryListWrp');
var tcl_netrange_timer;
tcl_netrange_cntryBtn.style.marginTop = "-1px";
var tcl_netrange_flag = true;
if (tcl_netrange_cntryBtn) {
	tcl_netrange_cntryBtn.onkeydown = function(e) {
		if (e.keyCode == 37 || e.keyCode == 39)
			return false;
	}
	tcl_netrange_cntryBtn.onclick = function() {
		if (tcl_netrange_flag) {
			tcl_netrange_flag = false;
			tcl_netrange_timer = setInterval(tcl_netrange_cntryList(), 300);
		}
	}
}

function tcl_netrange_cntryList()
{
	if (tcl_netrange_cntryListWrp.hasChildNodes()) {
		var i;
		var cntryList0 = document.getElementById('cntryList0');
		var cntryList1 = document.getElementById('cntryList1');
		var cntryList2 = document.getElementById('cntryList2');
		var cntryList3 = document.getElementById('cntryList3');
		for (i = 0; i < cntryList3.childNodes.length; i++) {
			var child_li = cntryList3.childNodes.item(i);
			child_li.onkeydown = function(e) {
				if (e.keyCode == 39)
					return false;
			}
		}
		tcl_netrange_cntryBtn.onkeydown = function(e) {
			if (e.keyCode == 38) {
				console.log("---zhognzw--- cntryListWrp hasChild");
				if (tcl_netrange_cntryBtn.offsetTop != 0) 
					cntryList3.childNodes.item(7).firstChild.focus();
				return false;
			}
			else if (e.keyCode == 37 || e.keyCode == 39)
				return false;
		}
		cntryList0.childNodes.item(7).onkeydown = function(e) {
			if (e.keyCode == 40) {
				tcl_netrange_cntryBtn.focus();
				return false;
			}
		}
		cntryList1.childNodes.item(7).onkeydown = function(e) {
			if (e.keyCode == 40) {
				tcl_netrange_cntryBtn.focus();
				return false;
			}
			else if (e.keyCode == 39) {
				cntryList2.childNodes.item(7).firstChild.focus();
				return false;
			}	
		}
		cntryList2.childNodes.item(7).onkeydown = function(e) {
			if (e.keyCode == 40) {
				tcl_netrange_cntryBtn.focus();
				return false;
			}
			else if (e.keyCode == 37) {
				cntryList1.childNodes.item(7).firstChild.focus();
				return false;
			}
		}
		clearInterval(tcl_netrange_timer);
	}
}
