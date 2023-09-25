const express = require("express") // importa o express
const path = require("path")

const app = express() // usa o express

const caminho = path.join(__dirname, "templates")

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
    // resposta.send("usando nodemon")
})

app.listen(3000,() => {
    console.log("servidor rodando na porta 3000")
})

