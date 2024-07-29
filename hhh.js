const fn=require("fs");
fn.unlink("delete.txt",(err)=>{  //filename  to delete
    if(err){
       console.error(err);
       return;    
   }
   console.log(" deleted successful")
})