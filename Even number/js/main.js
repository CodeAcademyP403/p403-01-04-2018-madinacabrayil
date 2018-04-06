var submitButton = document.querySelector('#submit');
var Number1Input = document.querySelector('#number1');
var Number2Input = document.querySelector('#number2');

var resultInput = document.querySelector('#result');

function evennumber(n1,n2){
    if(n1%2==0 && n2%2==0){
        return n1+n2
    }else{
        alert("Cut reqem daxil edin.")
    }
}



submitButton.onclick = function(){
    var Number1Value = Number(Number1Input.value);
    var Number2Value = Number(Number2Input.value);
   
    if(Number1Value && Number2Value)
    {
        resultInput.value = evennumber(Number1Value, Number2Value);
    }
    else
    {
        alert("Reqem daxil edin.");
    }
} 
