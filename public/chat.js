//make connection

const socket = io.connect('http://localhost:3000');

//query DOM
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const send = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

// emit events

send.addEventListener('click', function () {
    socket.emit("chat", {
        message: message.value,
        handle: handle.value
    });
});

message.addEventListener('keypress', function () {
    socket.emit('typing', handle.value);
});

//listen events

socket.on('chat', function (data) {
    feedback.innerHTML = "";
    output.innerHTML += `<p><strong>${data.handle}:</strong> ${data.message}</p>`
});
socket.on('typing', function (data) {
    feedback.innerHTML = `<p>${data} is typing...</p>`
});