# Fullstack System Integration (Mission 11)

## 📌 Project Overview

This project integrates a React (Vite) frontend with a Node.js, Express, and MongoDB backend to create a complete full-stack application. The application performs CRUD operations using REST APIs and stores data in MongoDB. It also supports image uploads using Multer and Cloudinary.

---

## 🚀 Tech Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6+)
* CSS
* Fetch API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS

# Features

## ✅ Phase 1 – Network Connection & CORS

* Connected React frontend with Express backend
* Configured CORS middleware
* Fetched data from MongoDB using Fetch API
* Displayed API data dynamically using React
* Replaced dummy data with live backend API

---

## ✅ Phase 2 – Full CRUD Operations

* Create new posts
* Read all posts
* Delete existing posts
* Dynamic Loading state
* Error handling for failed API requests
* Automatic UI updates after CRUD operations

# REST API Endpoints

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /posts     | Get all posts     |
| POST   | /posts     | Create a new post |
| DELETE | /posts/:id | Delete a post     |

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

## Install Frontend

```bash
cd client
npm install
```

## Install Backend

```bash
cd server
npm install

