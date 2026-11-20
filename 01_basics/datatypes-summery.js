//premitive 
//7types:String,Number,Boolean,null,undefined,symbol,bigInt
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);


const bigNumber=345567986239869n




//Refrence(Non primitive)
//Array,objects,Functions

const heroes=["shaktiman","naagraj","doga"]
let myObj={
    name: "anchal",
    age: 21,

}

const myFunction=function(){
    console.log("hello world");
    

}
console.log(typeof bigNumber);
console.log(typeof heroes);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof anotherId);
console.log(typeof id);

//****************************************************************** *
// Stack(premetive)-->it does not change the original value gives copy ,Heap(non-primitive)--> it change in original value gives reference 
// here is two type of memory 
// 1. stack->used in primitive
// 2. heap ->used in non-primitive/
let myName="anchalmaurya"
let anothername=myName
anothername="honey"
console.log(myName);
console.log(anothername);

let userOne={
   email: "user@google.com",
   upi: "user@ybl"
}
let userTwo=userOne
userTwo.email="anchal@google.com"
console.log(userOne.email);
console.log(userTwo.email);

