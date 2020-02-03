/*
var fs = require('fs');

//create a file named mynewfile3.txt:
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
*/
const fs = require('fs');
const util = require('util')
const path = require('path')

const fileName = 'message.txt'
const targetFileName ='newMessage.txt'
const textFilePath = path.join('./',fileName)
const targetPath = path.join('./',targetFileName)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)//für async function createFile()

/*module.exports = async () => {
    try{
        const data = await readFile(textFilePath)
        console.log(data.toString())
    }catch (error){
        console.log(error)
    }
}*/

async function createFile(content){
    try{
        await writeFile(targetPath,content)
    }
    catch(error){
        console.log(error)

    }

}
createFile("montag, 03.02.2020")