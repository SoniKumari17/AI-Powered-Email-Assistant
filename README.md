# 🤖 AI-Powered Email Assistant (Full Stack + Chrome Extension)

An advanced AI-based web application and Chrome extension that automatically generates professional and context-aware email replies using **Google Gemini API**.  
The system includes a full-stack architecture — a **Spring Boot backend** that connects with Gemini, and a **React + Material UI frontend** for a smooth user experience.

---

## 🚀 Features

- ✉️ **Smart Email Reply Generation** – Generates intelligent replies based on the input email content.  
- 🎯 **Tone & Style Selection** – Choose between multiple tones (Formal, Friendly, Short, etc.).  
- ⚙️ **Full Stack Integration** – Spring Boot backend interacts with Gemini API; React handles UI.  
- 🧠 **AI-Powered Logic** – Uses Google Gemini for natural and contextually relevant responses.  
- 🧩 **Chrome Extension Support** – Allows you to use the assistant directly inside Gmail.  
- 💾 **Postman Tested** – All APIs tested and verified via Postman before frontend integration.  
- 💡 **Clean UI** – Built with Material UI and React Hooks for responsiveness and simplicity.  

---

## 🧑‍💻 Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React.js (Vite), Material UI (MUI v5), JavaScript (ES6+), HTML5, CSS3 |
| **Backend** | Spring Boot, Lombok, WebClient |
| **AI Integration** | Google Gemini API |
| **Testing Tools** | Postman |
| **Extension** | Chrome Extension (Manifest v3) |
| **Build Tools** | Maven, npm |
| **Version Control** | Git & GitHub |

---

## 🧠 How It Works

1. The user **pastes an email** or selects it inside Gmail (via Chrome Extension).  
2. The **frontend (React)** sends this content to the **Spring Boot backend**.  
3. The backend uses **Google Gemini API** to generate a contextual reply.  
4. The response is sent back to the UI or directly shown in the Gmail compose box.  
5. User can **edit, copy, or send** the AI-generated email reply.

---

## ⚙️ Installation & Setup

### 🧩 Frontend (React + MUI)

```bash
git clone https://github.com/your-username/ai-email-assistant.git
cd ai-email-assistant/frontend
npm install
npm run dev

