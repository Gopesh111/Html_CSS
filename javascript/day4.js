/*
style tag connects html with css
script tag connect html with javascript
 */

/*
window object:it represnts an open window in a browser.it is browser's object not java script and it 
is automatically created by browser

it is global object with lots of properties and methods

*/
console.log(window);

//DOM:DOCUMENT OBJECT MODEL:when web page is loaded,browser created a dom of the page,dom is tree like structure
//html ko javascript me acces karne ka tarika hai dom
/*
window
document
html
1)head 2)body
head->meta,title,link body-> div,script
div->img,h,p,div
*/

console.log(window.document);
console.dir(window.document);
console.log(document.body);
document.body.style.backgroundColor="Yellow";

//dom manipulation
/*
Selecting with id
document.getElementById("myid");

Selecting with class
document.getElementByClassName("myClass");

Selecting with tag
document.getElementsByTagName("p");

*/

/*
Query Selector

document.querySelector("myId/myClass/mtag");
document.querySelectorAll("myId/myClass/tag");

*/

/*
properties:
tagName:return tag for element node
innerText:return text content of element and all its children
innerHTML: return plain text or HTML content in the element
textContent:return textual content even for hidden element


*/
//dom tree have text nodes,comment node,element node but dm mainly
//works on element node
//document.querySelector("div").children;

/*let div=document.querySelector("div");
console.dir(div);
console.log(div.innerHTML);
div.innerText="abc";
console.log(div.innerText);*/

let h3=document.querySelector("h3");
console.dir(h3);
h3.innerText=h3.innerText+"pandey";

/*
Attributes:

getAttribute(attr);  to get attribute value
setAttribute(attr,value) to set attribute val th


Style

node.style
*/
/*let div=document.querySelector("div");
console.log(div);
div.getAttribute("i");
console.log(i);
console.log(div.style);
div.style.backgroundColor="blue";
//div.style.visibility="hidden";
div.style.fontColor="white";*/

/*
Insert Elements:

let el=document.createElement("div");
node.append(el) //adds at end of node(inside)
node.prepend(el) //adds at start of node(inside)
node.before(el) //adds before the node(outside)
node.after(el)  //adds after the node(outside)


delete element:
node.remove();
*/
let newbtn=document.createElement("button")
console.log(newbtn);
console.log(newbtn.innerText);
newbtn.innerText="Sub";
console.log(newbtn.innerText);
let div=document.querySelector("div");
div.append(newbtn);
div.prepend(newbtn);
