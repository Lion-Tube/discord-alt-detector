📘 README.md

# 🔍 Discord Alt Detector Bot

A lightweight Discord bot that detects alt/suspicious accounts using behavior-based scoring.

Built using **discord.js v14** and **discord-alt-detector**.

---

## 📌 Features

📊 80% detection success rate  
📦 Lightweight and easy to run  
⚙️ Advanced configuration using weights  
📄 Supports custom scoring functions  
🖥️ Built with discord.js v14  
⭐ Detects more than just account age (username, activity, badges, etc.)

---

## 🧠 How it works

The bot analyzes new members joining your server and assigns a **trust score** based on multiple factors:

- Account age  
- Username patterns  
- Display name structure  
- Presence/activity status  
- Discord badges (flags)  
- Profile picture & banner  
- Server boosting status  
- Custom logic (optional)

Each factor contributes to a total score that determines the user's **risk level**.

---

## 📂 Output

The bot sends two types of logs:

### 📌 Summary Log (Embed)
- User information
- Risk level (color-coded)
- Score
- Account creation date

### 📂 Detailed Data Log
- Full category breakdown
- Raw scoring results in JSON format

---

## ⚙️ Installation

```bash
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
