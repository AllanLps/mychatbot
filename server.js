const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Server on!')
})

app.post('/api/chat', (req, res) => {
    const messageUser = req.body.mensagem

    const respostaChatBot = processaMensagemDoUsuário(messageUser)
    res.json({resposta: respostaChatBot})
})

app.listen(port, () => {
    console.log(`Server on in port ${port}`)
})


function processaMensagemDoUsuário(messageUser){
    return "Olá, eu sou o Pizzabot!"
}