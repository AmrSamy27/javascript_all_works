const message = 'enter your age';
let age;
let userInfo = ''; 
let confirmation ;
do
{
    age = prompt(message);
if ( Number(age) >= 1 ) {
 if (age >=1 && age <= 10) 
     userInfo = "you are a Child and you age is " + age; 
    else if(age >= 11 && age <= 18)
     userInfo =  `you are a teenager and you age is ${age}`;
     else if(age >= 19 && age <= 50) 
     userInfo = `you are a Grown and you age is ${age}`;
      else 
      userInfo = `you are an old and you age is ${age}`;

      confirmation =confirm(userInfo);
}
else{
    prompt('your age must be positive');
    age = 0;
}

        

}while(age && confirmation)