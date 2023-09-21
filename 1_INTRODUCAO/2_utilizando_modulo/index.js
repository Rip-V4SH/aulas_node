const fs = require('fs') // fs = file system

fs.readFile('frase.txt' , 'utf8' , (error, data) => {
    if(error) {
        return console.log(error)
    }

    console.log(data)
})