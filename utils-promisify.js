const fs = require('fs')
const util = require('util')

// fs.readFile('./README.md', (err, data) => {
//   if (err) throw err
//   console.log(data.toString())
// })

// const data = fs.readFileSync('./README.md')
// console.log(data.toString())

const readFile = util.promisify(fs.readFile);
(async function (){
  const data = await readFile('./README.md')
  console.log(data.toString())
})()