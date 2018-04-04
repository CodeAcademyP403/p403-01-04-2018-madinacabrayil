var submitButton = document.querySelector('#submit');
var Number1Input = document.querySelector('#number1');
var Number2Input = document.querySelector('#number2');

var resultInput = document.querySelector('#result');


function power(n1, n2){
    return n1*n1+n2*n2
}


submitButton.onclick = function(){
    var Number1Value = Number(Number1Input.value);
    var Number2Value = Number(Number2Input.value);
   
    if(Number1Value && Number2Value)
    {
        resultInput.value = power(Number1Value, Number2Value);
    }
    else
    {
        alert("Reqem daxil edin.");
    }
} 
