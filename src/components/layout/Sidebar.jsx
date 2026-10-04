import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  FileText, 
  BarChart,
  GraduationCap,
  ClipboardList
} from 'lucide-react';
import { clsx } from 'clsx';

const adminLinks = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/admin/courses', icon: BookOpen, label: 'Courses' },
  { to: '/admin/students', icon: Users, label: 'Students' },
  { to: '/admin/analytics', icon: BarChart, label: 'Analytics' },
];

const studentLinks = [
  { to: '/student', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/student/courses', icon: BookOpen, label: 'My Courses' },
  { to: '/student/browse', icon: GraduationCap, label: 'Browse Courses' },
  { to: '/student/assignments', icon: FileText, label: 'Assignments' },
  { to: '/student/progress', icon: BarChart, label: 'Progress' },
];

export const Sidebar = ({ role }) => {
  const location = useLocation();
  const links = role === 'admin' ? adminLinks : studentLinks;

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md h-[calc(100vh-4rem)] sticky top-16">
      <nav className="p-4 space-y-2">
        {links.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            className={clsx(
              'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
              location.pathname === to
                ? 'bg-primary-600 text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            )}
          >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
