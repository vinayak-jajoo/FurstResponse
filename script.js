document.getElementById("sendBtn").addEventListener("click", function () {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (message === "") return;

  const chatBox = document.getElementById("chatMessages");

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "message user-message";
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  // Bot response
  const botMsg = document.createElement("div");
  botMsg.className = "message bot-message";
  botMsg.textContent = "Analyzing symptoms... Please consult a vet if serious.";
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
});
