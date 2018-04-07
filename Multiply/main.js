var numbers = [5,9,99,88,7];
console.log(multi(numbers));

function multi(inputArray){
    var result = 1;
    for(var i = 0; i < inputArray.length; i++){
        result *= inputArray[i];
        if(typeof arguments[i] == "number");
    }
    return result;
}


