'use client';

import { useState } from 'react';

import Link from 'next/link';

import CTAButton from '@/components/shared/CTAButton/CTAButton';

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  MessageSquare,
  User,
} from 'lucide-react';

import styles from './ContactInfoSection.module.css';

export default function ContactInfoSection() {
  const [formData, setFormData] =
    useState({
      fullName: '',
      email: '',
      mobile: '',
      message: '',
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log(formData);

    alert(
      'Inquiry submitted successfully.'
    );
  };

  return (
      <section
        id='info'
        className={styles.section}
      >
      <div className='container'>
        <div className={styles.wrapper}>
          {/* LEFT */}
          <div className={styles.left}>
            <span className={styles.badge}>
              Contact Information
            </span>

            <h2 className={styles.title}>
              Let’s Start a
              <span> Conversation</span>
            </h2>

            <p className={styles.description}>
              Reach TacoMines for course
              information, engineering learning
              guidance and technical training
              discussions.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <Mail size={22} />
                </div>

                <div>
                  <h3>Email</h3>

                  <p>
                    info@tacomines.com
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <Phone size={22} />
                </div>

                <div>
                  <h3>Phone</h3>

                  <p>
                    +91 90637 25514
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <MapPin size={22} />
                </div>

                <div>
                  <h3>Location</h3>

                  <p>
                    Hyderabad, Telangana,
                    India
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <Clock3 size={22} />
                </div>

                <div>
                  <h3>Support Timing</h3>

                  <p>
                    Monday - Saturday
                    <br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            <Link
              href='https://wa.me/919063725514'
              target='_blank'
              className={styles.whatsappButton}
            >
              <MessageSquare size={20} />

              WhatsApp Support
            </Link>
          </div>

          {/* RIGHT */}
          <div className={styles.formCard}>
            <form
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <div className={styles.field}>
                <label>
                  Full Name
                </label>

                <div className={styles.inputWrapper}>
                  <User size={18} />

                  <input
                    type='text'
                    name='fullName'
                    placeholder='Enter your name'
                    value={
                      formData.fullName
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label>
                  Email Address
                </label>

                <div className={styles.inputWrapper}>
                  <Mail size={18} />

                  <input
                    type='email'
                    name='email'
                    placeholder='Enter email address'
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label>
                  Mobile Number
                </label>

                <div className={styles.inputWrapper}>
                  <Phone size={18} />

                  <input
                    type='tel'
                    name='mobile'
                    placeholder='Enter mobile number'
                    value={
                      formData.mobile
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label>
                  Message
                </label>

                <div
                  className={`${styles.inputWrapper} ${styles.textareaWrapper}`}
                >
                  <MessageSquare size={18} />

                  <textarea
                    name='message'
                    rows={6}
                    placeholder='Write your inquiry'
                    value={
                      formData.message
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />
                </div>
              </div>
              <CTAButton
                label='Submit Inquiry'
                type='submit'
                fullWidth
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}