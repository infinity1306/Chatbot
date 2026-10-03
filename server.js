const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Import your chatbot logic file here
const chatbotRoute = require("./chatbot.js");
app.use("/chat", chatbotRoute);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
