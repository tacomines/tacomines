'use client';

import { useState } from 'react';

import {
  ChevronDown,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './ClassesFAQSection.module.css';

const faqs = [
  {
    question:
      'Who can join TacoMines classes and workshops?',

    answer:
      'Students, beginners, graduates and working professionals interested in practical engineering workflows and implementation-focused learning can join.',
  },

  {
    question:
      'Are online classes interactive?',

    answer:
      'Yes. Online sessions are designed with guided implementation, mentorship and practical workflow-oriented learning support.',
  },

  {
    question:
      'Do workshops include practical implementation?',

    answer:
      'Yes. TacoMines workshops mainly focus on practical exposure, engineering workflows and implementation-oriented learning.',
  },

  {
    question:
      'Will students work on projects?',

    answer:
      'Yes. Guided projects and implementation-oriented workflows are integrated into the learning process.',
  },

  {
    question:
      'Are AI tools used during training?',

    answer:
      'Yes. Students are guided on responsible AI-assisted engineering workflows designed for productivity and practical learning.',
  },
];

export default function ClassesFAQSection() {
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
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>

        <SectionHeading
          badge='Frequently Asked Questions'
          title='Common Questions'
          highlight='About Classes'
          description='Answers to common questions about TacoMines classes, workshops and implementation-focused learning workflows.'
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