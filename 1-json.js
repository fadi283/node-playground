const fs = require('fs')
const dataBuffer = fs.readFileSync('data.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log('Data before the changes: ' ,data)
data.name = 'Fadi'
data.age = '37'
const data2JSON=JSON.stringify(data)
fs.writeFileSync('data.json',data2JSON)



// const book = {
//     title: 'TZKYAT ALANFOS',
//     author: 'Saeed hawwa'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('books-JSON.json',bookJSON)

// const dataBuffer = fs.readFileSync('./books-JSON.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(dataJSON)
// console.log(data.title)
