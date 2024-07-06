//operators: arithmetic
let a=5;
let b=2;
console.log("a= ",a,"b= ",b);
console.log("a+b= ",a+b);
console.log("a-b= ",a-b);
console.log("a/b= ",a/b);
console.log("a*b= ",a*b);
console.log("a%b= ",a%b);
console.log("a**b= ",a**b);

//unary operator
console.log("a= ",a,"b= ",b);
a++;
console.log("a= ",a,"b= ",b);
a--;
console.log("a= ",a,"b= ",b);
--a;
console.log("a= ",a,"b= ",b);
++a;
console.log("a= ",a,"b= ",b);

//assignment operator eg a+=1 is equal to a=a+1

a += 4; //a=a+4
a-=4;
a*=4;
a/=4;
a**=4;

//comparison operator

console.log("a==b ",a==b);
console.log("a!=b ",a!=b);
 //a===b checks value equal to and type
 //a!==b checks not equal to and type

 //logical operators

 //logical and:&& both should be true
 //logical or: || any one true
 //logical not: ! reverse the value eg t to f and f to t

 //conditional statement
 //if statement
if(a>b)
{
    console.log("a greater than b");
}
else
{
    console.log("a less than b");
}
//if else
//else if

//ternary operator...condition? true output : false output
let age=20;
let result=age>=18? "adult":"not adult";
console.log(result);

//switch statement
const exp='papayas';
switch(exp)
{
    case 'oranges':
        console.log("o");
        break;

    //case 'papayas':
      case 'pap' :
        console.log("p");
        break;
    default:
        console.log("couldn't find the item");    

}
//prompt
//let name=prompt("hello");
//console.log(name);

//loops
//for loop
for(let i=1;i<=5;i++)
{
    console.log("hello");
}

let sum=0;
for(let i=1;i<=5;i++)
    {
        sum=sum+i;
    }

 console.log(sum);

 //infinite loops:loop that never ends:we should not use

 //while loop
 /*
while(condition)
{
code
}
 */
let i=1;
while(i<=5)
{
    console.log("hello");
    i++;  
}

/*do while loop:run atleast one time
do{
    //code
}(condition);
*/

//for-of loop used for string,arrays
/*
for(let val of strVar)
{
code
}
*/
let str="Gopesh";
let size=0;
for(let i of str)
{
    console.log("i=", i); //iterator-charactors
    size++;
}
console.log("string size", size);

//for-in loops used basically for objects,arrays
/*
for(let key in objVar)
*/
let student={
    name:"Santosh",
    age:20,
    sub:"pcm"

};
for (let key in student)
{
    console.log("key",key, "value=",student[key]);
}

//Strings
let s="Shivam";
console.log(s);
let x="     abc d      ";
//string methods
console.log(s.length);
console.log(s[1]);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(x.trim()); //remove space from front and end and will not touch mid spaces
console.log(s.slice(0,3)); //first index inclusive and second index exclusive
console.log(s.concat(x)); //can do the same operation with s+x
console.log(s.replace("S","A")); //replace first value with second value
console.log(s.charAt(1));

//template literals:way to have embedded expressions in strings
let sent=`This is a template literal`;
console.log(typeof sent);

let Person={
    name:"Santosh",
    age:20,
    sub:"pcm"

};

/*
String interpolation:to create string by doing substitution of placeholder

`string text${expression} string text`
*/
console.log("student name is",Person.name," and he is ", Person.age," yers old"); //normal string
console.log(`student name is ${Person.name} and he is ${Person.age} years old`);  //template literal

// \n for next line

console.log("hello \n world");