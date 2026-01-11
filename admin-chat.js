let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

function render() {
    const box = document.getElementById("chatBox");
    box.innerHTML = "";
    messages.forEach(m => {
        box.innerHTML += `<p><b>${m.user}</b>: ${m.text}</p>`;
    });
    box.scrollTop = box.scrollHeight;
}

function send() {
    const text = document.getElementById("msg").value;
    if (!text) return;

    messages.push({
        user: "ADMIN",
        text,
        time: new Date().toLocaleTimeString()
    });

    localStorage.setItem("chatMessages", JSON.stringify(messages));
    document.getElementById("msg").value = "";
    render();
}

setInterval(() => {
    messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    render();
}, 1000);

render();