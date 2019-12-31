let firstInput = document.getElementById('fInput');
let secondInput = document.getElementById('sInput');
let button = document.getElementById('btn');
let firstValue;
let secondValue;
let firstIsChecked = false;
let secondIsChecked = false;


function firstValidate() {
     firstValue = firstInput.value.replace(/ /g,'');
     
    for (let i = 0; i <= firstInput.value.length ; i++) {
       
        if (firstValue.length >= 3  ) {
            firstIsChecked = true;
        }else{
            firstIsChecked = false;
        }
        
    }
   
    if (firstIsChecked && secondIsChecked) {
        button.disabled = false;
        
    
    }else{
        button.disabled = true;
    }
}
function secondValidate() {
    secondValue = secondInput.value.replace(/ /g,'');
   for (let i = 0; i <= secondInput.value.length ; i++) {
      
       if (secondValue.length >= 3  ) {
           secondIsChecked = true;
       }else{
        secondIsChecked = false;
       }
       
   }
   if (firstIsChecked && secondIsChecked) {
    button.disabled = false;
    

}else{
    button.disabled = true;
}
}

function hide() {
    document.getElementById('div').style.display = 'none';
    document.getElementById('welcome').innerHTML = `welcome ${firstValue} ${secondValue}`;
    document.getElementById('welcome').style.display = 'block'

}

