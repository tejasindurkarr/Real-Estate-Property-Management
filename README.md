
# Rbrickks Technology – MERN Stack Real Estate App

This is a full-stack web application using the MERN stack that allows users to manage real estate properties.

## Tech Stack

- **Frontend:** React.js (Hooks, Functional Components), React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens (JWT)

---

## Features

- User signup and login with JWT authentication.
- Protected routes for authenticated users.
- Logged-in users can add new property listings.
- Logged-in users can delete their own property listings.
- Publicly searchable property list.
- Search properties by title or location.

---

## Setup and Installation

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud like MongoDB Atlas)

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd <your-repo-folder>
```

### 2. Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install


# and add the following environment variables:
PORT=5000
MONGO_URI=
JWT_SECRET=

# Start the backend server
npm start
```

The server will be running on `http://localhost:5000`.

### 3. Frontend Setup

```bash
# Navigate to the frontend directory from the root
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm start
```

The React app will open on `http://localhost:3000`.

### 4. Running Both Concurrently (from root directory)

The root `package.json` is set up to run both servers with one command.

```bash
# From the root directory, install all dependencies
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..


# Run both backend and frontend servers
npm run dev
```

This will start the backend on port 5000 and the frontend on port 3000.

