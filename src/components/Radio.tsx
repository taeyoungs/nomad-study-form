import { CombineElementProps } from '@/types';
import { forwardRef, useId } from 'react';

type RadioProps = CombineElementProps<'input'>;

function Radio({ children, ...props }: RadioProps, ref: React.Ref<any>) {
  const ramdomId = useId();
  const radioId = props.name + ramdomId;

  return (
    <div className="flex items-center">
      <input className="mr-1" id={radioId} ref={ref} {...props} type="radio" />
      <label className="text-sm" htmlFor={radioId}>
        {children}
      </label>
    </div>
  );
}

export default forwardRef(Radio);
