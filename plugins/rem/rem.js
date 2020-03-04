var calcFont = null;
(function(doc,win){
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if(!clientWidth) return;
            if(clientWidth >= 750){
                docEl.style.fontSize = '100px';
                calcFont = 100;
            }else{
                docEl.style.fontSize = 100 * ( clientWidth / 750) + 'px';
                calcFont = 100 * ( clientWidth / 750);
            }
        };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document,window)