import express from 'express';
import Enrollment from '../models/Enrollment.js';
import Course from '../models/Course.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Get user enrollments
router.get('/', protect, async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ student: req.user._id })
      .populate('course', 'title description thumbnail price');
    
    const formattedEnrollments = enrollments.map(e => ({
      _id: e._id,
      courseId: e.course._id,
      courseTitle: e.course.title,
      courseThumbnail: e.course.thumbnail,
      progress: e.progress,
      completed: e.completed,
      enrolledAt: e.enrolledAt,
    }));
    
    res.json(formattedEnrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Enroll in course
router.post('/', protect, async (req, res) => {
  try {
    const { courseId } = req.body;
    
    const existingEnrollment = await Enrollment.findOne({
      student: req.user._id,
      course: courseId,
    });
    
    if (existingEnrollment) {
      return res.status(400).json({ message: 'Already enrolled' });
    }

    const enrollment = await Enrollment.create({
      student: req.user._id,
      course: courseId,
    });

    await Course.findByIdAndUpdate(courseId, {
      $inc: { enrolledCount: 1 },
    });

    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update progress
router.patch('/:id/progress', protect, async (req, res) => {
  try {
    const { progress } = req.body;
    const enrollment = await Enrollment.findOneAndUpdate(
      { _id: req.params.id, student: req.user._id },
      { progress, completed: progress >= 100 },
      { new: true }
    );
    res.json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
