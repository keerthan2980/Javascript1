const http=require("http");
const myserver =http.createServer((request,response)=>{
    response.write("welcome to my server")
    response.end()
    console.log("created successful")
})
myserver.listen(1256)