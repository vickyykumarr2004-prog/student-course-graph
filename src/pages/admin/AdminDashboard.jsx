import { useGetCoursesQuery, useGetEnrollmentsQuery } from '../../store/slices/apiSlice';
import { Card, CardSkeleton } from '../../components/ui';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { BookOpen, Users, TrendingUp, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

export const AdminDashboard = () => {
  const { data: courses, isLoading: coursesLoading } = useGetCoursesQuery();
  const { data: enrollments, isLoading: enrollmentsLoading } = useGetEnrollmentsQuery();

  const stats = [
    { label: 'Total Courses', value: courses?.length || 0, icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Total Enrollments', value: enrollments?.length || 0, icon: Users, color: 'bg-green-500' },
    { label: 'Active Courses', value: courses?.filter(c => c.published)?.length || 0, icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'Completions', value: enrollments?.filter(e => e.completed)?.length || 0, icon: Award, color: 'bg-orange-500' },
  ];

  const chartData = courses?.slice(0, 5).map(course => ({
    name: course.title.substring(0, 20) + '...',
    students: course.enrolledCount || 0,
  })) || [];

  if (coursesLoading || enrollmentsLoading) {
    return (
      <DashboardLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => <CardSkeleton key={i} />)}
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="flex items-center space-x-4">
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="text-white" size={24} />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {chartData.length > 0 && (
        <Card>
          <h2 className="text-xl font-semibold mb-4">Course Enrollment Overview</h2>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <RechartsTooltip />
                <Bar dataKey="students" fill="#0284c7" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}
    </DashboardLayout>
  );
};
