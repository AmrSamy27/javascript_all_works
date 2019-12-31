let fruits = ["Banana","Orange" ,"fruit5","fruit6"];
let fruits2=[ "Apple","Mango"];
Array.prototype.printSecondElement = function(){
document.write(this[1]);
};

let user = {
    name: "ahmed",
    jobTitle:"system admin"
};

//1
let objInArray = Object.entries(user);
console.log(objInArray);

//2
let freezObject = Object.freeze(user);
console.log(freezObject);
//3
let objectPropertyDesc = Object.getOwnPropertyDescriptors(user);
console.log(objectPropertyDesc);



//4
let copyObject = Object.assign({},user);
user.name = "mohamed";
console.log(user);
console.log(copyObject);

//*5*
fruits.push(fruits2);
console.log(fruits);

//*6*
fruits.pop();
console.log(fruits);


//*7*
fruits.unshift("Pinaples");
console.log(fruits);

//*8*
fruits.shift();
console.log(fruits);

//*9*
fruits.slice(0,1);
console.log(fruits);


//*10*
fruits.splice(0,1);
console.log(fruits);


//*11*
delete fruits[0];
console.log(fruits);

//*12*
console.log(fruits.concat(fruits2));


//*13*
fruits.forEach(function (element) {
    console.log(element);
});


//14

let objectPropertyNames = Object.getOwnPropertyNames(user);
console.log(objectPropertyNames);

//15
let objectPrototype = Object.getPrototypeOf(user);
console.log(objectPrototype);

//16
let objectIsFrozen = Object.isFrozen(user);
console.log(objectPropertyDesc);

//17
let objectKeys = Object.keys(user);
console.log(objectKeys);

//18
let objectSeal = Object.seal(user);
console.log(objectSeal);

//20 
let indexOfArray = fruits.indexOf('fruit6');
console.log(indexOfArray);

//19
let isSealed = Object.isSealed(user);
console.log(isSealed);

/*Bonus*/ 
fruits.printSecondElement();