//console.log is used to log(print) a message to the console
console.log("Hello ");

//variables:containers for data
age=24;
console.log(age);
fname="hello";
console.log(fname);
x=null;
y=undefined;
isfollow=false;
console.log(x);
console.log(y);
console.log(isfollow);

/*var:variable can be re-declared and updated.a global scope variable
let:variable cannot be re-declared but can be updated.a blocck scope variable
const:variable cannot be re-declared or updated.a block scope variable
*/

let fullname="Sumit";
console.log(fullname);

const a=4;

//data types:primitive-Number,String,Boolean,Undefined,Null,BigInt,Symbol


//object
const student={
    fullname:"Rahul kumar",
    age:20,
};
console.log(student["age"]);

//for updating the variable inside onject
student["age"]=student["age"]+1;
console.log(student["age"]);

const pen={
    title:"Ball Pen",
    rating:4,
    offer:5,
};
console.log(pen);
console.log(typeof pen["title"]);
