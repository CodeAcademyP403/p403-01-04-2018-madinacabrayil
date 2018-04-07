var submitBtn = document.querySelector('#submit');
var numberInput = document.querySelector('#inputNum');

submitBtn.addEventListener("click", addTable);


function addTable(i, j){
    var result = 1;
    for (var i = 0; i <= 10; i++) {
    
        for (var j = 0; j < 10; j++) {
    
            if(i == 0 && j > 0){
              result += '[' + j + ']';
            } 
            else if(j == 0 && i>0){
              result += '[' + i + '] ';
            } 
            else if(i>0 && j>0){
            result += i + '*' + j + '=' + i*j + '\n';
            }
        }
       return result;
    }
    console.log(addTtable);     
}


