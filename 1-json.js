const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse (dataJSON) 
// console.log(data.title)
 

//load and parse JSON data

const dataBuffer = fs.readFileSync('1-json.json')

const dataJSON = dataBuffer.toString()

const data = JSON.parse(dataJSON)

data.name = 'Rahul'
data.planet = 'Mars'
data.age = '24'

const dataString = JSON.stringify(data)

fs.writeFileSync('1-json.json', dataString)

console.log((fs.readFileSync('1-json.json')).toString())

