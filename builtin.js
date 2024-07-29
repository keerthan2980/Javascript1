//fs is builtin function nodejs fs=filesystem 
// used for creating,deleting,rename,read 
const fn=require("fs");
fn.readFile("exa.txt","utf8",(err,data)=>{     //utf is used to convert binary code into string 
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})

fn.writeFile("example2.txt","welcome to java script",(err)=>{
     if(err){
        console.error(err);
        return;
     
    }
    console.log("successful")
})
fn.rename("hii.js","built.js",(err)=>{   //filename ,rename
    if(err){
       console.error(err);
       return;
    
   }
   console.log(" modified successful")
})

fs.unlink("delete.txt",(err)=>{  //filename  to delete (create a file for delete)
    if(err){
       console.error(err);
       return;    
   }
   console.log(" deleted successful")
})