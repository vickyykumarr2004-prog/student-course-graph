# 🚀 Complete Installation Guide

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation Steps](#installation-steps)
3. [Configuration](#configuration)
4. [Running the Application](#running-the-application)
5. [Verification](#verification)
6. [Troubleshooting](#troubleshooting)
7. [Next Steps](#next-steps)

---

## Prerequisites

### Required Software

#### 1. Node.js (v18 or higher)
**Check if installed:**
```bash
node --version
```

**Install:**
- **Windows/Mac**: Download from [nodejs.org](https://nodejs.org/)
- **Linux**: 
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

#### 2. npm (comes with Node.js)
**Check if installed:**
```bash
npm --version
```

#### 3. MongoDB

**Option A: Local Installation**

**Windows:**
1. Download from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Run installer
3. Start MongoDB service:
   ```bash
   net start MongoDB
   ```

**Mac:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Create free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Use in `.env` file

#### 4. Git (Optional but recommended)
**Check if installed:**
```bash
git --version
```

**Install:**
- **Windows**: Download from [git-scm.com](https://git-scm.com/)
- **Mac**: `brew install git`
- **Linux**: `sudo apt-get install git`

---

## Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd course_management
```

### Step 2: Install Dependencies

```bash
npm install
```

**Expected output:**
```
added 500+ packages in 30s
```

**If you see errors:**
- Try: `npm install --legacy-peer-deps`
- Or: Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Step 3: Verify Installation

Check that key packages are installed:
```bash
npm list react react-dom express mongoose
```

---

## Configuration

### Step 1: Create Environment File

Create a file named `.env` in the root directory:

```bash
# Windows
type nul > .env

# Mac/Linux
touch .env
```

### Step 2: Add Environment Variables

Open `.env` and add:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/course_management

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Cloudinary (Optional - for future use)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Step 3: Configure MongoDB URI

**For Local MongoDB:**
```env
MONGODB_URI=mongodb://localhost:27017/course_management
```

**For MongoDB Atlas:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/course_management?retryWrites=true&w=majority
```

Replace:
- `username` with your MongoDB Atlas username
- `password` with your MongoDB Atlas password
- `cluster` with your cluster name

### Step 4: Generate JWT Secret

**Option A: Use a random string generator**
```bash
# Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Or use any random string
JWT_SECRET=my-super-secret-key-12345
```

---

## Running the Application

### Method 1: Two Terminals (Recommended for Development)

**Terminal 1 - Backend Server:**
```bash
npm run server
```

**Expected output:**
```
🚀 Server running on port 5000
✅ MongoDB Connected
```

**Terminal 2 - Frontend Dev Server:**
```bash
npm run dev
```

**Expected output:**
```
VITE v7.3.1  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Method 2: Production Build

```bash
# Build frontend
npm run build

# Start server (serves both API and built frontend)
npm run server
```

### Method 3: Using npm-run-all (Install first)

```bash
npm install -g npm-run-all
npm-run-all --parallel dev server
```

---

## Verification

### 1. Check Backend

Open browser and visit:
```
http://localhost:5000
```

**Expected response:**
```json
{
  "message": "Course Management API"
}
```

### 2. Check Frontend

Open browser and visit:
```
http://localhost:5173
```

**Expected:** Login page should load with styling

### 3. Check MongoDB Connection

**Terminal output should show:**
```
✅ MongoDB Connected
```

**Verify with MongoDB Compass:**
1. Open MongoDB Compass
2. Connect to `mongodb://localhost:27017`
3. Look for `course_management` database

### 4. Seed Database (Optional)

```bash
npm run seed
```

**Expected output:**
```
📦 Connected to MongoDB
🗑️  Cleared existing data
👥 Created users
📚 Created courses
✅ Created enrollments
🎉 Database seeded successfully!

📝 Test Credentials:
Admin: admin@example.com / admin123
Student: student@example.com / student123
```

---

## Troubleshooting

### Issue 1: "Cannot find module"

**Error:**
```
Error: Cannot find module 'express'
```

**Solution:**
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue 2: "Port already in use"

**Error:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution A - Change Port:**
Edit `.env`:
```env
PORT=5001
```

**Solution B - Kill Process:**

**Windows:**
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
lsof -ti:5000 | xargs kill
# or
sudo kill -9 $(sudo lsof -t -i:5000)
```

### Issue 3: "MongoDB connection failed"

**Error:**
```
❌ MongoDB Connection Error: connect ECONNREFUSED
```

**Solutions:**

**A. Check if MongoDB is running:**
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
sudo systemctl status mongod
```

**B. Try different connection string:**
```env
# Try with 127.0.0.1 instead of localhost
MONGODB_URI=mongodb://127.0.0.1:27017/course_management
```

**C. Check MongoDB logs:**
```bash
# Windows
C:\Program Files\MongoDB\Server\6.0\log\mongod.log

# Mac
/usr/local/var/log/mongodb/mongo.log

# Linux
/var/log/mongodb/mongod.log
```

### Issue 4: "CORS Error"

**Error in browser console:**
```
Access to fetch at 'http://localhost:5000/api/...' has been blocked by CORS policy
```

**Solution:**
1. Ensure backend is running
2. Check `server/index.js` has CORS enabled
3. Verify API URL in `src/store/slices/apiSlice.js`

### Issue 5: "JWT token invalid"

**Error:**
```
Token invalid
```

**Solution:**
1. Clear browser localStorage:
   - Open DevTools (F12)
   - Go to Application tab
   - Clear Storage
   - Refresh page
2. Login again

### Issue 6: Tailwind styles not working

**Solution:**
```bash
# Ensure Tailwind is installed
npm install -D tailwindcss postcss autoprefixer

# Regenerate config
npx tailwindcss init -p
```

### Issue 7: "Module not found: Can't resolve 'lucide-react'"

**Solution:**
```bash
npm install lucide-react
```

### Issue 8: Build fails

**Error:**
```
Build failed with errors
```

**Solution:**
```bash
# Clear cache
rm -rf node_modules/.vite
rm -rf dist

# Rebuild
npm run build
```

---

## Next Steps

### 1. Test the Application

**Create Admin Account:**
1. Go to http://localhost:5173/register
2. Fill in details
3. Select "Educator" role
4. Register

**Create Student Account:**
1. Go to http://localhost:5173/register
2. Fill in details
3. Select "Student" role
4. Register

**Test Admin Features:**
- Login as admin
- Create a course
- View analytics
- Check student list

**Test Student Features:**
- Login as student
- Browse courses
- Enroll in a course
- Check progress

### 2. Explore the Code

**Start with:**
1. `src/App.jsx` - Routing
2. `src/pages/` - Page components
3. `src/components/` - Reusable components
4. `server/routes/` - API endpoints

### 3. Read Documentation

- `README.md` - Overview
- `QUICKSTART.md` - Quick reference
- `DOCUMENTATION.md` - Detailed docs
- `FEATURES.md` - Feature list
- `PROJECT_STRUCTURE.md` - Code organization

### 4. Start Development

**Common tasks:**

**Add a new page:**
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation in `src/components/layout/Sidebar.jsx`

**Add a new API endpoint:**
1. Add route in `server/routes/`
2. Add endpoint in `src/store/slices/apiSlice.js`
3. Use in component with hook

**Customize styling:**
1. Edit `tailwind.config.js` for theme
2. Edit `src/index.css` for global styles
3. Use Tailwind classes in components

---

## Quick Reference

### Useful Commands

```bash
# Development
npm run dev          # Start frontend
npm run server       # Start backend
npm run seed         # Seed database

# Production
npm run build        # Build for production
npm run preview      # Preview build

# Maintenance
npm run lint         # Check code quality
npm install          # Install dependencies
npm update           # Update dependencies
```

### Important URLs

- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- API Docs: http://localhost:5000/api

### Test Credentials (after seeding)

- **Admin**: admin@example.com / admin123
- **Student**: student@example.com / student123

### File Locations

- Environment: `.env`
- Frontend: `src/`
- Backend: `server/`
- Components: `src/components/`
- Pages: `src/pages/`
- API: `src/store/slices/apiSlice.js`

---

## Getting Help

### Resources

1. **Documentation**: Check all `.md` files in root
2. **Code Comments**: Read inline comments
3. **Console Logs**: Check browser and terminal
4. **Error Messages**: Read carefully, they're helpful!

### Common Questions

**Q: How do I add a new feature?**
A: Check FEATURES.md for ideas, then follow the code structure

**Q: How do I deploy this?**
A: Check DOCUMENTATION.md deployment section

**Q: Can I use a different database?**
A: Yes, but you'll need to modify the models and connection

**Q: How do I customize the theme?**
A: Edit `tailwind.config.js` and `src/index.css`

---

## Success Checklist

- [ ] Node.js installed
- [ ] MongoDB running
- [ ] Dependencies installed
- [ ] .env file created
- [ ] Backend starts successfully
- [ ] Frontend starts successfully
- [ ] Can access login page
- [ ] Can register new user
- [ ] Can login
- [ ] Dashboard loads
- [ ] Dark mode works
- [ ] Can create course (admin)
- [ ] Can enroll in course (student)

**If all checked, you're ready to develop! 🎉**

---

Need more help? Check the other documentation files or review the code comments!
