const socket = io('ws://localhost:8300')

socket.on('message', (text) => {
    console.log('here');
    const el = document.createElement('li')
    el.innerHTML = text
    document.querySelector('#message-list').appendChild(el)
})

document.querySelector('#send').onclick = () => {
    const text = document.querySelector('#message').value
    socket.emit('message', text)
}