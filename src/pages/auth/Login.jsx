import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BookOpen } from 'lucide-react';
import { Input, Button, Card } from '../../components/ui';
import { useLoginMutation } from '../../store/slices/apiSlice';
import { setCredentials } from '../../store/slices/authSlice';

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(formData).unwrap();
      dispatch(setCredentials(result));
      navigate(result.user.role === 'admin' ? '/admin' : '/student');
    } catch (err) {
      alert(err?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <BookOpen className="mx-auto text-primary-600 mb-4" size={48} />
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Sign in to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <p className="text-center mt-6 text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary-600 hover:underline">
            Register here
          </Link>
        </p>
      </Card>
    </div>
  );
};
