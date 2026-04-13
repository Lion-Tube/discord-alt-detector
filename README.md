# 🔍 Discord Alt Detector Bot

![Node](https://img.shields.io/badge/node-%3E=18-green)
![Discord.js](https://img.shields.io/badge/discord.js-v14-blue)
![Status](https://img.shields.io/badge/status-active-success)

A lightweight Discord bot that detects alt and suspicious accounts using behavior-based scoring.

Built using **discord.js v14** and **discord-alt-detector**.

---

## 📌 Features

📊 Behavior-based scoring system  
📦 Lightweight and optimized performance  
⚙️ Fully customizable weight configuration  
📄 Supports custom scoring functions  
🖥️ Built with discord.js v14  
⭐ Detects multiple account signals beyond age (username, activity, badges, etc.)

---

## 🧠 How it works

When a user joins the server, the bot evaluates multiple signals:

- Account age  
- Username patterns  
- Display name quality  
- Activity & presence status  
- Discord profile badges  
- Profile picture & banner  
- Server boosting status  
- Optional custom logic  

Each signal contributes to a **final trust score**, which determines the user's risk level.

---

## 📊 Risk Levels

- 🟢 highly-trusted  
- 🟢 trusted  
- ⚪ normal  
- 🟡 newbie  
- 🟠 suspicious  
- 🔴 highly-suspicious  
- 🟣 mega-suspicious  

---

## 📂 Output System

### 📌 Summary Log (Embed)
- User information  
- Risk level (color-coded)  
- Final score  
- Account creation date  

### 📂 Detailed Log
- Full category breakdown  
- Raw JSON scoring data for analysis  

---

## 🖼️ Example Output

### Embed Preview
(Add your screenshot here)

### JSON Example
```json
{
  "age": -4,
  "status": 1,
  "activity": 3,
  "usernameWords": -2,
  "pfp": 1
}


---

⚙️ Installation

git clone https://github.com/Lion-Tube/discord-alt-detector
cd discord-alt-detector
npm install


---

🚀 Run the bot

npm start


---

🧾 Configuration

Edit config.json:

{
  "token": "YOUR_BOT_TOKEN",
  "server": "YOUR_SERVER_ID",
  "logChannel": "LOG_CHANNEL_ID",
  "dataChannel": "DATA_CHANNEL_ID"
}
