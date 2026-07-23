// attributes and properties
//  setAttributes,getAttributes,removeAttributes,hasAttributes;
// with data -* name 
// input.value (property, current state) vs input.getAttribute("value")
// create insert and remove element from date

// attributes 
const div = document.querySelector(".c1");
// getAttribute - Attribute ko lene ke liye
let res = div.getAttribute("class")
console.log(res);
// setAttribute - Attribute ko set karne ke liye 
div.setAttribute("width" , "200px");
console.log(res); 


// removeAttribute - Attribute ko remove karne ke liye 
div.removeAttribute("class");

console.log(res);
// hasAttribute- boolean me value return karta hai
div.hasAttributes("id");
console.log(res);

// with data -* name 
 const userCard= document.querySelector(".usercard");

 console.log(userCard.getAttribute("data-user-id"));

 userCard.dataset.userId ="678";

 
 console.log(userCard.getAttribute("data-user-id"));

//  input.value vs input.getAttribute("value");  
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click" , () =>{
    console.log(input.value);
    console.log(input.getAttribute);
});


// create insert and remove elements for dom 
// 1.CreateElement
const main = document.querySelector("main");

let footer = document.createElement("footer");
let span = document.createElement("span");

main.appendChild(footer);
main.append(footer , span);
// 2. removeChild
main.removeChild(span);

// 3. insert element
// insertBefore



const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

box1.style.backgroundColor ="red";
box2.style.backgroundColor ="green";
box3.style.backgroundColor ="blue";

main.insertBefore(box2,box1);


  