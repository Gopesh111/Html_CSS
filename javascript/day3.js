//array
let a=["ironman","hello","world"]; //property
console.log(a);
console.log( typeof a);
console.log(a[0]);

//looping over an array
for(let i=0;i<a.length;i++)
{
console.log(a[i]);
}
for(let i of a)
{
    console.log(a);
}
let marks=[85,97,44,37,76,60];
let sum=0;
for(let i=0;i<marks.length;i++)
{
    sum+=marks[i];
}
console.log(`avg =  ${sum/marks.length}`);

let item=[20,30,40];
for (let val of item)
{
console.log(val);
}

//array methods
item.push(50); //add item at end(make change in original array)
console.log(item);

item.pop() //delete item from end
console.log(item);

c=item.concat(a); //combine two arrays and return new array
console.log(c);

item.unshift(80); //add item at starting
console.log(item);

item.shift() //delete item from start
console.log(item);

console.log(item.slice(0,2)); //(not change original array)print the piece of array first index inclusive ,next index exclusive

//console.log(item.splice(startidx,delcount,replace)) changes original array
item.splice(0,2,24,25);
console.log(item)



//function

function myfunction()
{
    console.log("Gopesh Pandey");
}
myfunction();
function fun(msg)
{
    console.log(msg);
}
fun("hello");
function hello(x,y)
{
    s=x+y;
    console.log("before return");
    return s;
    console.log("after return"); //statement after return does not execute
}

let val=hello(3,4);
console.log(val);

//function parameter are local variable

//Arrow function:compact way of writing function

const arrowsum=(x,y) => {
    console.log(x+y);
};
console.log(arrowsum(5,8));


//foreach loop in arrays
/*  
array.forEach(callBackFunction)
CallbackFunction: it is a function passed as an arguement to another function
*/
let arr=[1,2,3,4,5];
arr.forEach(function printVal(val)
{
    console.log(val);
    console.log(val+10);
});

//higher order function:they are those function which can take another function as their parameter or return function...forEach method is a higher order function
ab=[1,2,3,4]
ab.forEach( function print(v){
    console.log(v*v);
});

/*map:creates a new array with the results of some operation.the value its 
callback returns are used to form new array

arr.map(callbackFnx(value,index,array))

*/
let abc=ab.map((val) =>{
return val*val*val;
});
console.log(abc);

//Filter:creates a new array of elements that give true for a condition or filter

let d=abc.filter((val)=>{return val%2===0;});
console.log(d);

//Reduce:perform some operations and reduces the array to a single value.it returns the single value

