import { useGetEnrollmentsQuery } from '../../store/slices/apiSlice';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardSkeleton } from '../../components/ui';
import { Award, TrendingUp, Target, BookOpen } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend } from 'recharts';

export const StudentProgress = () => {
  const { data: enrollments, isLoading } = useGetEnrollmentsQuery();

  const skillsData = [
    { subject: 'React', score: 85 },
    { subject: 'Node.js', score: 75 },
    { subject: 'MongoDB', score: 80 },
    { subject: 'TypeScript', score: 70 },
    { subject: 'CSS', score: 90 },
  ];

  const progressData = [
    { week: 'Week 1', progress: 20 },
    { week: 'Week 2', progress: 35 },
    { week: 'Week 3', progress: 50 },
    { week: 'Week 4', progress: 65 },
    { week: 'Week 5', progress: 75 },
    { week: 'Week 6', progress: 85 },
  ];

  const stats = [
    { label: 'Courses Completed', value: enrollments?.filter(e => e.completed)?.length || 0, icon: Award, color: 'bg-green-500' },
    { label: 'In Progress', value: enrollments?.filter(e => !e.completed)?.length || 0, icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Avg Progress', value: '75%', icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'Learning Streak', value: '12 days', icon: Target, color: 'bg-orange-500' },
  ];

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
      <h1 className="text-3xl font-bold mb-8">My Progress</h1>

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <h2 className="text-xl font-semibold mb-4">Skills Assessment</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={skillsData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Skills" dataKey="score" stroke="#0284c7" fill="#0284c7" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <RechartsTooltip />
              <Legend />
              <Line type="monotone" dataKey="progress" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-semibold mb-4">Course Progress Details</h2>
        <div className="space-y-4">
          {enrollments?.map((enrollment) => (
            <div key={enrollment._id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{enrollment.courseTitle}</h3>
                <span className="text-sm font-medium">{enrollment.progress || 0}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                <div
                  className="bg-primary-600 h-3 rounded-full transition-all"
                  style={{ width: `${enrollment.progress || 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </DashboardLayout>
  );
};
