let chatUser = localStorage.getItem("chatUser") || "";
let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

const loginDiv = document.getElementById("loginChat");
const chatArea = document.getElementById("chatBoxArea");

function loginChat() {
    const name = document.getElementById("chatName").value.trim();
    if (!name) return alert("Masukkan nama!");

    chatUser = name;
    localStorage.setItem("chatUser", chatUser);
    startChat();
}

function startChat() {
    loginDiv.classList.add("hidden");
    chatArea.classList.remove("hidden");
    document.getElementById("chatUser").textContent = chatUser;
    renderChat();
}

function kirimPesan() {
    const text = document.getElementById("chatInput").value.trim();
    if (!text) return;

    messages.push({
        user: chatUser,
        text,
        time: new Date().toLocaleTimeString()
    });

    localStorage.setItem("chatMessages", JSON.stringify(messages));
    document.getElementById("chatInput").value = "";
    renderChat();
}

function renderChat() {
    const box = document.getElementById("chatBox");
    box.innerHTML = "";

    messages.forEach(m => {
        box.innerHTML += `
        <div class="chat-item">
            <b>${m.user}</b> (${m.time})<br>
            ${m.text}
        </div>`;
    });

    box.scrollTop = box.scrollHeight;
}

function logoutChat() {
    localStorage.removeItem("chatUser");
    location.reload();
}

// Auto refresh chat
setInterval(() => {
    messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    renderChat();
}, 1000);

if (chatUser) startChat();