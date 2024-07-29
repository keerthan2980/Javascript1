const os=require("os") //os of the system
const path=require("path") //path of the file

console.log(os.type())

//_ for running node filename 
console.log(__dirname)
//console.log(__filename)
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename)) ///toatal path