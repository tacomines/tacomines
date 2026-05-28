'use client';

import { useState } from 'react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import {
  ChevronDown,
} from 'lucide-react';

import styles from './CoursesFAQSection.module.css';

const faqs = [
  {
    question:
      'Who can join TacoMines training programs?',

    answer:
      'Students, beginners, graduates and working professionals interested in modern engineering workflows and practical implementation can join TacoMines programs.',
  },

  {
    question:
      'Are the courses focused only on theory?',

    answer:
      'No. TacoMines focuses mainly on practical implementation, guided projects, AI-assisted workflows and productivity-oriented engineering learning.',
  },

  {
    question:
      'Do you provide online and offline training?',

    answer:
      'Yes. TacoMines supports online classes, offline classroom sessions, workshops and guided project-oriented learning formats.',
  },

  {
    question:
      'Will students work on practical projects?',

    answer:
      'Yes. Guided implementation tasks, mini projects and practical engineering workflows are part of the learning process.',
  },

  {
    question:
      'Do you provide career guidance and portfolio support?',

    answer:
      'Yes. TacoMines focuses on GitHub profiles, LinkedIn optimization, resume building and career-oriented technical guidance.',
  },

  {
    question:
      'Is AI used during the training process?',

    answer:
      'Yes. Students are guided on responsible AI-assisted engineering workflows designed to improve productivity and implementation efficiency.',
  },
];

export default function CoursesFAQSection() {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(
      activeIndex === index
        ? null
        : index
    );
  };

  return (
      <section
        id='faq'
        className={styles.section}
      >
      <div className='container'>

        <SectionHeading
          badge='Frequently Asked Questions'
          title='Common Questions'
          highlight='About Training'
          description='Answers to commonly asked questions about TacoMines training programs, workflows and learning structure.'
          center
        />

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                activeIndex === index
                  ? styles.active
                  : ''
              }`}
            >
              <button
                className={styles.question}
                onClick={() =>
                  toggleFAQ(index)
                }
              >
                <span>
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={
                    styles.icon
                  }
                />
              </button>

              <div
                className={styles.answer}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}