# 🎓 FSAD-PS44 – Online Course Management System (Frontend Only)

A modern, full-featured course management system built with React, using localStorage for data persistence.

## 🚀 Tech Stack

- **React 19** with Vite
- **Redux Toolkit** + RTK Query
- **React Router v6**
- **Tailwind CSS**
- **Recharts** for analytics
- **Lucide React** for icons
- **localStorage** for data persistence

## ✨ Features

### 👨🏫 Admin (Educator)
- ✅ Dashboard with analytics
- ✅ Create, update, delete courses
- ✅ Track student enrollments
- ✅ View analytics with charts

### 🎓 Student
- ✅ Browse available courses
- ✅ Enroll in courses
- ✅ Track learning progress
- ✅ View assignments
- ✅ Progress analytics

### 🎨 UI/UX
- ✅ Dark/Light mode toggle
- ✅ Responsive design
- ✅ Skeleton loaders
- ✅ Protected routes
- ✅ Error boundaries

## 📦 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Application
```bash
npm run dev
```

### 3. Access the Application
Open http://localhost:5173 in your browser

### 4. Test Credentials
The app comes with pre-loaded test accounts:

- **Admin**: admin@example.com / admin123
- **Student**: student@example.com / student123

## 💾 Data Storage

All data is stored in browser's localStorage:
- Users
- Courses
- Enrollments

**Note**: Data persists across sessions but is browser-specific. Clearing browser data will reset the application.

## 🎯 Usage

1. **Register** a new account or use test credentials
2. **Login** with your credentials
3. **Admin**: Create and manage courses
4. **Student**: Browse and enroll in courses
5. **Toggle** dark/light mode with the moon/sun icon

## 🛠️ Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   └── layout/          # Layout components
├── pages/
│   ├── auth/            # Login, Register
│   ├── admin/           # Admin pages
│   └── student/         # Student pages
├── store/
│   └── slices/          # Redux slices
├── utils/               # Utility functions
└── App.jsx
```

## 🎨 Customization

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: '#your-color',
    // ...
  }
}
```

### Reset Data
Open browser console and run:
```javascript
localStorage.clear();
location.reload();
```

## 📝 Features

- ✅ User authentication
- ✅ Role-based access (Admin/Student)
- ✅ Course management
- ✅ Enrollment system
- ✅ Progress tracking
- ✅ Analytics dashboard
- ✅ Dark mode
- ✅ Responsive design

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

## 📄 License

MIT License

---

Built with ❤️ for FSAD-PS44 Project
