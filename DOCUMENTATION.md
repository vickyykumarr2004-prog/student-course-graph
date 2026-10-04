# 📖 FSAD-PS44 - Complete Documentation

## 🎯 Project Overview

A production-ready Online Course Management System built for educators and students, featuring modern architecture, responsive design, and comprehensive functionality.

## 🏗️ Architecture

### Frontend Architecture
```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   └── Skeleton.jsx
│   └── layout/          # Layout components
│       ├── Navbar.jsx
│       ├── Sidebar.jsx
│       ├── DashboardLayout.jsx
│       ├── ProtectedRoute.jsx
│       └── ErrorBoundary.jsx
├── pages/
│   ├── auth/            # Authentication pages
│   ├── admin/           # Admin pages
│   └── student/         # Student pages
├── store/
│   └── slices/          # Redux slices
│       ├── apiSlice.js  # RTK Query API
│       ├── authSlice.js # Auth state
│       └── themeSlice.js # Theme state
└── App.jsx              # Main app component
```

### Backend Architecture
```
server/
├── models/              # Mongoose models
│   ├── User.js
│   ├── Course.js
│   └── Enrollment.js
├── routes/              # Express routes
│   ├── auth.js
│   ├── courses.js
│   └── enrollments.js
├── middleware/          # Custom middleware
│   └── auth.js
├── controllers/         # Route controllers
├── index.js            # Server entry point
└── seed.js             # Database seeder
```

## 🔐 Authentication Flow

1. User registers with email, password, and role
2. Password is hashed using bcrypt
3. User logs in with credentials
4. Server generates JWT token
5. Token stored in localStorage and Redux
6. Token sent with every API request
7. Server validates token via middleware
8. Protected routes check authentication status

## 🎨 UI/UX Features

### Design System
- **Colors**: Primary blue (#0284c7), with semantic colors
- **Typography**: System fonts with clear hierarchy
- **Spacing**: Consistent 4px grid system
- **Shadows**: Subtle elevation for depth
- **Animations**: Smooth transitions (200ms)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Dark Mode
- Automatic theme detection
- Manual toggle in navbar
- Persisted in localStorage
- Smooth transitions

## 📊 State Management

### Redux Store Structure
```javascript
{
  auth: {
    user: { id, name, email, role },
    token: "jwt-token",
    isAuthenticated: boolean
  },
  theme: {
    mode: "light" | "dark"
  },
  api: {
    queries: { ... },
    mutations: { ... }
  }
}
```

### RTK Query Endpoints
- **Auth**: login, register
- **Courses**: getCourses, getCourse, createCourse, updateCourse, deleteCourse
- **Enrollments**: getEnrollments, enrollCourse
- **Assignments**: submitAssignment, getAssignments
- **Quizzes**: submitQuiz, getQuizzes

## 🔌 API Documentation

### Authentication Endpoints

#### POST /api/auth/register
Register a new user
```json
Request:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student" | "admin"
}

Response:
{
  "message": "User created successfully"
}
```

#### POST /api/auth/login
Login user
```json
Request:
{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "token": "jwt-token",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student"
  }
}
```

### Course Endpoints

#### GET /api/courses
Get all courses (Public)

#### GET /api/courses/:id
Get single course (Public)

#### POST /api/courses
Create course (Admin only)
```json
Request:
{
  "title": "Course Title",
  "description": "Course description",
  "category": "Programming",
  "price": 49.99,
  "thumbnail": "url"
}
```

#### PUT /api/courses/:id
Update course (Admin only)

#### DELETE /api/courses/:id
Delete course (Admin only)

### Enrollment Endpoints

#### GET /api/enrollments
Get user enrollments (Protected)

#### POST /api/enrollments
Enroll in course (Protected)
```json
Request:
{
  "courseId": "course-id"
}
```

## 🎓 User Roles & Permissions

### Admin (Educator)
- ✅ Create, update, delete courses
- ✅ View all students
- ✅ Track enrollments
- ✅ View analytics
- ✅ Manage course content
- ❌ Cannot enroll in courses

### Student
- ✅ Browse courses
- ✅ Enroll in courses
- ✅ View enrolled courses
- ✅ Track progress
- ✅ Submit assignments
- ✅ Take quizzes
- ❌ Cannot create courses

## 🚀 Deployment Guide

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- Git

### Environment Variables
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
JWT_SECRET=your-super-secret-key
NODE_ENV=production
```

### Build & Deploy

#### Option 1: Traditional Hosting
```bash
npm install
npm run build
npm run server
```

#### Option 2: Docker
```bash
docker build -t course-management .
docker run -p 5000:5000 --env-file .env course-management
```

#### Option 3: Cloud Platforms

**Vercel (Frontend)**
```bash
vercel --prod
```

**Heroku (Backend)**
```bash
heroku create
git push heroku main
```

**Railway**
- Connect GitHub repo
- Set environment variables
- Deploy automatically

## 🧪 Testing

### Manual Testing Checklist

**Authentication**
- [ ] Register new user
- [ ] Login with credentials
- [ ] Logout
- [ ] Protected route access

**Admin Features**
- [ ] Create course
- [ ] Update course
- [ ] Delete course
- [ ] View students
- [ ] View analytics

**Student Features**
- [ ] Browse courses
- [ ] Enroll in course
- [ ] View enrolled courses
- [ ] Track progress
- [ ] View assignments

**UI/UX**
- [ ] Dark mode toggle
- [ ] Responsive design
- [ ] Loading states
- [ ] Error handling

## 🔧 Customization Guide

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#your-color',
    // ... more shades
  }
}
```

### Add New Page
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `Sidebar.jsx`

### Add New API Endpoint
1. Create route in `server/routes/`
2. Add endpoint to `apiSlice.js`
3. Use hook in component

## 📈 Performance Optimization

- **Code Splitting**: React.lazy for route-based splitting
- **Image Optimization**: Use WebP format, lazy loading
- **API Caching**: RTK Query automatic caching
- **Bundle Size**: Tree shaking, minification
- **Database**: Indexes on frequently queried fields

## 🐛 Common Issues & Solutions

**Issue**: MongoDB connection error
**Solution**: Check MONGODB_URI, ensure MongoDB is running

**Issue**: CORS error
**Solution**: Verify backend URL in apiSlice.js

**Issue**: Token expired
**Solution**: Login again, increase JWT expiry

**Issue**: Port already in use
**Solution**: Change PORT in .env or kill process

## 📚 Learning Resources

- React: https://react.dev
- Redux Toolkit: https://redux-toolkit.js.org
- Tailwind CSS: https://tailwindcss.com
- Express: https://expressjs.com
- MongoDB: https://www.mongodb.com/docs

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## 📄 License

MIT License - feel free to use for learning and projects

## 👨💻 Support

For issues and questions:
- Check documentation
- Review code comments
- Search existing issues
- Create new issue with details

---

Built with ❤️ for FSAD-PS44 Project
