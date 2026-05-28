'use client';

import { useForm } from 'react-hook-form';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import CTAButton from '@/components/shared/CTAButton/CTAButton';

import styles from './RegistrationForm.module.css';

import {
  showSuccessToast,
  showErrorToast,
} from '@/lib/toast';

const schema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name is required'),

  email: z
    .string()
    .email('Enter valid email'),

  phone: z
    .string()
    .min(
      10,
      'Enter valid phone number'
    ),

  course: z
    .string()
    .min(2, 'Course is required'),
});

type FormData = z.infer<
  typeof schema
>;

const RegistrationForm = () => {
  const {
    register,

    handleSubmit,

    reset,

    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<FormData>({
    resolver:
      zodResolver(schema),
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
      {/* FULL NAME */}

      <div className={styles.field}>
        <input
          type='text'
          placeholder='Full Name'
          {...register('fullName')}
        />

        {errors.fullName && (
          <p className={styles.error}>
            {
              errors.fullName
                .message
            }
          </p>
        )}
      </div>

      {/* EMAIL */}

      <div className={styles.field}>
        <input
          type='email'
          placeholder='Email Address'
          {...register('email')}
        />

        {errors.email && (
          <p className={styles.error}>
            {
              errors.email
                .message
            }
          </p>
        )}
      </div>

      {/* PHONE */}

      <div className={styles.field}>
        <input
          type='text'
          placeholder='Phone Number'
          {...register('phone')}
        />

        {errors.phone && (
          <p className={styles.error}>
            {
              errors.phone
                .message
            }
          </p>
        )}
      </div>

      {/* COURSE */}

      <div className={styles.field}>
        <input
          type='text'
          placeholder='Course Interested'
          {...register('course')}
        />

        {errors.course && (
          <p className={styles.error}>
            {
              errors.course
                .message
            }
          </p>
        )}
      </div>

      <CTAButton
        label={
          isSubmitting
            ? 'Submitting...'
            : 'Register Now'
        }
        type='submit'
        fullWidth
      />
    </form>
  );
};

export default RegistrationForm;