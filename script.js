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
const adviceList = [
  "Ensure your dog gets regular exercise.",
  "Provide fresh water at all times.",
  "Maintain proper vaccination schedule.",
  "Brush your dog's teeth regularly.",
  "Give balanced and nutritious food.",
];

const adviceBtn = document.getElementById("newAdviceBtn");

if (adviceBtn) {
  adviceBtn.addEventListener("click", function () {
    const random = Math.floor(Math.random() * adviceList.length);
    document.getElementById("adviceText").textContent = adviceList[random];
  });
}
