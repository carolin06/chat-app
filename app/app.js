const socket= io('ws://localhost:3500')

function sendMessage(e) {
    e.preventDefault() //submits form without reloading the page
    const input=document.querySelector('input')
    if(input.value){
        socket.emit('message', input.value)
        input.value="" //erase input afetr sending a message
    }
    input.focus() //lace focus back on the input

}

document.querySelector('form').addEventListener('submit', sendMessage)

//listen for messages
socket.on("message",(data)=>{
    const li=document.createElement('li')
    li.textContent=data
    document.querySelector('ul').appendChild(li)
})

