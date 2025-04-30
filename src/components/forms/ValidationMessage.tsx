import {cva} from 'class-variance-authority';

export default function ValidationMessage({
  type,
  message,
}: {
  type: 'error' | 'success';
  message: string;
}) {
  const validationMessage = cva('px-4 py-2 mb-6 font-normal border text-white', {
    variants: {
      type: {
        error: 'border-primary',
        success: 'border-white',
      },
    },
  });
  return <div className={validationMessage({type})}>{message}</div>;
}
