# Code-Reviewer

Here's the Live Link : https://code-review-by-us.netlify.app/

# 🚀 AI Code Reviewer

An AI-powered Code Review Web Application that analyzes your JavaScript code and provides professional feedback, improvements, and refactored versions using Google Gemini AI.

Built with a modern full-stack setup using React (Vite) for the frontend and Node.js + Express for the backend.

🌐 Live Demo

🔗 Frontend Live Link:
👉 https://code-review-by-us.netlify.app/

🔗 Backend API:
👉 https://code-reviewer-alpha-orcin.vercel.app/

🧠 Features

✨ Real-time code review using AI

📝 Syntax-highlighted code editor

📄 Markdown formatted AI responses

🌗 Automatic Light/Dark mode support

⚡ Fast and responsive UI

🔍 Clean code refactoring suggestions

📚 Professional-level feedback like a senior software engineer

🛠️ Tech Stack
Frontend

React (Vite)

react-simple-code-editor

PrismJS

Highlight.js

Axios

React Markdown

Backend

Node.js

Express.js

Google Gemini API (@google/generative-ai)

CORS

dotenv

📂 Project Structure
AI-Code-Reviewer/
│
├── frontend/        # React + Vite frontend
├── backend/         # Express + Gemini API backend
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/anasamin100100-eng/Code-Reviewer.git
cd Code-Reviewer

🔹 Backend Setup
cd backend
npm install


Create a .env file inside the backend folder:

GOOGLE_GEMINI_KEY=your_google_gemini_api_key_here


Start backend server:

npm start


Backend runs on:

http://localhost:3000

🔹 Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🔗 API Endpoint
POST /ai/get-review

Request Body:

{
  "code": "your javascript code here"
}


Response:

AI-generated review

Refactored version

Optimization suggestions

Clean code improvements

🧠 How It Works

User writes JavaScript code in the editor.

On clicking Review, the frontend sends the code to the backend.

Backend sends the code to Google Gemini Flash Lite Model.

AI analyzes:

Logic

Structure

Efficiency

Bugs

Best practices

The response is returned and displayed in formatted Markdown.

📸 UI Overview

Left Panel → Code Editor

Right Panel → AI Review Output

Floating "Review" Button

🚀 Deployment

You can deploy:

Frontend → Vercel / Netlify

Backend → Render / Railway / Vercel (Serverless)

Make sure to update:

const API_BASE_URL = "your-deployed-backend-url";


inside App.jsx.

🔐 Environment Variables
Variable	Description
GOOGLE_GEMINI_KEY	Google Gemini API Key
🎯 Future Improvements

Support multiple programming languages

Add authentication system

Save review history

Add code comparison view

Improve UI/UX animations

👨‍💻 Author

Anas Amin
BSCS Student | Full Stack Developer
Passionate about MERN, AI & Scalable Applications 🚀

⭐ Show Your Support

If you like this project:

⭐ Star the repository

🍴 Fork it

🧠 Contribute ideas

🐛 Report issues

