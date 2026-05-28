import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import {
  Globe,
  LayoutDashboard,
  Layers3,
  Smartphone,
  BrainCircuit,
  Cloud,
} from 'lucide-react';

import styles from './CoursesCategoriesSection.module.css';

const courses = [
  {
    icon: <Globe size={26} />,
    title: 'Website Development',
    duration: '2 - 3 Months',
    level: 'Beginner to Intermediate',
    mode: 'Online / Offline',
    description:
      'Responsive website development with modern UI systems, SEO structure and deployment workflows.',
  },

  {
    icon: <LayoutDashboard size={26} />,
    title: 'Web Applications',
    duration: '3 - 5 Months',
    level: 'Intermediate',
    mode: 'Online / Offline',
    description:
      'Modern application architecture, dashboards, APIs and implementation-focused workflows.',
  },

  {
    icon: <Layers3 size={26} />,
    title: 'Progressive Web Apps',
    duration: '2 - 4 Months',
    level: 'Intermediate',
    mode: 'Online',
    description:
      'Installable modern web applications with offline support and app-like experiences.',
  },

  {
    icon: <Smartphone size={26} />,
    title: 'Hybrid Mobile Apps',
    duration: '3 - 5 Months',
    level: 'Intermediate',
    mode: 'Online / Offline',
    description:
      'Cross-platform Android and iOS application development using modern engineering frameworks.',
  },

  {
    icon: <BrainCircuit size={26} />,
    title: 'AI Tools & Productivity',
    duration: '1 - 2 Months',
    level: 'All Levels',
    mode: 'Online',
    description:
      'AI-assisted development workflows, automation support and engineering productivity systems.',
  },

  {
    icon: <Cloud size={26} />,
    title: 'Cloud & Deployment',
    duration: '1 - 2 Months',
    level: 'Intermediate',
    mode: 'Online',
    description:
      'Hosting, deployment, performance optimization and modern engineering infrastructure basics.',
  },
];

export default function CoursesCategoriesSection() {
  return (
      <section
        id='categories'
        className={styles.section}
      >
      <div className='container'>
        <SectionHeading
          badge='Training Programs'
          title='Structured Engineering'
          highlight='Learning Programs'
          description='Modern engineering-focused programs designed for implementation confidence, productivity and career-oriented technical growth.'
          center
        />

        <div className={styles.grid}>
          {courses.map((course, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.icon}>
                {course.icon}
              </div>

              <h3 className={styles.cardTitle}>
                {course.title}
              </h3>

              <div className={styles.meta}>
                <span>
                  {course.duration}
                </span>

                <span>
                  {course.level}
                </span>

                <span>
                  {course.mode}
                </span>
              </div>

              <p className={styles.cardDescription}>
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}