import { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, Button } from '../../components/ui';
import { FileText, Upload, CheckCircle, Clock } from 'lucide-react';

export const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: 'React Fundamentals Project',
      course: 'Advanced React Development',
      dueDate: '2024-02-15',
      status: 'pending',
      description: 'Build a complete React application using hooks and context',
    },
    {
      id: 2,
      title: 'Database Design Assignment',
      course: 'MongoDB Masterclass',
      dueDate: '2024-02-10',
      status: 'submitted',
      description: 'Design a normalized database schema for an e-commerce platform',
    },
    {
      id: 3,
      title: 'API Development Task',
      course: 'Node.js Backend Development',
      dueDate: '2024-02-20',
      status: 'graded',
      grade: 95,
      description: 'Create RESTful APIs with authentication and authorization',
    },
  ]);

  const handleSubmit = (assignmentId) => {
    setAssignments(prev => 
      prev.map(a => 
        a.id === assignmentId 
          ? { ...a, status: 'submitted' }
          : a
      )
    );
    alert('Assignment submitted successfully!');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'submitted':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'graded':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock size={20} />;
      case 'submitted':
        return <Upload size={20} />;
      case 'graded':
        return <CheckCircle size={20} />;
      default:
        return <FileText size={20} />;
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">My Assignments</h1>

      <div className="space-y-4">
        {assignments.map((assignment) => (
          <Card key={assignment.id}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <FileText className="text-primary-600" size={24} />
                  <h3 className="text-xl font-semibold">{assignment.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Course: {assignment.course}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {assignment.description}
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                  </span>
                  {assignment.grade && (
                    <span className="font-semibold text-green-600">
                      Grade: {assignment.grade}/100
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end space-y-3">
                <span className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 ${getStatusColor(assignment.status)}`}>
                  {getStatusIcon(assignment.status)}
                  <span className="capitalize">{assignment.status}</span>
                </span>
                {assignment.status === 'pending' && (
                  <Button 
                    size="sm" 
                    className="flex items-center space-x-2"
                    onClick={() => handleSubmit(assignment.id)}
                  >
                    <Upload size={16} />
                    <span>Submit</span>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};
