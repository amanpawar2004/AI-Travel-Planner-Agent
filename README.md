# ✈️ AI Travel Planner Agent

An AI-powered travel planning web application that generates **personalized travel itineraries** based on the user's destination, trip duration, and budget.

The application uses **Python, Flask, Groq API, and an AI travel agent architecture** to understand user requirements and generate a customized day-by-day travel plan.

---

## 🌐 Live Demo

🚀 **Live Application:**  
https://ai-travel-planner-agent-two.vercel.app

---

## 📌 Features

- ✈️ AI-powered travel itinerary generation
- 📍 Destination-based trip planning
- 📅 Custom trip duration
- 💰 Budget-based travel planning
- 🤖 AI Travel Agent architecture
- 🧠 Memory component for storing trip history during runtime
- ✅ Interactive itinerary checklist
- 🔄 Regenerate travel plans
- 📱 Responsive dark-themed UI
- ⚡ Fast AI response using Groq
- 🌐 Deployable on Vercel
- 🛡️ Input validation and error handling

---

## 🖥️ Application Preview

The application allows users to enter:

- **Destination**
- **Number of Days**
- **Travel Budget**

Example:

```text
Destination: Pune
Duration: 3 Days
Budget: ₹15,000
```

The AI then generates a personalized itinerary containing:

- Places to visit
- Daily activities
- Food recommendations
- Transportation suggestions
- Budget recommendations
- Travel tips
- Quick travel checklist

---

## 🏗️ Project Architecture

```text
User
 │
 ▼
Frontend
HTML + CSS + JavaScript
 │
 ▼
Flask API
POST /plan
 │
 ▼
TravelAgent
 │
 ├── Planner
 │
 ├── Memory
 │
 ├── Action
 │
 └── Groq AI
       │
       ▼
   AI-generated
   Travel Plan
 │
 ▼
Frontend
Markdown → HTML
 │
 ▼
Personalized Itinerary
```

---

## 📂 Project Structure

```text
AI_Task_Planner_Agent/
│
├── app.py
├── agent.py
├── planner.py
├── memory.py
├── actions.py
├── config.py
├── requirements.txt
├── README.md
├── .env
├── .gitignore
│
├── data/
│   └── itinerary.txt
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```

---

## 🛠️ Technologies Used

### Backend

- Python
- Flask
- Groq API
- python-dotenv

### Frontend

- HTML5
- CSS3
- JavaScript
- Markdown
- Marked.js

### AI

- Groq
- `openai/gpt-oss-120b`

### Deployment

- Vercel
- GitHub

---

## 🤖 AI Travel Agent

The project follows a simple agent-based architecture.

### TravelAgent

The main agent coordinates the different components:

```python
class TravelAgent():

    def __init__(self):
        self.planner = Planner()
        self.memory = Memory()
        self.action = Action()
```

The agent:

1. Receives the user's travel request
2. Creates an AI prompt
3. Sends the prompt to the Groq API
4. Receives the generated itinerary
5. Stores the destination in memory
6. Returns the itinerary to the frontend

---

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
GROQ_API_KEY=your_groq_api_key
```

⚠️ **Never commit your `.env` file to GitHub.**

Add this to `.gitignore`:

```gitignore
.env
venv/
__pycache__/
*.pyc
```

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/amanpawar2004/AI_Task_Planner_Agent.git
```

### 2. Navigate to the project

```bash
cd AI_Task_Planner_Agent
```

### 3. Create a virtual environment

Windows:

```powershell
python -m venv venv
```

Activate it:

```powershell
venv\Scripts\activate
```

Linux/macOS:

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## 📥 Install Dependencies

```bash
pip install -r requirements.txt
```

### Requirements

```text
groq
python-dotenv
colorama
Flask
```

---

## 🔐 Configure Groq API

Create a `.env` file:

```env
GROQ_API_KEY=your_api_key_here
```

The application loads the API key using:

```python
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)
```

---

## ▶️ Run the Application

Start the Flask server:

```bash
python app.py
```

The application will run at:

```text
http://127.0.0.1:5000
```

Open the URL in your browser.

---

## 🔌 API Endpoint

### Generate Travel Plan

```http
POST /plan
```

### Request

```json
{
    "city": "Pune",
    "days": 3,
    "budget": 15000
}
```

### Response

```json
{
    "success": true,
    "itinerary": "AI generated travel itinerary..."
}
```

---

## 🧠
