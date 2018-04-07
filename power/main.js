 


function sum(){
    var cem = 0;
    for(var i=0; i< arguments.length;i++){
        if(typeof arguments[i] == "number");
        cem += arguments[i]*arguments[i];
    }
    return cem;
}

console.log(sum(1,2,3,4));
