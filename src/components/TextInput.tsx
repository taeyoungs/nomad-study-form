import { CombineElementProps } from '@/types';
import { forwardRef } from 'react';

interface TextInputBaseProps {
  error?: string;
  label?: string;
}

type TextInputProps = CombineElementProps<'input', TextInputBaseProps>;

function TextInput({ error, label, ...props }: TextInputProps, ref: React.Ref<any>) {
  const outline = error ? 'outline-red-500' : 'outline-blue-800';
  const borderColor = error ? 'border-red-500' : 'border-black';

  return (
    <div className="flex flex-col">
      {label && <label className="text-lg mb-1">{label}</label>}
      <input
        className={`${outline} border-2 ${borderColor} rounded-md p-2 text-sm`}
        type="text"
        {...props}
        ref={ref}
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
}

export default forwardRef(TextInput);
