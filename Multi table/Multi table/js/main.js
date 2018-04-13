var input= document.querySelector('#num');
var submit = document.querySelector('.btn-default');

submit.onclick = function (){
    var n = input.value;
    var x = 1;
    for (i=1; i <= 10; i++){
        console.log(n + "*" + i + "=" + (x = n *i))
    }
}
