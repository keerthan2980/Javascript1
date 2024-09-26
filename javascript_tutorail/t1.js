 // every thing in javascript is objects 

var k = "keerthan";
console.log(k)

var k="raju"

console.log(k)

// .....  let 

let r ="hello"

console.log(r)

 // let r="hello" // u will get error that the r is decleared 
 r ="where are you" // u will not get the error, r  value is changed 
console.log(r) 

/* .... const 

const a =" u have hacked "

console.log(a);

// const a = " welcome " // u will get error

a= "welcome" // u will get error the variable is alredy used 

console .log(a);  
 
*/

/*... data types 
 boolean 
 let test = 10 > 20 
 console.log(test)

 */
// thrught this we can write the data in html page 

// we can include the html in javascript 

 document.write(" hello welcome to javascript <br>");

 document.write (8977832) ;

 document.write("<h1> u r account has beeen hacked <h1>");

 // null 

 let s;  // undefined
 console.log(s);

 let h=null;
  console .log(h);  

// complex data tupes 

// array --[] and object--{}

let arr =["apple","garps",55,{fruit:"mango"}];
console.log(arr); 

let obj ={
    name:"raju",
    age:20,
    place:"hyd"
}

console.log(obj);

console.log(typeof(obj)) ; // it will display the type of variable 

/*document.write(2 +3 == 5 ?"yes":"no" + "<br>" "); // ternary operator 

  var x=100;
  var y=500 ;

  x>y ? document.write("x is greater") : document.write(" y is greater");

  */

                  // Dialog boxes 
/*
  alert-- display the alert message 

  prompt -- display the alert message with some input 

  confirm-- display the conform dialog box */

//  alert("welcome to my world ");

// prompt("welcome to my world"); 

// confirm("welcome to my world");

var women = confirm("Are you women ");

if (women){
    let name =prompt(" please Enter U r name ");
    document.write(" welcome to my page Mam."+name);
}
else{
    let name=prompt("please enter your name ");
    document.write(" welcome to my page sir."+ name );
}