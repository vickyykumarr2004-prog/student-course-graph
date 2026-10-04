# 📂 Project Structure Guide

## Complete Directory Tree

```
course_management/
│
├── 📁 public/                          # Static assets
│   └── vite.svg                        # Vite logo
│
├── 📁 server/                          # Backend (Node.js + Express)
│   ├── 📁 controllers/                 # Route controllers (future)
│   ├── 📁 middleware/                  # Custom middleware
│   │   └── auth.js                     # JWT authentication middleware
│   ├── 📁 models/                      # MongoDB models
│   │   ├── User.js                     # User model (admin/student)
│   │   ├── Course.js                   # Course model
│   │   └── Enrollment.js               # Enrollment model
│   ├── 📁 routes/                      # API routes
│   │   ├── auth.js                     # Authentication routes
│   │   ├── courses.js                  # Course CRUD routes
│   │   └── enrollments.js              # Enrollment routes
│   ├── index.js                        # Server entry point
│   └── seed.js                         # Database seeder
│
├── 📁 src/                             # Frontend (React + Vite)
│   ├── 📁 components/                  # React components
│   │   ├── 📁 layout/                  # Layout components
│   │   │   ├── DashboardLayout.jsx     # Main dashboard layout
│   │   │   ├── ErrorBoundary.jsx       # Error boundary wrapper
│   │   │   ├── Navbar.jsx              # Top navigation bar
│   │   │   ├── ProtectedRoute.jsx      # Route protection HOC
│   │   │   └── Sidebar.jsx             # Side navigation menu
│   │   └── 📁 ui/                      # Reusable UI components
│   │       ├── Button.jsx              # Button component
│   │       ├── Card.jsx                # Card component
│   │       ├── Input.jsx               # Input field component
│   │       ├── Modal.jsx               # Modal dialog component
│   │       ├── Skeleton.jsx            # Loading skeleton
│   │       └── index.js                # UI exports
│   │
│   ├── 📁 pages/                       # Page components
│   │   ├── 📁 admin/                   # Admin pages
│   │   │   ├── AdminAnalytics.jsx      # Analytics & reports
│   │   │   ├── AdminCourses.jsx        # Course management
│   │   │   ├── AdminDashboard.jsx      # Admin dashboard
│   │   │   └── AdminStudents.jsx       # Student management
│   │   ├── 📁 auth/                    # Authentication pages
│   │   │   ├── Login.jsx               # Login page
│   │   │   └── Register.jsx            # Registration page
│   │   ├── 📁 student/                 # Student pages
│   │   │   ├── BrowseCourses.jsx       # Browse all courses
│   │   │   ├── MyCourses.jsx           # Enrolled courses
│   │   │   ├── StudentAssignments.jsx  # Assignments page
│   │   │   ├── StudentDashboard.jsx    # Student dashboard
│   │   │   └── StudentProgress.jsx     # Progress tracking
│   │   └── ComponentShowcase.jsx       # UI component demo
│   │
│   ├── 📁 store/                       # Redux store
│   │   ├── 📁 slices/                  # Redux slices
│   │   │   ├── apiSlice.js             # RTK Query API
│   │   │   ├── authSlice.js            # Auth state
│   │   │   └── themeSlice.js           # Theme state
│   │   └── index.js                    # Store configuration
│   │
│   ├── App.jsx                         # Main app component
│   ├── index.css                       # Global styles
│   └── main.jsx                        # React entry point
│
├── 📄 .env.example                     # Environment template
├── 📄 .gitignore                       # Git ignore rules
├── 📄 DOCUMENTATION.md                 # Complete documentation
├── 📄 Dockerfile                       # Docker configuration
├── 📄 FEATURES.md                      # Features list
├── 📄 package.json                     # Dependencies
├── 📄 postcss.config.js                # PostCSS config
├── 📄 PROJECT_SUMMARY.md               # Project summary
├── 📄 QUICKSTART.md                    # Quick start guide
├── 📄 README.md                        # Project overview
├── 📄 SETUP_CHECKLIST.md               # Setup checklist
├── 📄 tailwind.config.js               # Tailwind config
└── 📄 vite.config.js                   # Vite config
```

## 🗂️ Directory Breakdown

### Frontend Structure (`src/`)

#### Components (`src/components/`)
**Purpose**: Reusable React components

**Layout Components** (`layout/`)
- `DashboardLayout.jsx` - Wraps dashboard pages with navbar and sidebar
- `ErrorBoundary.jsx` - Catches and displays React errors
- `Navbar.jsx` - Top navigation with logo, theme toggle, user info
- `ProtectedRoute.jsx` - Protects routes based on authentication
- `Sidebar.jsx` - Side navigation menu (admin/student specific)

**UI Components** (`ui/`)
- `Button.jsx` - Customizable button (4 variants, 3 sizes)
- `Card.jsx` - Container component with shadow
- `Input.jsx` - Form input with label and error support
- `Modal.jsx` - Dialog overlay component
- `Skeleton.jsx` - Loading placeholder animations
- `index.js` - Exports all UI components

#### Pages (`src/pages/`)
**Purpose**: Full page components

**Admin Pages** (`admin/`)
- `AdminDashboard.jsx` - Overview with stats and charts
- `AdminCourses.jsx` - Course CRUD operations
- `AdminStudents.jsx` - Student list and progress
- `AdminAnalytics.jsx` - Detailed analytics and reports

**Auth Pages** (`auth/`)
- `Login.jsx` - User login form
- `Register.jsx` - User registration form

**Student Pages** (`student/`)
- `StudentDashboard.jsx` - Personal learning overview
- `BrowseCourses.jsx` - Browse and enroll in courses
- `MyCourses.jsx` - View enrolled courses
- `StudentAssignments.jsx` - Assignment list and submission
- `StudentProgress.jsx` - Progress tracking and analytics

#### Store (`src/store/`)
**Purpose**: Redux state management

**Slices** (`slices/`)
- `apiSlice.js` - RTK Query API endpoints
- `authSlice.js` - Authentication state (user, token)
- `themeSlice.js` - Theme state (light/dark mode)

**Store Configuration**
- `index.js` - Redux store setup with middleware

### Backend Structure (`server/`)

#### Models (`server/models/`)
**Purpose**: MongoDB schema definitions

- `User.js` - User model (name, email, password, role)
- `Course.js` - Course model (title, description, price, etc.)
- `Enrollment.js` - Enrollment model (student, course, progress)

#### Routes (`server/routes/`)
**Purpose**: API endpoint definitions

- `auth.js` - Authentication endpoints (login, register)
- `courses.js` - Course CRUD endpoints
- `enrollments.js` - Enrollment endpoints

#### Middleware (`server/middleware/`)
**Purpose**: Request processing

- `auth.js` - JWT verification and role checking

#### Root Files
- `index.js` - Express server setup
- `seed.js` - Database seeding script

## 📋 File Purposes

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `vite.config.js` | Vite bundler configuration |
| `tailwind.config.js` | Tailwind CSS customization |
| `postcss.config.js` | PostCSS plugins |
| `.env.example` | Environment variables template |
| `.gitignore` | Git ignore patterns |
| `Dockerfile` | Docker container setup |

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `QUICKSTART.md` | Quick setup guide |
| `DOCUMENTATION.md` | Complete documentation |
| `PROJECT_SUMMARY.md` | Summary and next steps |
| `SETUP_CHECKLIST.md` | Setup verification |
| `FEATURES.md` | Features list |

## 🔄 Data Flow

### Authentication Flow
```
User Input (Login.jsx)
    ↓
Redux Action (authSlice)
    ↓
API Call (apiSlice)
    ↓
Backend Route (auth.js)
    ↓
Database (User model)
    ↓
JWT Token Generated
    ↓
Response to Frontend
    ↓
Store in Redux + localStorage
    ↓
Protected Routes Accessible
```

### Course Management Flow
```
Admin Creates Course (AdminCourses.jsx)
    ↓
Form Submission
    ↓
API Call (apiSlice.createCourse)
    ↓
Backend Route (courses.js)
    ↓
Database (Course model)
    ↓
Response with New Course
    ↓
RTK Query Cache Update
    ↓
UI Auto-Updates
```

### Enrollment Flow
```
Student Browses (BrowseCourses.jsx)
    ↓
Click Enroll Button
    ↓
API Call (apiSlice.enrollCourse)
    ↓
Backend Route (enrollments.js)
    ↓
Create Enrollment Record
    ↓
Update Course enrolledCount
    ↓
Response to Frontend
    ↓
Update My Courses List
```

## 🎨 Component Hierarchy

```
App.jsx
├── ErrorBoundary
│   └── BrowserRouter
│       └── Routes
│           ├── Login (public)
│           ├── Register (public)
│           ├── ProtectedRoute (admin)
│           │   └── DashboardLayout
│           │       ├── Navbar
│           │       ├── Sidebar
│           │       └── AdminDashboard
│           │           └── Cards, Charts
│           └── ProtectedRoute (student)
│               └── DashboardLayout
│                   ├── Navbar
│                   ├── Sidebar
│                   └── StudentDashboard
│                       └── Cards, Charts
```

## 🗄️ Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: "admin" | "student",
  createdAt: Date
}
```

### Courses Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  category: String,
  price: Number,
  thumbnail: String,
  instructor: ObjectId (ref: User),
  published: Boolean,
  duration: String,
  rating: Number,
  enrolledCount: Number,
  lectures: Array,
  assignments: Array,
  quizzes: Array,
  createdAt: Date
}
```

### Enrollments Collection
```javascript
{
  _id: ObjectId,
  student: ObjectId (ref: User),
  course: ObjectId (ref: Course),
  progress: Number,
  completed: Boolean,
  enrolledAt: Date,
  completedAt: Date,
  assignmentSubmissions: Array,
  quizResults: Array
}
```

## 🚀 Build Process

### Development
```
npm run dev → Vite Dev Server → Hot Reload
npm run server → Node Server → API Available
```

### Production
```
npm run build → Vite Build → dist/ folder
npm run server → Serve API + Static Files
```

## 📦 Key Dependencies

### Frontend
- `react` - UI library
- `react-router-dom` - Routing
- `@reduxjs/toolkit` - State management
- `tailwindcss` - Styling
- `recharts` - Charts
- `lucide-react` - Icons

### Backend
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `jsonwebtoken` - JWT auth
- `bcryptjs` - Password hashing
- `cors` - CORS middleware

## 💡 Tips for Navigation

1. **Start with**: `src/App.jsx` to understand routing
2. **UI Components**: Check `src/components/ui/`
3. **Pages**: Look in `src/pages/` by role
4. **API**: Review `src/store/slices/apiSlice.js`
5. **Backend**: Start with `server/index.js`
6. **Models**: Check `server/models/` for data structure

---

This structure is designed for scalability and maintainability. Each directory has a clear purpose and follows React/Node.js best practices.
