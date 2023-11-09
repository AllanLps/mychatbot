document.addEventListener('DOMContentLoaded', () => {
    const botResponse = document.getElementById('botResponse')
    const userResponse = document.getElementById('userResponse')
    const sendResponse = document.getElementById('sendResponse')

    sendResponse.addEventListener("click", () => {
        const messageUser = userResponse.value

        botResponse.innerHTML = `<div><strong>Usuário:</strong>${messageUser}</div>`
        userResponse.value = ''

        //envio para o servidor
        fetch('api/chat', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({mensagem: messageUser}),
        })
        .then(response => response.json())
        .then(data => {
            botResponse.innerHTML = `<div><strong>PizzaBot:${data.response}</strong></div>`
        }).catch(error => console.error('Error ao enviar mensagem:', error) )
    })
})