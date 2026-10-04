import { useGetEnrollmentsQuery } from '../../store/slices/apiSlice';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, Button, CardSkeleton } from '../../components/ui';
import { Play, FileText, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const MyCourses = () => {
  const { data: enrollments, isLoading } = useGetEnrollmentsQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => <CardSkeleton key={i} />)}
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">My Courses</h1>

      {enrollments?.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You haven't enrolled in any courses yet
          </p>
          <Button onClick={() => navigate('/student/browse')}>
            Browse Courses
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrollments?.map((enrollment) => (
            <Card key={enrollment._id} className="flex flex-col">
              <img
                src={enrollment.courseThumbnail || 'https://via.placeholder.com/400x200'}
                alt={enrollment.courseTitle}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{enrollment.courseTitle}</h3>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span className="font-medium">{enrollment.progress || 0}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all"
                    style={{ width: `${enrollment.progress || 0}%` }}
                  />
                </div>
              </div>

              <div className="flex space-x-2 mt-auto">
                <Button 
                  className="flex-1 flex items-center justify-center space-x-2"
                  onClick={() => navigate(`/student/course/${enrollment.course}`)}
                >
                  <Play size={16} />
                  <span>Continue</span>
                </Button>
                <button className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FileText size={20} />
                </button>
                {enrollment.completed && (
                  <button className="p-2 border-2 border-green-500 text-green-500 rounded-lg">
                    <Award size={20} />
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};
