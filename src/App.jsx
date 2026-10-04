import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ErrorBoundary } from './components/layout/ErrorBoundary';
import { ProtectedRoute } from './components/layout/ProtectedRoute';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminCourses } from './pages/admin/AdminCourses';
import { AdminStudents } from './pages/admin/AdminStudents';
import { AdminAnalytics } from './pages/admin/AdminAnalytics';
import { StudentDashboard } from './pages/student/StudentDashboard';
import { MyCourses } from './pages/student/MyCourses';
import { BrowseCourses } from './pages/student/BrowseCourses';
import { StudentAssignments } from './pages/student/StudentAssignments';
import { StudentProgress } from './pages/student/StudentProgress';
import { CourseViewer } from './pages/student/CourseViewer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ThemeInitializer = () => {
  const { mode } = useSelector((state) => state.theme);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);
  
  return null;
};

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <ThemeInitializer />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/courses"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminCourses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/students"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminStudents />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/analytics"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminAnalytics />
                </ProtectedRoute>
              }
            />
            
            {/* Student Routes */}
            <Route
              path="/student"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/courses"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <MyCourses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/browse"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <BrowseCourses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/assignments"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentAssignments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/progress"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentProgress />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/course/:courseId"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <CourseViewer />
                </ProtectedRoute>
              }
            />
            
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
