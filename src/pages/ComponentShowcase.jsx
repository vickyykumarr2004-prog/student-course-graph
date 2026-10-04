import { useState } from 'react';
import { Button, Card, Input, Modal } from '../components/ui';
import { BookOpen, Heart, Star, Trash2 } from 'lucide-react';

export const ComponentShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Component Showcase</h1>
          <p className="text-gray-600 dark:text-gray-400">
            All available UI components in the design system
          </p>
        </div>

        {/* Buttons */}
        <Card>
          <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="danger">Danger Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled</Button>
              <Button className="flex items-center space-x-2">
                <BookOpen size={20} />
                <span>With Icon</span>
              </Button>
            </div>
          </div>
        </Card>

        {/* Cards */}
        <Card>
          <h2 className="text-2xl font-semibold mb-4">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-blue-50 dark:bg-blue-900">
              <BookOpen className="text-blue-600 mb-2" size={32} />
              <h3 className="font-semibold mb-2">Card Title</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This is a card component with custom styling
              </p>
            </Card>
            <Card className="bg-green-50 dark:bg-green-900">
              <Heart className="text-green-600 mb-2" size={32} />
              <h3 className="font-semibold mb-2">Another Card</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cards are flexible and reusable
              </p>
            </Card>
            <Card className="bg-purple-50 dark:bg-purple-900">
              <Star className="text-purple-600 mb-2" size={32} />
              <h3 className="font-semibold mb-2">Third Card</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Use them for any content
              </p>
            </Card>
          </div>
        </Card>

        {/* Inputs */}
        <Card>
          <h2 className="text-2xl font-semibold mb-4">Input Fields</h2>
          <div className="space-y-4 max-w-md">
            <Input label="Text Input" placeholder="Enter text..." />
            <Input label="Email Input" type="email" placeholder="email@example.com" />
            <Input label="Password Input" type="password" placeholder="••••••••" />
            <Input label="With Error" error="This field is required" />
            <Input label="Disabled Input" disabled value="Disabled" />
          </div>
        </Card>

        {/* Modal */}
        <Card>
          <h2 className="text-2xl font-semibold mb-4">Modal</h2>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Example Modal"
          >
            <div className="space-y-4">
              <p>This is a modal component. It can contain any content.</p>
              <Input label="Name" placeholder="Enter your name" />
              <Input label="Email" type="email" placeholder="Enter your email" />
              <div className="flex justify-end space-x-2">
                <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsModalOpen(false)}>Submit</Button>
              </div>
            </div>
          </Modal>
        </Card>

        {/* Colors */}
        <Card>
          <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="h-20 bg-primary-600 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Primary</p>
            </div>
            <div>
              <div className="h-20 bg-green-600 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Success</p>
            </div>
            <div>
              <div className="h-20 bg-yellow-600 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Warning</p>
            </div>
            <div>
              <div className="h-20 bg-red-600 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Danger</p>
            </div>
          </div>
        </Card>

        {/* Typography */}
        <Card>
          <h2 className="text-2xl font-semibold mb-4">Typography</h2>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <h2 className="text-3xl font-bold">Heading 2</h2>
            <h3 className="text-2xl font-semibold">Heading 3</h3>
            <h4 className="text-xl font-semibold">Heading 4</h4>
            <p className="text-base">Body text - Regular paragraph</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Small text - Secondary information
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
