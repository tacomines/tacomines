'use client';

import { useState } from 'react';

import CTAButton from '@/components/shared/CTAButton/CTAButton';

import {
  User,
  Phone,
  Mail,
  GraduationCap,
  BookOpen,
  MonitorSmartphone,
  MessageSquare,
} from 'lucide-react';

import styles from './RegisterFormSection.module.css';

export default function RegisterFormSection() {
  const [formData, setFormData] =
    useState({
      fullName: '',
      mobile: '',
      email: '',
      qualification: '',
      course: '',
      mode: '',
      message: '',
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
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
      'Registration submitted successfully.'
    );
  };

  return (
      <section
        id='register'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>
        <div className={styles.wrapper}>
          {/* LEFT */}
          <div className={styles.left}>
            <span className={styles.badge}>
              Registration Form
            </span>

            <h2 className={styles.title}>
              Join TacoMines
              <span> Training Programs</span>
            </h2>

            <p className={styles.description}>
              Fill the registration form to
              connect with TacoMines and
              receive guidance about suitable
              learning programs, workflows and
              engineering training opportunities.
            </p>

            <div className={styles.points}>
              <div className={styles.point}>
                Practical Engineering Learning
              </div>

              <div className={styles.point}>
                AI-Assisted Workflows
              </div>

              <div className={styles.point}>
                Career-Oriented Guidance
              </div>

              <div className={styles.point}>
                Portfolio & Project Support
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.formCard}>
            <form
              onSubmit={handleSubmit}
              className={styles.form}
            >
              {/* FULL NAME */}
              <div className={styles.field}>
                <label>
                  Full Name
                </label>

                <div className={styles.inputWrapper}>
                  <User size={18} />

                  <input
                    type='text'
                    name='fullName'
                    placeholder='Enter your full name'
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

              {/* MOBILE */}
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

              {/* EMAIL */}
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

              {/* QUALIFICATION */}
              <div className={styles.field}>
                <label>
                  Qualification
                </label>

                <div className={styles.inputWrapper}>
                  <GraduationCap size={18} />

                  <input
                    type='text'
                    name='qualification'
                    placeholder='Ex: 12th, B.Tech, Degree'
                    value={
                      formData.qualification
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />
                </div>
              </div>

              {/* COURSE */}
              <div className={styles.field}>
                <label>
                  Interested Course
                </label>

                <div className={styles.inputWrapper}>
                  <BookOpen size={18} />

                  <select
                    name='course'
                    value={
                      formData.course
                    }
                    onChange={
                      handleChange
                    }
                    required
                  >
                    <option value=''>
                      Select Course
                    </option>

                    <option>
                      Website Development
                    </option>

                    <option>
                      Web Applications
                    </option>

                    <option>
                      Progressive Web Apps
                    </option>

                    <option>
                      Hybrid Mobile Apps
                    </option>

                    <option>
                      AI Tools & Productivity
                    </option>

                    <option>
                      Cloud & Deployment
                    </option>
                  </select>
                </div>
              </div>

              {/* MODE */}
              <div className={styles.field}>
                <label>
                  Learning Mode
                </label>

                <div className={styles.inputWrapper}>
                  <MonitorSmartphone size={18} />

                  <select
                    name='mode'
                    value={
                      formData.mode
                    }
                    onChange={
                      handleChange
                    }
                    required
                  >
                    <option value=''>
                      Select Mode
                    </option>

                    <option>
                      Online
                    </option>

                    <option>
                      Offline
                    </option>

                    <option>
                      Workshop
                    </option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
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
                    rows={5}
                    placeholder='Write your learning interests or goals'
                    value={
                      formData.message
                    }
                    onChange={
                      handleChange
                    }
                  />
                </div>
              </div>

              <CTAButton
                label='Submit Registration'
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