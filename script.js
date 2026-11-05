const dashboardView = document.getElementById('dashboardView');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

if (dashboardView) {
  dashboardView.classList.add('active');
}

if (chatForm && chatInput && chatMessages) {
  chatForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const message = chatInput.value.trim();
    if (!message) {
      return;
    }

    addChatMessage('user', message);
    chatInput.value = '';

    setTimeout(() => {
      addChatMessage('bot', 'Thanks for your message. Your account remains under review and on hold.');
    }, 500);
  });
}

function addChatMessage(type, text) {
  const message = document.createElement('div');
  message.className = `chat-message ${type}`;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

