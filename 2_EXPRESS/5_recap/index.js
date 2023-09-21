const express = require("express") // importa o express

const app = express() // usa o express

app.get('/', (requisicao, resposta) => {
    resposta.send("opa! bem vindo ai meu servidor :)")
})

app.listen(3000,() => {
    console.log("servidor rodando na porta 3000")
})

