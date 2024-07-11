/*
Events: The change in state of an object is known as event,

events are fired to notify code of "interesting changes" that may affect code execution

> mouse events(click,double click,etc)
> keyboard events(keypress,keyup,keydown)
> Form events (subit etc)
> print event and man more
*/
/*let btn=document.querySelector("#btn");
btn.onclick=() =>{
    console.log("button was clicked");

};*/

let box=document.querySelector('#box');
// box.onmouseover=() =>{
//     console.log("HI");

// };
/*
agar html me inline event declare kiya hai aur javascript file me bhi event declare
kiya hai to priority javascript wale event ko milegi.

agar same node pe same event do bar laga diya jae to jo last wala code hai usko
priority milegi

*/
//Event object: It is special object that has details about event
//all event handlers have access to the event object's properties and methods



let btn=document.querySelector("#btn");
btn.onclick=(e) =>{
    console.log("button was clicked");
    console.log(e);
};

/*
Event listeners:
node.addEventListener(event,callback);
node.removeEventListener(event,callback);
the callback reference should be same toremove

*/
const h3=() =>{
    console.log("HI");
 
}; 
box.addEventListener("click", box.click=() =>{
       console.log("HI");
    
 }); 
 box.removeEventListener("click",h3); 
 let curmode="light";

 let mode=document.querySelector('#mode');
 mode.addEventListener("click",() =>{//console.log("you are trying to change mode");
    if(curmode==="light")
    {
        curmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else
    {
        curmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(curmode);
 });