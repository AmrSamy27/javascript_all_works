let nameInput ;
let passwordInput ;
let userNameInput;
let ageInput;
let logginCount=0;
let sonInfo ={
     userName:'guacamole',
    password :'noPassword',
        name :'mohamed'
} ;

   /*Bounus*/

let questions = {
     'userName':'enter your username',
     'password':'enter your password',
          'age':'how old are you ?',
         'name':'what\'s your name ?'
};
 
while(logginCount < 3){
    userNameInput = prompt(questions['userName']);
    passwordInput = prompt(questions['password']);
if ((userNameInput.toLowerCase() == sonInfo.userName.toLowerCase())&& (passwordInput == sonInfo.password)) {
    nameInput=prompt(questions['name']);
    if (sonInfo.name.toLowerCase() == nameInput.toLowerCase()) {
        ageInput= prompt(questions['age']);
        if (ageInput <18) {
            confirm('come back after ' + (18 - Number(ageInput) + 'years , father loves you '));
        }else if (ageInput >60) {
            confirm('it\'s to late' );
        }
        else if (ageInput >=18 && ageInput <= 60) {
            confirm('valuable information');
        }
        
    }else{
        
        confirm('silly info');
        break;
    }
}else{
    logginCount++;

} if (logginCount == 3) {
        confirm('silly info');
    }
}

