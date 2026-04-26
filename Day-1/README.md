# ITI Web Services API - DAY 1

A RESTful API built with Node.js, Express, TypeScript, and MongoDB. This project manages "Students" and "Courses" resources and demonstrates clean architecture and RESTful design principles.

## 🛠️ Technologies Used

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB & Mongoose
- **Testing:** REST Client (.http files) / Postman

## 📋 Prerequisites

- Node.js installed on your machine.
- MongoDB installed and running locally (or a MongoDB Atlas URI).

## ⚙️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/muhammad-khaled-tech/web-services-ITI/tree/main/Day-1
   cd web-services-ITI/Day-1
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add:

   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/iti_webservices
   ```

4. **Run the server:**
   ```bash
   npm run dev
   ```

## 🛣️ API Endpoints

### Students

- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get a single student by ID
- `POST /api/students` - Create a new student
- `DELETE /api/students/:id` - Delete a student

### Courses

- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get a single course by ID
- `POST /api/courses` - Create a new course
- `DELETE /api/courses/:id` - Delete a course

## 🧪 How to Test

1. Install the **REST Client** extension in VS Code.
2. Open `students.http` or `courses.http` in the `requests` folder.
3. Click **Send Request** above any endpoint.
