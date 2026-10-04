import { clsx } from 'clsx';

export const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
