import { useGetEnrollmentsQuery } from '../../store/slices/apiSlice';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardSkeleton } from '../../components/ui';
import { User, Mail, Calendar, TrendingUp } from 'lucide-react';

export const AdminStudents = () => {
  const { data: enrollments, isLoading } = useGetEnrollmentsQuery();

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="space-y-4">
          {[1, 2, 3].map(i => <CardSkeleton key={i} />)}
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Student Management</h1>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="text-left p-4">Student</th>
                <th className="text-left p-4">Course</th>
                <th className="text-left p-4">Progress</th>
                <th className="text-left p-4">Enrolled Date</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {enrollments?.map((enrollment) => (
                <tr key={enrollment._id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                        <User size={20} className="text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium">{enrollment.studentName || 'Student'}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {enrollment.studentEmail || 'email@example.com'}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{enrollment.courseTitle}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full"
                          style={{ width: `${enrollment.progress || 0}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{enrollment.progress || 0}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    {new Date(enrollment.enrolledAt).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      enrollment.completed
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}>
                      {enrollment.completed ? 'Completed' : 'In Progress'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardLayout>
  );
};
