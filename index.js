const fs = require ('fs')
const path = require('path')

const fileName = 'keyboard.txt'
const textFilePath = path.join('./',fileName)



fs.readFile(textFilePath,(err, data)=>{
   // console.log("path:",textFilePath)
    console.log(data.toString())
    process.exit()
})