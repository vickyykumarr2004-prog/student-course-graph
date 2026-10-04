import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail: { type: String },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  published: { type: Boolean, default: true },
  duration: { type: String, default: '8 weeks' },
  rating: { type: Number, default: 4.5 },
  enrolledCount: { type: Number, default: 0 },
  lectures: [{
    title: String,
    videoUrl: String,
    duration: String,
    resources: [String],
  }],
  assignments: [{
    title: String,
    description: String,
    dueDate: Date,
  }],
  quizzes: [{
    title: String,
    questions: [{
      question: String,
      options: [String],
      correctAnswer: Number,
    }],
  }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Course', courseSchema);
