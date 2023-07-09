import { Radio, RadioGroup, Select, TextArea, TextInput } from '@/components';
import { SALARY_OPTIONS } from '@/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';

const schema = object().shape({
  department: string().required('*required'),
  dream: string()
    .required('Please tell us what your dreams are.')
    .min(10, 'Please write more than 10 characters.'),
  email: string()
    .required('Please write down your email.')
    .matches(/@naver\.com$/, 'Only @naver is allowed'),
  intro: string().required('Please write down your introduction.'),
  motivation: string().required('*required'),
  salary: string().required('*required'),
});
type FormValues = InferType<typeof schema>;

export default function Home() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto lg:w-1/3 md:w-1/2  my-16">
      <section className="border border-blue-800	 border-r-4 rounded-lg items-center p-10 bg-white">
        <h1 className="text-center font-bold text-2xl mb-10">Job Application Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RadioGroup
            className="mb-4"
            error={errors.department?.message}
            legend="What department do you want to work for?"
          >
            <Radio {...register('department')} value="sales">
              Sales
            </Radio>
            <Radio {...register('department')} value="marketing">
              Marketing
            </Radio>
            <Radio {...register('department')} value="accounting">
              Accounting
            </Radio>
            <Radio {...register('department')} value="customer">
              Customer Service
            </Radio>
          </RadioGroup>
          <RadioGroup
            className="mb-4"
            error={errors.motivation?.message}
            legend="What do you want to join this company?"
          >
            <Radio {...register('motivation')} value="money">
              I want money!
            </Radio>
            <Radio {...register('motivation')} value="comany">
              I love this company
            </Radio>
            <Radio {...register('motivation')} value="learn">
              I want to learn
            </Radio>
            <Radio {...register('motivation')} value="why">
              I don&apos;t know why
            </Radio>
          </RadioGroup>
          <div className="mb-6">
            <Select {...register('salary')} label="Salary" options={SALARY_OPTIONS} />
          </div>
          <div className="mb-6">
            <TextInput
              {...register('intro')}
              error={errors.intro?.message}
              label="Introduce yourself"
            />
          </div>
          <div className="mb-6">
            <TextArea
              {...register('dream')}
              error={errors.dream?.message}
              label="Tell us what your dreams are"
            />
          </div>
          <div className="mb-10">
            <TextInput {...register('email')} error={errors.email?.message} label="Email" />
          </div>
          <button className="border-2 border-black rounded-md py-2 w-full font-semibold bg-yellow-300">
            Give me this job
          </button>
        </form>
      </section>
    </div>
  );
}
