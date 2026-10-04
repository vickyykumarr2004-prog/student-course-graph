import { clsx } from 'clsx';

export const Input = ({ label, error, className, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <input
        className={clsx(
          'w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600',
          'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100',
          'focus:outline-none focus:ring-2 focus:ring-primary-500',
          error && 'border-red-500',
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
