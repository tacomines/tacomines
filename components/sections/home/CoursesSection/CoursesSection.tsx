import styles from './CoursesSection.module.css';

import {
  Globe,
  MonitorSmartphone,
  Smartphone,
  Brain,
  Cloud,
  Briefcase,
} from 'lucide-react';

const courses = [
  {
    icon: <Globe size={28} />,
    title: 'Website Development',
    description:
      'Learn modern responsive website development using real-world workflows and AI-assisted productivity tools.',
  },

  {
    icon: <MonitorSmartphone size={28} />,
    title: 'Web Application Development',
    description:
      'Build scalable web applications with frontend, backend and deployment-oriented implementation training.',
  },

  {
    icon: <Smartphone size={28} />,
    title: 'Hybrid Mobile Apps',
    description:
      'Develop cross-platform mobile applications with responsive UI systems and production-focused architecture.',
  },

  {
    icon: <Brain size={28} />,
    title: 'AI Tools & Productivity',
    description:
      'Learn AI-assisted engineering workflows, automation tools and productivity-focused modern development practices.',
  },

  {
    icon: <Cloud size={28} />,
    title: 'Cloud Hosting & Security',
    description:
      'Understand deployment workflow, hosting infrastructure, performance optimization and security fundamentals.',
  },

  {
    icon: <Briefcase size={28} />,
    title: 'Career & Portfolio Guidance',
    description:
      'Build technical portfolios, GitHub profiles, LinkedIn presence and career-oriented professional visibility.',
  },
];

export default function CoursesSection() {
  return (
    <section className={styles.section}>
      <div className='container'>

        <div className={styles.header}>
          <span className={styles.badge}>
            Courses & Programs
          </span>

          <h2 className={styles.title}>
            Industry-Oriented
            <span className='text-gradient'>
              {' '}Training Programs
            </span>
          </h2>

          <p className={styles.description}>
            Structured AI-assisted engineering training programs
            designed for practical implementation, productivity,
            portfolio development and career growth.
          </p>
        </div>

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