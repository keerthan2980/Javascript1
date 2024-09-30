// const k=document.getElementById("name");
// k.innerHTML="<h1>welcome to frame heaven </h1>";  // add the tag and text of the  selected id in p  h1 is added the content in the tage and tag
// k.innerText="welcome" // write or change the text which are inside the " " 
//console.log(k) 

 /*const para = document.querySelector("p");  // Selects the first <p> tag
console.log(para.textContent); 
document.write(para.textContent);
// Prints all the text inside the <p> tag, even if it's hidden

para.textContent = "Welcome to the world";  // Changes the text content of the <p> tag
console.log(para.textContent);            */  // Prints the updated text

/*
const para1 =document.getElementsByTagName("p")[1];

 para1.textContent="welcome to p 1";
                         // u will get how many tages are avalibe 

const para2 =document.querySelectorAll("p");  // u will get how many tages are avalibe 

console.log(para2); 
 */ 

//const tagattribute =document.querySelector("header").attributes; // we can get all the attributes in the query 

const tagattribute =document.querySelector("header").attributes.id.value // if  u want to retrive the particular attribute we can u this 
                                                   // .attribute.attribute.value or name u can modify what you want 
console.log(tagattribute); 

document.querySelector("header").style.backgroundColor="black";// aplying css from javascript 

// 
function darkTheme(){
    document.querySelector("div").style.backgroundColor="red";
    // document.querySelector("div").style.backgroundColor="white";
}