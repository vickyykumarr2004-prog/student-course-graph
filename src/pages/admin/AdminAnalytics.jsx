import { useGetCoursesQuery, useGetEnrollmentsQuery } from '../../store/slices/apiSlice';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardSkeleton } from '../../components/ui';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';

export const AdminAnalytics = () => {
  const { data: courses, isLoading: coursesLoading } = useGetCoursesQuery();
  const { data: enrollments, isLoading: enrollmentsLoading } = useGetEnrollmentsQuery();

  const enrollmentTrend = [
    { month: 'Jan', enrollments: 45 },
    { month: 'Feb', enrollments: 52 },
    { month: 'Mar', enrollments: 61 },
    { month: 'Apr', enrollments: 70 },
    { month: 'May', enrollments: 85 },
    { month: 'Jun', enrollments: 95 },
  ];

  const categoryData = [
    { name: 'Programming', value: 35 },
    { name: 'Design', value: 25 },
    { name: 'Business', value: 20 },
    { name: 'Marketing', value: 20 },
  ];

  const COLORS = ['#0284c7', '#10b981', '#f59e0b', '#ef4444'];

  if (coursesLoading || enrollmentsLoading) {
    return (
      <DashboardLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map(i => <CardSkeleton key={i} />)}
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Analytics & Reports</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <h2 className="text-xl font-semibold mb-4">Enrollment Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={enrollmentTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <RechartsTooltip />
              <Legend />
              <Line type="monotone" dataKey="enrollments" stroke="#0284c7" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-4">Course Categories</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <RechartsTooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-semibold mb-4">Top Performing Courses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={courses?.slice(0, 6).map(c => ({
            name: c.title.substring(0, 20),
            students: c.enrolledCount || 0,
            rating: c.rating || 0,
          }))}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <RechartsTooltip />
            <Legend />
            <Bar dataKey="students" fill="#0284c7" />
            <Bar dataKey="rating" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </DashboardLayout>
  );
};
