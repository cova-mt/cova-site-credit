window.onload = function(){
    //Footer Site Credit
    lever('clsc', 'clsc', 'open');
}
function lever(trigger, target, type) {
    var trig = (typeof trigger == 'string') ? document.getElementById(trigger) : trigger;
    var targ = (typeof target == 'string') ? document.getElementById(target) : target;
    trig.addEventListener("click", function() {
        switch(type) {
            case '1':
            case 'open':
                targ.classList.add('open');
                break;
            case '0':
            case 'close':
                targ.classList.remove('open');
                break;
            case '0a':
            case 'closeAll':
                for (var i = 0; i < targ.length; i++){
                    if(trig == targ[i]) { continue; }
                    targ[i].classList.remove('open');
                }
                break;
            default:
                targ.classList.toggle('open');
        }
    });
}
