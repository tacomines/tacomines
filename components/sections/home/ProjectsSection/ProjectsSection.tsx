import Image from 'next/image';

import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Layers3,
} from 'lucide-react';

import styles from './ProjectsSection.module.css';

const projects = [
  {
    icon: <Globe size={24} />,
    title: 'Website Development',
    image: '/images/projects/website-development.webp',
    description:
      'Responsive business websites designed with modern UI, performance optimization and SEO-friendly architecture.',
  },

  {
    icon: <LayoutDashboard size={24} />,
    title: 'Web Applications',
    image: '/images/projects/web-application.webp',
    description:
      'Modern dashboards and workflow systems focused on practical implementation and real-time user interaction.',
  },

  {
    icon: <Layers3 size={24} />,
    title: 'Progressive Web Apps',
    image: '/images/projects/pwa-development.webp',
    description:
      'Installable web applications with offline support, responsive layouts and app-like user experiences.',
  },

  {
    icon: <Smartphone size={24} />,
    title: 'Cross Platform Hybrid Apps',
    image: '/images/projects/hybrid-mobile-app.webp',
    description:
      'Hybrid mobile applications developed for Android, iOS and web platforms using modern frameworks.',
  },
];

export default function ProjectsSection() {
  return (
      <section
        id='projects'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>
        <div className={styles.header}>
          <span className={styles.badge}>
            Projects & Implementation
          </span>

          <h2 className={styles.title}>
            Practical Engineering
            <span> Projects & Workflows</span>
          </h2>

          <p className={styles.description}>
            Students work on guided implementation-oriented projects
            designed to improve practical engineering understanding,
            workflow experience and development confidence.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.icon}>
                  {project.icon}
                </div>

                <h3 className={styles.cardTitle}>
                  {project.title}
                </h3>

                <p className={styles.cardDescription}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}