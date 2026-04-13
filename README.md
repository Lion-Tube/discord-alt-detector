تمام، هذا README احترافي ونظيف بنفس الأسلوب اللي طلبته + مذكور استخدام مكتبة DJj123dj 👇


---

<img src="https://apis.dj-dj.be/cdn/discord-alt-detector/logo.png" alt="Alt Detector" width="600px">

![node](https://img.shields.io/badge/node-%3E=18-green?style=flat-square)
![discord.js](https://img.shields.io/badge/discord.js-v14-blue?style=flat-square)
![status](https://img.shields.io/badge/status-active-success?style=flat-square)

---

### 🔍 Discord Alt Detection Bot

A lightweight and practical Discord bot designed to detect alt and suspicious accounts using behavior-based scoring.

This project is built using **discord.js v14** and the **discord-alt-detector** package created by **DJj123dj**.

---

## 📌 Features

- 📊 Behavior-based scoring system  
- 📦 Lightweight and fast  
- ⚙️ Clean and simple configuration  
- 📄 Human-readable analysis (no raw numbers)  
- 🖥️ Built with discord.js v14  
- ⭐ Detects more than just account age  

---

## 🧠 How it works

When a user joins the server, the bot analyzes multiple signals:

- Account age  
- Username and display name patterns  
- Activity and presence  
- Profile badges (flags)  
- Profile picture and banner  
- Server boosting status  

Each signal contributes to a **final score**, which determines the user's **risk level**.

---

## 📊 Risk Levels

| Level | Meaning |
|------|--------|
| 🟢 highly-trusted | Very safe account |
| 🟢 trusted | Safe |
| ⚪ normal | Normal user |
| 🟡 newbie | New user |
| 🟠 suspicious | Needs attention |
| 🔴 highly-suspicious | Likely alt |
| 🟣 mega-suspicious | Very high risk |

---

## 📂 Output System

### 📌 Log Channel
- User mention  
- Risk level  
- Score  
- Account creation date  
- Colored embed based on risk  

### 📂 Data Channel
- Full analysis breakdown  
- Human-readable explanations for each factor  

---

## ⚙️ Installation

```bash
git clone https://github.com/Lion-Tube/discord-alt-detector
cd discord-alt-detector
npm install
```

---

## 🚀 Run the bot
```
npm start
```

---

## 🧾 Configuration

Edit config.json:
```json
{
  "token": "YOUR_BOT_TOKEN",
  "server": "YOUR_SERVER_ID",
  "logChannel": "LOG_CHANNEL_ID",
  "dataChannel": "DATA_CHANNEL_ID"
}
```

---

## 🛠️ Built With

discord.js v14

discord-alt-detector (by DJj123dj)



---

## 📸 Example

Verification message includes:

User mention

Risk level with color

Score

Account creation time



---

## ⚠️ Note

This system is based on heuristic scoring and may not always be 100% accurate.
