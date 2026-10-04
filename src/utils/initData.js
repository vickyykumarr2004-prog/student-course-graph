// Initialize sample data in localStorage
export const initializeSampleData = () => {
  const STORAGE_KEYS = {
    USERS: 'course_users',
    COURSES: 'course_courses',
    ENROLLMENTS: 'course_enrollments',
  };

  // Check if data already exists
  if (localStorage.getItem(STORAGE_KEYS.USERS)) {
    return; // Data already initialized
  }

  // Sample users
  const users = [
    {
      id: 'admin1',
      name: 'John Educator',
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin',
    },
    {
      id: 'student1',
      name: 'Jane Student',
      email: 'student@example.com',
      password: 'student123',
      role: 'student',
    },
  ];

  // Sample courses
  const courses = [
    {
      _id: 'course1',
      title: 'Complete React Development',
      description: 'Master React from basics to advanced concepts including hooks, context, and Redux',
      category: 'Programming',
      price: 49.99,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
      published: true,
      duration: '8 weeks',
      rating: 4.8,
      enrolledCount: 1,
    },
    {
      _id: 'course2',
      title: 'Node.js Backend Masterclass',
      description: 'Build scalable backend applications with Node.js, Express, and MongoDB',
      category: 'Programming',
      price: 59.99,
      thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400',
      published: true,
      duration: '10 weeks',
      rating: 4.7,
      enrolledCount: 1,
    },
    {
      _id: 'course3',
      title: 'Full Stack Web Development',
      description: 'Complete guide to building modern web applications from frontend to backend',
      category: 'Programming',
      price: 79.99,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
      published: true,
      duration: '12 weeks',
      rating: 4.9,
      enrolledCount: 0,
    },
    {
      _id: 'course4',
      title: 'UI/UX Design Fundamentals',
      description: 'Learn the principles of user interface and user experience design',
      category: 'Design',
      price: 39.99,
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
      published: true,
      duration: '6 weeks',
      rating: 4.6,
      enrolledCount: 0,
    },
    {
      _id: 'course5',
      title: 'MongoDB Database Design',
      description: 'Master NoSQL database design and optimization with MongoDB',
      category: 'Database',
      price: 44.99,
      thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400',
      published: true,
      duration: '7 weeks',
      rating: 4.5,
      enrolledCount: 0,
    },
  ];

  // Sample enrollments
  const enrollments = [
    {
      _id: 'enroll1',
      student: 'student1',
      course: 'course1',
      courseTitle: 'Complete React Development',
      courseThumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
      progress: 45,
      completed: false,
      enrolledAt: new Date().toISOString(),
    },
    {
      _id: 'enroll2',
      student: 'student1',
      course: 'course2',
      courseTitle: 'Node.js Backend Masterclass',
      courseThumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400',
      progress: 100,
      completed: true,
      enrolledAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];

  // Save to localStorage
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
  localStorage.setItem(STORAGE_KEYS.ENROLLMENTS, JSON.stringify(enrollments));

  console.log('✅ Sample data initialized in localStorage');
  console.log('Test credentials:');
  console.log('Admin: admin@example.com / admin123');
  console.log('Student: student@example.com / student123');
};
