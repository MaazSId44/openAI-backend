
# Backend - MERN Stack App with OpenAI Integration

This is the **backend** portion of a MERN stack application that includes OpenRouter API integration and a RESTful API for managing a collection of items.

## 🔧 Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- OpenAI API
- dotenv

---

## 📁 Project Structure

```
backend/
│
├── config/
│   └── connectdb.js              # MongoDB connection setup
│
├── controllers/
│   ├── itemController.js         # CRUD logic for items
│   ├── openaiController.js       # OpenAI integration logic
│
├── middlewares/
│   ├── trycatch.js               # Async error handler middleware
│   └── validations.js            # Input validation
│
├── models/
│   └── item.js                   # Mongoose schema for item
│
├── routes/
│   ├── itemRoutes.js             # Routes for item endpoints
│   └── openaiRoutes.js           # Routes for OpenAI endpoint
│
├── services/                     # (Optional) Service layer
├── utils/                        # (Optional) Utility functions
│
├── .env                          # Environment variables (API keys, DB URI)
├── server.js                     # Entry point
└── README.md
```

---

## 📦 Installation

1. Clone the repository and navigate to the backend directory:

```bash
git clone https://github.com/MaazSId44/openAI-backend.git
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root with the following variables:

```
PORT=5000
DATABASE_URL=your_mongo_connection_string
BASE_URL=Your_base_url
OPENROUTER_API_KEY=your_openRouter_api_key
```

4. Start the development server:

```bash
npm run dev
```

---

## 🚀 API Endpoints

### Item Routes (`/items`)
| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| GET    | /items         | Get all items                |
| POST   | /items         | Add a new item               |
| DELETE | /items/:id     | Delete an item by ID         |

#### Item Structure
```json
{
  "name": "Sample Item",
  "description": "This is a test item."
}
```

---

### OpenAI Integration (`/generate`)

| Method | Endpoint     | Description                           |
|--------|--------------|---------------------------------------|
| POST   | /generate    | Send prompt and receive AI response   |

#### Request Body
```json
{
  "prompt": "Write a short story about a robot."
}
```

#### Response Example
```json
{
  "response": "Once upon a time..."
}
```

---

## ✅ Best Practices Followed

- Modularized code structure (controllers, models, routes, etc.)
- Error handling via middlewares
- Environment variables for sensitive configs
- Validation logic separated from business logic

---

## 📽 Demo and Screenshots

> Add screen recordings and live API testing screenshots here (Postman or Swagger).

---

## 🧠 Author & License

- **Author**: Muhammad Maaz
- **License**: MIT

---s