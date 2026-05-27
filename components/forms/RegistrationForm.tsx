'use client';

import { useForm } from 'react-hook-form';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import styles from './RegistrationForm.module.css';

import {
  showSuccessToast,
  showErrorToast,
} from '@/lib/toast';

const schema = z.object({
  fullName: z.string().min(2),

  email: z.string().email(),

  phone: z.string().min(10),

  course: z.string().min(2),
});

type FormData = z.infer<typeof schema>;

const RegistrationForm = () => {
  const {
    register,

    handleSubmit,

    reset,

    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (
    data: FormData
  ) => {
    try {
      console.log(data);

      showSuccessToast(
        'Registration submitted successfully!'
      );

      reset();
    } catch {
      showErrorToast(
        'Registration failed.'
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <div className={styles.field}>
        <input
          type='text'
          placeholder='Full Name'
          {...register('fullName')}
        />

        {errors.fullName && (
          <p>
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <input
          type='email'
          placeholder='Email Address'
          {...register('email')}
        />

        {errors.email && (
          <p>{errors.email.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <input
          type='text'
          placeholder='Phone Number'
          {...register('phone')}
        />

        {errors.phone && (
          <p>{errors.phone.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <input
          type='text'
          placeholder='Course Interested'
          {...register('course')}
        />

        {errors.course && (
          <p>{errors.course.message}</p>
        )}
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
      >
        {isSubmitting
          ? 'Submitting...'
          : 'Register Now'}
      </button>
    </form>
  );
};

export default RegistrationForm;