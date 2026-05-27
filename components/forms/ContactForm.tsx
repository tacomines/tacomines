'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

import {
  showSuccessToast,
  showErrorToast,
} from '@/lib/toast';

import styles from './ContactForm.module.css';

const schema = z.object({
  name: z.string().min(2),

  email: z.string().email(),

  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
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
      'Message sent successfully!'
    );

      reset();
    } catch {
    showErrorToast(
      'Something went wrong.'
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
          placeholder='Your Name'
          {...register('name')}
        />

        {errors.name && (
          <p>{errors.name.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <input
          type='email'
          placeholder='Your Email'
          {...register('email')}
        />

        {errors.email && (
          <p>{errors.email.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <textarea
          placeholder='Message'
          rows={5}
          {...register('message')}
        />

        {errors.message && (
          <p>{errors.message.message}</p>
        )}
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
      >
        {isSubmitting
          ? 'Sending...'
          : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;