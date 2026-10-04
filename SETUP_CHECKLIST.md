# ✅ Setup Checklist

Follow this checklist to ensure everything is set up correctly.

## Pre-Installation

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] MongoDB installed and accessible
- [ ] Git installed (optional, for version control)
- [ ] Code editor installed (VS Code recommended)

## Installation Steps

### Step 1: Install Dependencies
```bash
npm install
```
- [ ] All dependencies installed successfully
- [ ] No error messages in terminal

### Step 2: Environment Configuration
```bash
# Create .env file in root directory
```
- [ ] .env file created
- [ ] PORT set (default: 5000)
- [ ] MONGODB_URI configured
- [ ] JWT_SECRET set (use a strong random string)

Example .env:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/course_management
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### Step 3: MongoDB Setup
- [ ] MongoDB service is running
- [ ] Can connect to MongoDB (test with MongoDB Compass or CLI)
- [ ] Database name matches MONGODB_URI

**Windows:**
```bash
net start MongoDB
```

**macOS/Linux:**
```bash
sudo systemctl start mongod
# or
brew services start mongodb-community
```

### Step 4: Seed Database (Optional)
```bash
npm run seed
```
- [ ] Seed script ran successfully
- [ ] Test accounts created
- [ ] Sample courses created

### Step 5: Start Backend Server
```bash
npm run server
```
- [ ] Server starts without errors
- [ ] Shows "✅ MongoDB Connected"
- [ ] Shows "🚀 Server running on port 5000"
- [ ] Can access http://localhost:5000

### Step 6: Start Frontend (New Terminal)
```bash
npm run dev
```
- [ ] Vite dev server starts
- [ ] Shows local URL (usually http://localhost:5173)
- [ ] No compilation errors
- [ ] Can access frontend in browser

## Verification Tests

### Test 1: Frontend Loads
- [ ] Navigate to http://localhost:5173
- [ ] Login page displays correctly
- [ ] No console errors in browser DevTools
- [ ] Styling looks correct

### Test 2: Registration
- [ ] Click "Register here" link
- [ ] Fill out registration form
- [ ] Select role (Student or Educator)
- [ ] Submit form
- [ ] Success message appears
- [ ] Redirected to login page

### Test 3: Login
- [ ] Enter credentials
- [ ] Click "Sign In"
- [ ] Successfully logged in
- [ ] Redirected to appropriate dashboard

### Test 4: Admin Features (if admin account)
- [ ] Dashboard displays with stats
- [ ] Can navigate to Courses page
- [ ] Can create new course
- [ ] Course appears in list
- [ ] Can view Students page
- [ ] Can view Analytics page

### Test 5: Student Features (if student account)
- [ ] Dashboard displays with progress
- [ ] Can navigate to Browse Courses
- [ ] Can see available courses
- [ ] Can enroll in a course
- [ ] Course appears in My Courses
- [ ] Can view Assignments page
- [ ] Can view Progress page

### Test 6: UI Features
- [ ] Dark mode toggle works (moon/sun icon)
- [ ] Theme persists on page reload
- [ ] Sidebar navigation works
- [ ] Logout works correctly
- [ ] Responsive design works (resize browser)

### Test 7: API Endpoints
Test with browser or Postman:

- [ ] GET http://localhost:5000 (should return API message)
- [ ] GET http://localhost:5000/api/courses (should return courses)
- [ ] POST http://localhost:5000/api/auth/login (should login)

## Common Issues & Solutions

### Issue: "Cannot find module"
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Port already in use"
**Solution:**
- Change PORT in .env file
- Or kill the process:
  - Windows: `netstat -ano | findstr :5000` then `taskkill /PID <PID> /F`
  - Mac/Linux: `lsof -ti:5000 | xargs kill`

### Issue: "MongoDB connection failed"
**Solution:**
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- Try: `mongodb://127.0.0.1:27017/course_management`

### Issue: "CORS error"
**Solution:**
- Verify backend is running
- Check API URL in src/store/slices/apiSlice.js

### Issue: "JWT token invalid"
**Solution:**
- Clear localStorage in browser DevTools
- Login again

## Post-Setup

### Recommended Next Steps
1. [ ] Read DOCUMENTATION.md
2. [ ] Explore the codebase
3. [ ] Try creating a course (as admin)
4. [ ] Try enrolling in a course (as student)
5. [ ] Test dark mode
6. [ ] Test responsive design
7. [ ] Review component structure
8. [ ] Plan your custom features

### Development Workflow
1. [ ] Set up Git repository
2. [ ] Create .gitignore (already included)
3. [ ] Make initial commit
4. [ ] Create development branch
5. [ ] Start building features

### Code Quality
- [ ] Run `npm run lint` to check code quality
- [ ] Fix any linting errors
- [ ] Add comments to complex code
- [ ] Follow existing code style

## Success! 🎉

If all checkboxes are checked, your setup is complete!

You can now:
- Start developing new features
- Customize the design
- Add more functionality
- Deploy to production

## Need Help?

1. Check QUICKSTART.md for quick reference
2. Read DOCUMENTATION.md for detailed info
3. Review code comments
4. Check console for error messages
5. Search for similar issues online

## Quick Reference

**Start Development:**
```bash
# Terminal 1
npm run server

# Terminal 2
npm run dev
```

**Test Credentials (after seeding):**
- Admin: admin@example.com / admin123
- Student: student@example.com / student123

**URLs:**
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

Happy Coding! 🚀
