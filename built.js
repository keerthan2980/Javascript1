const fn=require("fs");
fn.readFile("example2.txt",(err,data)=>{     //utf is used to convert binary code into string if it is not present it will write buffer
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})
fn.rename()