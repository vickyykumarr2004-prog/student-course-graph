import { useGetEnrollmentsQuery } from '../../store/slices/apiSlice';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardSkeleton } from '../../components/ui';
import { BookOpen, Clock, Award, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as RechartsTooltip } from 'recharts';

export const StudentDashboard = () => {
  const { data: enrollments, isLoading } = useGetEnrollmentsQuery();

  const stats = [
    { label: 'Enrolled Courses', value: enrollments?.length || 0, icon: BookOpen, color: 'bg-blue-500' },
    { label: 'In Progress', value: enrollments?.filter(e => !e.completed)?.length || 0, icon: Clock, color: 'bg-yellow-500' },
    { label: 'Completed', value: enrollments?.filter(e => e.completed)?.length || 0, icon: Award, color: 'bg-green-500' },
    { label: 'Avg Progress', value: '75%', icon: TrendingUp, color: 'bg-purple-500' },
  ];

  const chartData = [
    { name: 'Completed', value: enrollments?.filter(e => e.completed)?.length || 0 },
    { name: 'In Progress', value: enrollments?.filter(e => !e.completed)?.length || 0 },
  ];

  const COLORS = ['#10b981', '#f59e0b'];

  if (isLoading) {
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
      <h1 className="text-3xl font-bold mb-8">My Learning Dashboard</h1>

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {chartData.some(d => d.value > 0) && (
          <Card>
            <h2 className="text-xl font-semibold mb-4">Course Progress</h2>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        )}

        <Card>
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          {enrollments && enrollments.length > 0 ? (
            <div className="space-y-4">
              {enrollments.slice(0, 5).map((enrollment) => (
                <div key={enrollment._id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{enrollment.courseTitle}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Progress: {enrollment.progress || 0}%
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">{enrollment.progress || 0}%</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-center py-8">
              No enrolled courses yet. Browse courses to get started!
            </p>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
};
