# 🎓 FSAD-PS44 – Online Course Management System

A production-ready, full-stack EdTech platform built with modern technologies for educators and students.

## 🚀 Tech Stack

### Frontend
- **React 19** with Vite
- **Redux Toolkit** + RTK Query for state management
- **React Router v6** for routing
- **Tailwind CSS** for styling
- **Recharts** for analytics
- **Lucide React** for icons

### Backend
- **Node.js** + Express
- **MongoDB** with Mongoose
- **JWT** authentication
- **Bcrypt** for password hashing

## ✨ Features

### 👨‍🏫 Admin (Educator)
- ✅ Secure authentication & dashboard
- ✅ Create, update, delete courses
- ✅ Upload course materials
- ✅ Track student enrollments
- ✅ Analytics with charts
- ✅ Publish/unpublish courses

### 🎓 Student
- ✅ Registration & login
- ✅ Browse available courses
- ✅ Enroll in courses
- ✅ Track learning progress
- ✅ View course materials
- ✅ Progress analytics dashboard

### 🎨 UI/UX
- ✅ Modern, responsive design
- ✅ Dark/Light mode toggle
- ✅ Skeleton loaders
- ✅ Protected routes
- ✅ Error boundaries
- ✅ Clean component architecture

## 📦 Installation

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Setup

1. **Clone and install dependencies**
```bash
cd course_management
npm install
```

2. **Configure environment**
```bash
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

3. **Start MongoDB** (if local)
```bash
mongod
```

4. **Run the application**

Terminal 1 - Backend:
```bash
npm run server
```

Terminal 2 - Frontend:
```bash
npm run dev
```

5. **Access the application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 🔐 Default Test Accounts

Create accounts via the registration page:
- **Admin/Educator**: Select "Educator" role during registration
- **Student**: Select "Student" role during registration

## 📁 Project Structure

```
course_management/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   └── layout/          # Layout components
│   ├── pages/
│   │   ├── auth/            # Login, Register
│   │   ├── admin/           # Admin pages
│   │   └── student/         # Student pages
│   ├── store/
│   │   └── slices/          # Redux slices
│   └── App.jsx
├── server/
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── middleware/          # Auth middleware
│   └── index.js
└── package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (Admin)
- `PUT /api/courses/:id` - Update course (Admin)
- `DELETE /api/courses/:id` - Delete course (Admin)

### Enrollments
- `GET /api/enrollments` - Get user enrollments
- `POST /api/enrollments` - Enroll in course
- `PATCH /api/enrollments/:id/progress` - Update progress

## 🐳 Docker Deployment

```bash
docker build -t course-management .
docker run -p 5000:5000 course-management
```

## 🛠️ Development

- **Linting**: `npm run lint`
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## 📝 Future Enhancements

- [ ] Video upload with Cloudinary
- [ ] Assignment submission system
- [ ] Quiz auto-evaluation
- [ ] Certificate generation
- [ ] Payment integration
- [ ] Email notifications
- [ ] Real-time chat
- [ ] Course reviews & ratings

## 👨‍💻 Author

Built with ❤️ for FSAD-PS44 Project

## 📄 License

MIT License
"# fsad-project" 
"# fsad-project" 
"# fsad-project" 
"# fsad-project" 
"# fsad-project" 
