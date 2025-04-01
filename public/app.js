const socket= new WebSocket('ws://localhost:3000')

function sendMessage(e) {
    e.preventDefault() //submits form without reloading the page
    const input=document.querySelector('input')
    if(input.value){
        socket.send(input.value)
        input.value="" //erase input afetr sending a message
    }
    input.focus() //lace focus back on the input

}

document.querySelector('form').addEventListener('submit', sendMessage)

//listen for messages
socket.addEventListener("message",({data})=>{
    const li=document.createElement('li')
    li.textContent=data
    document.querySelector('ul').appendChild(li)
})

