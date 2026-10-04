import { useGetCoursesQuery, useEnrollCourseMutation } from '../../store/slices/apiSlice';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, Button, CardSkeleton } from '../../components/ui';
import { Clock, Users, Star } from 'lucide-react';

export const BrowseCourses = () => {
  const { data: courses, isLoading } = useGetCoursesQuery();
  const [enrollCourse] = useEnrollCourseMutation();

  const handleEnroll = async (courseId) => {
    try {
      await enrollCourse(courseId).unwrap();
      alert('Successfully enrolled!');
    } catch (err) {
      alert(err?.data?.message || 'Enrollment failed');
    }
  };

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
      <h1 className="text-3xl font-bold mb-8">Browse Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses?.filter(c => c.published).map((course) => (
          <Card key={course._id} className="flex flex-col">
            <img
              src={course.thumbnail || 'https://via.placeholder.com/400x200'}
              alt={course.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
              {course.description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center space-x-1">
                <Clock size={16} />
                <span>{course.duration || '8 weeks'}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users size={16} />
                <span>{course.enrolledCount || 0} students</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <span>{course.rating || '4.5'}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary-600">
                ${course.price}
              </span>
              <Button onClick={() => handleEnroll(course._id)}>
                Enroll Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};
