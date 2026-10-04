# 🚀 Quick Start Guide

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Setup Environment
Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/course_management
JWT_SECRET=your-super-secret-jwt-key-change-this
```

## Step 3: Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Windows (if installed as service)
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

## Step 4: Run the Application

### Option A: Run Both (Recommended for Development)
Open two terminal windows:

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Option B: Production Build
```bash
npm run build
npm run server
```

## Step 5: Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Step 6: Create Test Accounts
1. Go to http://localhost:5173/register
2. Create an **Educator** account (select "Educator" role)
3. Create a **Student** account (select "Student" role)

## Step 7: Test Features

### As Educator:
- Login with educator account
- Create courses from Admin Dashboard
- View student enrollments
- Check analytics

### As Student:
- Login with student account
- Browse available courses
- Enroll in courses
- Track your progress

## 🎯 Key Features to Test

✅ Dark/Light mode toggle (moon/sun icon in navbar)
✅ Responsive design (resize browser)
✅ Course CRUD operations (admin)
✅ Course enrollment (student)
✅ Progress tracking
✅ Analytics charts

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check MONGODB_URI in .env file

**Port Already in Use:**
- Change PORT in .env file
- Or kill the process using the port

**Module Not Found:**
- Run `npm install` again
- Delete node_modules and reinstall

## 📚 Tech Stack Reference

- **Frontend:** React 19 + Vite + Tailwind CSS
- **State:** Redux Toolkit + RTK Query
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **Auth:** JWT + Bcrypt
- **Charts:** Recharts
- **Icons:** Lucide React

## 🎨 UI Components Available

- Button (primary, secondary, danger, outline)
- Card
- Input
- Modal
- Skeleton loaders
- Protected routes
- Error boundaries

## 📝 Next Steps

1. Customize the theme in `tailwind.config.js`
2. Add more course features (videos, quizzes)
3. Implement file upload with Cloudinary
4. Add email notifications
5. Deploy to production

Happy Coding! 🎓
