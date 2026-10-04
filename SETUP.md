# 🎓 Course Management System - Quick Setup

## ⚡ Quick Start (3 Steps)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Application
```bash
npm run dev
```

### 3. Open in Browser
Go to: **http://localhost:5173**

---

## 🔐 Test Accounts

**Admin/Educator:**
- Email: `admin@example.com`
- Password: `admin123`

**Student:**
- Email: `student@example.com`
- Password: `student123`

---

## ✨ Features

### Admin Features:
- ✅ Create and manage courses
- ✅ View student enrollments
- ✅ Analytics dashboard with charts
- ✅ Student progress tracking

### Student Features:
- ✅ Browse and enroll in courses
- ✅ Watch course videos
- ✅ Track learning progress
- ✅ Submit assignments
- ✅ View progress analytics

### UI Features:
- ✅ Dark/Light mode toggle
- ✅ Responsive design
- ✅ Modern interface
- ✅ Real-time updates

---

## 🛠️ Troubleshooting

### Issue: Dependencies won't install
```bash
npm install --legacy-peer-deps
```

### Issue: Port 5173 already in use
Close other Vite apps or change port in `vite.config.js`

### Issue: Page is blank
1. Check browser console for errors
2. Clear browser cache
3. Run `localStorage.clear()` in console
4. Refresh page

---

## 📱 Browser Support

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

---

## 💾 Data Storage

All data is stored in browser's **localStorage**:
- User accounts
- Courses
- Enrollments
- Progress

**Note:** Data is browser-specific and persists across sessions.

---

## 🎨 Customization

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: '#YOUR_COLOR',
  }
}
```

### Reset All Data
Open browser console and run:
```javascript
localStorage.clear();
location.reload();
```

---

## 📚 Tech Stack

- **Frontend:** React 19 + Vite
- **State:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** Lucide React
- **Storage:** localStorage

---

## 🚀 Deployment

See **DEPLOYMENT.md** for detailed deployment instructions to:
- Vercel
- Netlify
- GitHub Pages

---

## 📄 License

MIT License - Free to use for learning and projects

---

## 🆘 Need Help?

1. Check browser console for errors
2. Review DEPLOYMENT.md
3. Ensure all dependencies are installed
4. Try clearing localStorage

---

**Enjoy building with the Course Management System! 🎉**
