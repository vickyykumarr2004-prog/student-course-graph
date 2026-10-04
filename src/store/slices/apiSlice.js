import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

// Local storage keys
const STORAGE_KEYS = {
  USERS: 'course_users',
  COURSES: 'course_courses',
  ENROLLMENTS: 'course_enrollments',
};

// Helper functions
const getFromStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const saveToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const generateId = () => Date.now().toString() + Math.random().toString(36).substr(2, 9);

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Course', 'User', 'Enrollment'],
  endpoints: (builder) => ({
    // Auth
    login: builder.mutation({
      queryFn: async ({ email, password }) => {
        const users = getFromStorage(STORAGE_KEYS.USERS);
        const user = users.find(u => u.email === email && u.password === password);
        
        if (!user) {
          return { error: { status: 401, data: { message: 'Invalid credentials' } } };
        }
        
        const token = 'local_token_' + generateId();
        return { data: { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } } };
      },
    }),
    
    register: builder.mutation({
      queryFn: async (userData) => {
        const users = getFromStorage(STORAGE_KEYS.USERS);
        
        if (users.find(u => u.email === userData.email)) {
          return { error: { status: 400, data: { message: 'User already exists' } } };
        }
        
        const newUser = { ...userData, id: generateId() };
        users.push(newUser);
        saveToStorage(STORAGE_KEYS.USERS, users);
        
        return { data: { message: 'User created successfully' } };
      },
    }),
    
    // Courses
    getCourses: builder.query({
      async queryFn() {
        await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async
        const courses = getFromStorage(STORAGE_KEYS.COURSES);
        return { data: courses };
      },
      providesTags: ['Course'],
    }),
    
    getCourse: builder.query({
      queryFn: ({ id }) => {
        const courses = getFromStorage(STORAGE_KEYS.COURSES);
        const course = courses.find(c => c._id === id);
        return course ? { data: course } : { error: { status: 404, data: { message: 'Course not found' } } };
      },
      providesTags: ['Course'],
    }),
    
    createCourse: builder.mutation({
      queryFn: (course) => {
        const courses = getFromStorage(STORAGE_KEYS.COURSES);
        const newCourse = {
          ...course,
          _id: generateId(),
          published: true,
          enrolledCount: 0,
          rating: 4.5,
          duration: '8 weeks',
        };
        courses.push(newCourse);
        saveToStorage(STORAGE_KEYS.COURSES, courses);
        return { data: newCourse };
      },
      invalidatesTags: ['Course'],
    }),
    
    updateCourse: builder.mutation({
      queryFn: ({ id, ...updates }) => {
        const courses = getFromStorage(STORAGE_KEYS.COURSES);
        const index = courses.findIndex(c => c._id === id);
        
        if (index === -1) {
          return { error: { status: 404, data: { message: 'Course not found' } } };
        }
        
        courses[index] = { ...courses[index], ...updates };
        saveToStorage(STORAGE_KEYS.COURSES, courses);
        return { data: courses[index] };
      },
      invalidatesTags: ['Course'],
    }),
    
    deleteCourse: builder.mutation({
      queryFn: (id) => {
        const courses = getFromStorage(STORAGE_KEYS.COURSES);
        const filtered = courses.filter(c => c._id !== id);
        saveToStorage(STORAGE_KEYS.COURSES, filtered);
        return { data: { message: 'Course deleted' } };
      },
      invalidatesTags: ['Course'],
    }),
    
    // Enrollments
    enrollCourse: builder.mutation({
      queryFn: (courseId, { getState }) => {
        const user = getState().auth.user;
        const enrollments = getFromStorage(STORAGE_KEYS.ENROLLMENTS);
        const courses = getFromStorage(STORAGE_KEYS.COURSES);
        
        if (enrollments.find(e => e.student === user.id && e.course === courseId)) {
          return { error: { status: 400, data: { message: 'Already enrolled' } } };
        }
        
        const course = courses.find(c => c._id === courseId);
        const newEnrollment = {
          _id: generateId(),
          student: user.id,
          course: courseId,
          courseTitle: course?.title || 'Course',
          courseThumbnail: course?.thumbnail,
          progress: 0,
          completed: false,
          enrolledAt: new Date().toISOString(),
        };
        
        enrollments.push(newEnrollment);
        saveToStorage(STORAGE_KEYS.ENROLLMENTS, enrollments);
        
        // Update course enrolled count
        const courseIndex = courses.findIndex(c => c._id === courseId);
        if (courseIndex !== -1) {
          courses[courseIndex].enrolledCount = (courses[courseIndex].enrolledCount || 0) + 1;
          saveToStorage(STORAGE_KEYS.COURSES, courses);
        }
        
        return { data: newEnrollment };
      },
      invalidatesTags: ['Enrollment', 'Course'],
    }),
    
    getEnrollments: builder.query({
      async queryFn(_, { getState }) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async
        const user = getState().auth.user;
        const enrollments = getFromStorage(STORAGE_KEYS.ENROLLMENTS);
        const userEnrollments = user?.role === 'admin' ? enrollments : enrollments.filter(e => e.student === user?.id);
        return { data: userEnrollments };
      },
      providesTags: ['Enrollment'],
    }),
    
    // Assignments (mock)
    submitAssignment: builder.mutation({
      queryFn: () => ({ data: { message: 'Assignment submitted' } }),
    }),
    
    getAssignments: builder.query({
      queryFn: () => ({ data: [] }),
    }),
    
    // Quizzes (mock)
    submitQuiz: builder.mutation({
      queryFn: () => ({ data: { message: 'Quiz submitted' } }),
    }),
    
    getQuizzes: builder.query({
      queryFn: () => ({ data: [] }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetCoursesQuery,
  useGetCourseQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
  useEnrollCourseMutation,
  useGetEnrollmentsQuery,
  useSubmitAssignmentMutation,
  useGetAssignmentsQuery,
  useSubmitQuizMutation,
  useGetQuizzesQuery,
} = apiSlice;
