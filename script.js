const loginView = document.getElementById('loginView');
const dashboardView = document.getElementById('dashboardView');
const loginForm = document.getElementById('loginForm');
const logoutButton = document.getElementById('logoutButton');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert('Please enter a username and password.');
    return;
  }

  loginView.classList.remove('active');
  dashboardView.classList.add('active');
});

logoutButton.addEventListener('click', () => {
  dashboardView.classList.remove('active');
  loginView.classList.add('active');
  document.getElementById('password').value = '';
});

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const message = chatInput.value.trim();
  if (!message) {
    return;
  }

  addMessage('user', message);
  chatInput.value = '';

  setTimeout(() => {
    const reply = getAgentReply(message);
    addMessage('bot', reply);
  }, 450);
});

function addMessage(type, text) {
  const message = document.createElement('div');
  message.className = `message ${type}`;

  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  message.appendChild(paragraph);
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAgentReply(message) {
  const lowerValue = message.toLowerCase();

  if (lowerValue.includes('balance')) {
    return 'Your available balance is $7,000,000.00 and $1,250,000.00 is currently on hold.';
  }

  if (lowerValue.includes('hold')) {
    return 'The hold amount is $1,250,000.00 and it is still under review by our support team.';
  }

  if (lowerValue.includes('transfer') || lowerValue.includes('add money')) {
    return 'Those actions are currently disabled in this demo version. Please check back soon.';
  }

  if (lowerValue.includes('hello') || lowerValue.includes('hi')) {
    return 'Hello Alex! I can help with your balance, hold status, and account support questions.';
  }

  return 'Thanks for contacting USBSO support. A team member will follow up soon.';
}
