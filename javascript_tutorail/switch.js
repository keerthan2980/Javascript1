// switch case 
 
 let Name = prompt("Enter Your Name"); 

 let Marks =parseInt(prompt("enter your Marks"));

 let result;

switch(true){
    case (Marks >90 && Marks <=100):
           result="Yor are the Top";
    break;
    case  (Marks >80 && Marks <=90):
           result="Yor the second";
    break;
    case  (Marks >70 && Marks <=80):
            result="You are Passs";
    break;
    case   (Marks >60  &&  Marks <70):
        result ="Yor are last" ;
    break;
    default:
        result="You are Fail";
        break;
}

 document.write("welcome "+ Name + "  "+ result );
