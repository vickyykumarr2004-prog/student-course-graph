import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Course from './models/Course.js';
import Enrollment from './models/Enrollment.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/course_management');
    console.log('📦 Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Course.deleteMany({});
    await Enrollment.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Create users
    const admin = await User.create({
      name: 'John Educator',
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin',
    });

    const student = await User.create({
      name: 'Jane Student',
      email: 'student@example.com',
      password: 'student123',
      role: 'student',
    });

    console.log('👥 Created users');

    // Create courses
    const courses = await Course.insertMany([
      {
        title: 'Complete React Development',
        description: 'Master React from basics to advanced concepts including hooks, context, and Redux',
        category: 'Programming',
        price: 49.99,
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
        instructor: admin._id,
        published: true,
        duration: '8 weeks',
        rating: 4.8,
        enrolledCount: 0,
      },
      {
        title: 'Node.js Backend Masterclass',
        description: 'Build scalable backend applications with Node.js, Express, and MongoDB',
        category: 'Programming',
        price: 59.99,
        thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400',
        instructor: admin._id,
        published: true,
        duration: '10 weeks',
        rating: 4.7,
        enrolledCount: 0,
      },
      {
        title: 'Full Stack Web Development',
        description: 'Complete guide to building modern web applications from frontend to backend',
        category: 'Programming',
        price: 79.99,
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
        instructor: admin._id,
        published: true,
        duration: '12 weeks',
        rating: 4.9,
        enrolledCount: 0,
      },
      {
        title: 'UI/UX Design Fundamentals',
        description: 'Learn the principles of user interface and user experience design',
        category: 'Design',
        price: 39.99,
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
        instructor: admin._id,
        published: true,
        duration: '6 weeks',
        rating: 4.6,
        enrolledCount: 0,
      },
      {
        title: 'MongoDB Database Design',
        description: 'Master NoSQL database design and optimization with MongoDB',
        category: 'Database',
        price: 44.99,
        thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400',
        instructor: admin._id,
        published: true,
        duration: '7 weeks',
        rating: 4.5,
        enrolledCount: 0,
      },
      {
        title: 'TypeScript for Beginners',
        description: 'Learn TypeScript and build type-safe JavaScript applications',
        category: 'Programming',
        price: 34.99,
        thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
        instructor: admin._id,
        published: true,
        duration: '5 weeks',
        rating: 4.7,
        enrolledCount: 0,
      },
    ]);

    console.log('📚 Created courses');

    // Create sample enrollments
    await Enrollment.create({
      student: student._id,
      course: courses[0]._id,
      progress: 45,
      completed: false,
    });

    await Enrollment.create({
      student: student._id,
      course: courses[1]._id,
      progress: 100,
      completed: true,
      completedAt: new Date(),
    });

    console.log('✅ Created enrollments');

    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📝 Test Credentials:');
    console.log('Admin: admin@example.com / admin123');
    console.log('Student: student@example.com / student123');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
