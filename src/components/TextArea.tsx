import { CombineElementProps } from '@/types';
import { forwardRef } from 'react';

const RESIZE_TYPE = {
  both: 'resize',
  horizontal: 'resize-x',
  none: 'resize-none',
  vertical: 'resize-y',
};

interface TextAreaBaseProps {
  error?: string;
  label?: string;
  resize?: 'both' | 'horizontal' | 'none' | 'vertical';
}

type TextAreaProps = CombineElementProps<'textarea', TextAreaBaseProps>;

function TextArea(
  { error, label, resize: resizeProp = 'none', ...props }: TextAreaProps,
  ref: React.Ref<any>
) {
  const resize = RESIZE_TYPE[resizeProp];
  const outline = error ? 'outline-red-500' : 'outline-blue-800';
  const borderColor = error ? 'border-red-500' : 'border-black';

  return (
    <div className="flex flex-col">
      {label && <label className="text-lg mb-1">{label}</label>}
      <textarea
        className={`${resize} ${outline} ${borderColor} h-28 border-2 rounded-md`}
        {...props}
        ref={ref}
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
}

export default forwardRef(TextArea);
