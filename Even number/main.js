
function evennumber(){
    var cem=0;
    for( var i = 0; i < arguments.length;i++)
    if(arguments[i]%2 == 0){
        cem += arguments[i];
        
    }else{
        alert("Cut reqem daxil edin.")
    }
    return cem;
}



console.log(evennumber(77,8,4));