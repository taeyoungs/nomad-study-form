import { CombineElementProps } from '@/types';

interface RadioGroupBaseProps {
  error?: string;
  legend: string;
}

type RadioGroupProps = CombineElementProps<'fieldset', RadioGroupBaseProps>;

function RadioGroup({ children, error, legend, ...props }: RadioGroupProps) {
  return (
    <fieldset {...props}>
      <div className="flex items-center mb-2 ">
        <legend className="text-lg">{legend}</legend>
        {error && <span className="ml-1 text-sm text-red-500">{error}</span>}
      </div>
      <div className="flex flex-col gap-1">{children}</div>
    </fieldset>
  );
}

export default RadioGroup;
