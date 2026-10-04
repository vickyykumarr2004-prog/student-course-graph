import { clsx } from 'clsx';

export const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        'animate-pulse bg-gray-200 dark:bg-gray-700 rounded',
        className
      )}
      {...props}
    />
  );
};

export const CardSkeleton = () => (
  <div className="card">
    <Skeleton className="h-48 w-full mb-4" />
    <Skeleton className="h-6 w-3/4 mb-2" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-2/3" />
  </div>
);
