import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  progress: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
  enrolledAt: { type: Date, default: Date.now },
  completedAt: { type: Date },
  assignmentSubmissions: [{
    assignmentId: mongoose.Schema.Types.ObjectId,
    fileUrl: String,
    submittedAt: Date,
    grade: Number,
  }],
  quizResults: [{
    quizId: mongoose.Schema.Types.ObjectId,
    score: Number,
    completedAt: Date,
  }],
});

export default mongoose.model('Enrollment', enrollmentSchema);
