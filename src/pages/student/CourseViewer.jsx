import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, Button } from '../../components/ui';
import { ArrowLeft, Play, FileText, CheckCircle, Pause } from 'lucide-react';

export const CourseViewer = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Mock course content with real video URLs
  const courseContent = {
    title: 'Course Content',
    modules: [
      {
        id: 1,
        title: 'Introduction',
        lessons: [
          { 
            id: 1, 
            title: 'Welcome to the Course', 
            duration: '5:30', 
            completed: true,
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: 'Get started with the course and learn what you will build.'
          },
          { 
            id: 2, 
            title: 'Course Overview', 
            duration: '8:15', 
            completed: true,
            videoUrl: 'https://www.youtube.com/embed/Tn6-PIqc4UM',
            description: 'Overview of all the topics covered in this course.'
          },
        ],
      },
      {
        id: 2,
        title: 'Getting Started',
        lessons: [
          { 
            id: 3, 
            title: 'Setup Your Environment', 
            duration: '12:45', 
            completed: false,
            videoUrl: 'https://www.youtube.com/embed/RGOj5yH7evk',
            description: 'Learn how to set up your development environment.'
          },
          { 
            id: 4, 
            title: 'First Project', 
            duration: '15:20', 
            completed: false,
            videoUrl: 'https://www.youtube.com/embed/8JJ101D3knE',
            description: 'Build your first project from scratch.'
          },
        ],
      },
      {
        id: 3,
        title: 'Advanced Topics',
        lessons: [
          { 
            id: 5, 
            title: 'Best Practices', 
            duration: '10:30', 
            completed: false,
            videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk',
            description: 'Learn industry best practices and coding standards.'
          },
          { 
            id: 6, 
            title: 'Real World Examples', 
            duration: '18:45', 
            completed: false,
            videoUrl: 'https://www.youtube.com/embed/UB1O30fR-EE',
            description: 'See real-world applications and examples.'
          },
        ],
      },
    ],
  };

  // Set first lesson as default
  const currentLesson = selectedLesson || courseContent.modules[0].lessons[0];

  const handlePlayLesson = (lesson) => {
    setSelectedLesson(lesson);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <Button 
          variant="secondary" 
          onClick={() => navigate('/student/courses')}
          className="flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>Back to My Courses</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Content Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <h2 className="text-xl font-semibold mb-4">Course Content</h2>
            <div className="space-y-4">
              {courseContent.modules.map((module) => (
                <div key={module.id}>
                  <h3 className="font-semibold mb-2">{module.title}</h3>
                  <div className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => handlePlayLesson(lesson)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-left transition-colors ${
                          currentLesson.id === lesson.id ? 'bg-primary-100 dark:bg-primary-900' : ''
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {lesson.completed ? (
                            <CheckCircle size={20} className="text-green-500" />
                          ) : (
                            <Play size={20} className="text-primary-600" />
                          )}
                          <div>
                            <p className="text-sm font-medium">{lesson.title}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {lesson.duration}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Video Player Area */}
        <div className="lg:col-span-2">
          <Card>
            {isPlaying ? (
              <div className="aspect-video bg-black rounded-lg mb-4 overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`${currentLesson.videoUrl}?autoplay=1`}
                  title={currentLesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ) : (
              <div 
                className="aspect-video bg-gray-900 rounded-lg mb-4 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors"
                onClick={togglePlay}
              >
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary-700 transition-colors">
                    <Play size={40} className="ml-1" />
                  </div>
                  <p className="text-xl font-semibold">Click to Play Video</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {currentLesson.title}
                  </p>
                </div>
              </div>
            )}
            
            <h2 className="text-2xl font-bold mb-2">{currentLesson.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Duration: {currentLesson.duration}
            </p>

            <div className="flex space-x-4 mb-6">
              <Button 
                onClick={togglePlay}
                className="flex items-center space-x-2"
              >
                {isPlaying ? (
                  <>
                    <Pause size={20} />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play size={20} />
                    <span>Play Video</span>
                  </>
                )}
              </Button>
              <Button variant="secondary" className="flex items-center space-x-2">
                <FileText size={20} />
                <span>Resources</span>
              </Button>
            </div>

            <div className="border-t dark:border-gray-700 pt-4">
              <h3 className="font-semibold mb-2">About this lesson</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {currentLesson.description}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};
