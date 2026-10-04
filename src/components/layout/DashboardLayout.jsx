import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { useSelector } from 'react-redux';

export const DashboardLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex">
        <Sidebar role={user?.role} />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
