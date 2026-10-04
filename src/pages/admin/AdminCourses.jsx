import { useState } from 'react';
import { useGetCoursesQuery, useCreateCourseMutation, useDeleteCourseMutation } from '../../store/slices/apiSlice';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, Button, Modal, Input, CardSkeleton } from '../../components/ui';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

export const AdminCourses = () => {
  const { data: courses, isLoading } = useGetCoursesQuery();
  const [createCourse] = useCreateCourseMutation();
  const [deleteCourse] = useDeleteCourseMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    thumbnail: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCourse(formData).unwrap();
      setIsModalOpen(false);
      setFormData({ title: '', description: '', category: '', price: '', thumbnail: '' });
    } catch (err) {
      alert('Failed to create course');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this course?')) {
      try {
        await deleteCourse(id).unwrap();
      } catch (err) {
        alert('Failed to delete course');
      }
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
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Courses</h1>
        <Button onClick={() => setIsModalOpen(true)} className="flex items-center space-x-2">
          <Plus size={20} />
          <span>Create Course</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses?.map((course) => (
          <Card key={course._id}>
            <img
              src={course.thumbnail || 'https://via.placeholder.com/400x200'}
              alt={course.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {course.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-primary-600">
                ${course.price}
              </span>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <Eye size={18} />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Course">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Course Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
              rows="4"
              required
            />
          </div>
          <Input
            label="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          />
          <Input
            label="Price"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
          <Input
            label="Thumbnail URL"
            value={formData.thumbnail}
            onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
          />
          <Button type="submit" className="w-full">Create Course</Button>
        </form>
      </Modal>
    </DashboardLayout>
  );
};
