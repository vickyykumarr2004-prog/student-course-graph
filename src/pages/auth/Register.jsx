import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Input, Button, Card } from '../../components/ui';
import { useRegisterMutation } from '../../store/slices/apiSlice';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData).unwrap();
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      alert(err?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <BookOpen className="mx-auto text-primary-600 mb-4" size={48} />
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Join our learning platform
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <div>
            <label className="block text-sm font-medium mb-2">Role</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
            >
              <option value="student">Student</option>
              <option value="admin">Educator</option>
            </select>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Register'}
          </Button>
        </form>

        <p className="text-center mt-6 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 hover:underline">
            Login here
          </Link>
        </p>
      </Card>
    </div>
  );
};
