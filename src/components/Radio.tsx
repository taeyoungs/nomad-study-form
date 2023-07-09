import { useRandomId } from '@/hooks';
import { CombineElementProps } from '@/types';
import { forwardRef } from 'react';

type RadioProps = CombineElementProps<'input'>;

function Radio({ children, ...props }: RadioProps, ref: React.Ref<any>) {
  const { id } = useRandomId(props.name ?? 'radio');

  return (
    <div className="flex items-center">
      <input className="mr-1" id={id} ref={ref} {...props} type="radio" />
      <label className="text-sm" htmlFor={id}>
        {children}
      </label>
    </div>
  );
}

export default forwardRef(Radio);
