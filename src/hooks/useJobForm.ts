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

function useJobForm() {
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return { ...form, onSubmit: form.handleSubmit(onSubmit) };
}

export default useJobForm;
