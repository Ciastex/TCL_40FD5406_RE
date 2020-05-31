var _crt = { enabled: false };
function _setCRT(c) {
    _crt.enabled = c;
    if(c) {
        nrdp.gibbon._runConsole("/set debug testSurfaceLoadCRT=true");
        if(nrdp.gibbon.scene.root) {
            _crt.effect = nrdp.gibbon.scene.root.addEffect("crt");
            if(!_crt.overlay) {
                _crt.overlay = nrdp.gibbon.makeWidget({width: 1280, height: 720, opacity: 0.65, visible: false});
                _crt.overlay.image.halign = _crt.overlay.image.valign = "stretch";
                _crt.overlay.image.url = "http://localcontrol.netflix.com/img/snow.mng";
                nrdp.gibbon.scene.overlay = _crt.overlay;
                function startTimer() {
                    _crt.timer = nrdp.gibbon.setTimeout(function() { _crt.overlay.visible = !_crt.overlay.visible; startTimer(); }, 5000);
                }
                startTimer();
            }
        }
    } else {
        nrdp.gibbon._runConsole("/set debug testSurfaceLoadCRT=false");
        if(_crt.timer) {
            nrdp.gibbon.clearTimeout(_crt.timer);
            _crt.timer = 0;
        }
        if(_crt.effect) {
            nrdp.gibbon.scene.root.removeEffect(_crt.effect);
            _crt.effect = undefined;
        }
        if(_crt.overlay) {
            nrdp.gibbon.scene.removeOverlay(_crt.overlay);
            _crt.overlay = undefined;
        }
    }
}
nrdp.gibbon._hookProperty(nrdp.gibbon.scene, 'root', function(widget, old) {
    old.call(nrdp.gibbon.scene, widget);
    if(_crt.enabled)
        _setCRT(true);
});
nrdp.addEventListener("init", function() { _setCRT(true); });
if(nrdp.isReady)
    _CRT(true);
