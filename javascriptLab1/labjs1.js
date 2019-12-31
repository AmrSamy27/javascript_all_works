'use strict';
let validationFirstName="Please Enter Your First Name";
let validationLastName="Please Enter Your Last Name";

let firstName = prompt(validationFirstName);

let lastName = prompt(validationLastName);
let age;
let isValid =confirm(`Is your FullName is ${firstName} ${lastName}`);
if(!isValid){
     firstName = prompt(validationFirstName);

 lastName = prompt(validationLastName);
 isValid =confirm(`Is your FullName is ${firstName} ${lastName}`);
  if(isValid){
    let age = prompt('Please Enter Your birth year');
    alert(`Welcome ${firstName} ${lastName} you are ${new Date().getFullYear() - age} years old`);
}
else{
    alert('you are not welcome');
}
}

else if(isValid){
     age = prompt('Please Enter Your birth year');
    alert(`Welcome ${firstName} ${lastName} you are ${new Date().getFullYear() - age} years old`);
}
else{
    alert("not welcome");
}
 
