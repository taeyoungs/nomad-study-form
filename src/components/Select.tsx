import { useRandomId } from '@/hooks';
import { CombineElementProps } from '@/types';
import { forwardRef } from 'react';

interface SelectBaseProps {
  label: string;
  options: Record<string, string>;
}

type SelectProps = CombineElementProps<'select', SelectBaseProps>;

function Select({ label, options: optionsProp, ...props }: SelectProps, ref: React.Ref<any>) {
  const { id } = useRandomId(props.name ?? 'select');
  const options = Object.entries(optionsProp);

  return (
    <div className="flex flex-col">
      <label className="mb-1 text-lg" htmlFor={id}>
        {label}
      </label>
      <select
        className="border-2 border-black pl-2 rounded-md outline-blue-800"
        id={id}
        {...props}
        ref={ref}
      >
        {options.map(([key, value]) => (
          <option key={value} value={value}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
