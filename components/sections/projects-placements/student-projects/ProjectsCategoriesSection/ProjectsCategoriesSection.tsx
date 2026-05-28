import {
  Globe,
  LayoutDashboard,
  Smartphone,
  BrainCircuit,
  Cloud,
  MonitorSmartphone,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './ProjectsCategoriesSection.module.css';

const categories = [
  {
    icon: <Globe size={26} />,
    title: 'Responsive Websites',
    description:
      'Modern responsive business and portfolio website implementation projects.',
  },

  {
    icon: <LayoutDashboard size={26} />,
    title: 'Web Applications',
    description:
      'Workflow-oriented dashboard and engineering application projects.',
  },

  {
    icon: <Smartphone size={26} />,
    title: 'Hybrid Mobile Apps',
    description:
      'Cross-platform application projects designed for practical exposure.',
  },

  {
    icon: <BrainCircuit size={26} />,
    title: 'AI-Assisted Workflows',
    description:
      'Productivity-oriented engineering workflows using AI-assisted tools.',
  },

  {
    icon: <Cloud size={26} />,
    title: 'Cloud & Deployment',
    description:
      'Deployment-focused engineering projects and hosting workflow exposure.',
  },

  {
    icon: <MonitorSmartphone size={26} />,
    title: 'Progressive Web Apps',
    description:
      'Installable web application projects with modern implementation workflows.',
  },
];

export default function ProjectsCategoriesSection() {
  return (
    <section className={styles.section}>
      <div className='container'>

        <SectionHeading
          badge='Project Categories'
          title='Implementation-Oriented'
          highlight='Project Experience'
          description='Students gain practical engineering exposure through structured implementation-oriented projects and guided workflows.'
          center
        />

        <div className={styles.grid}>
          {categories.map(
            (item, index) => (
              <div
                key={index}
                className={styles.card}
              >
                <div className={styles.icon}>
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}