import {
  BrainCircuit,
  FolderKanban,
  BriefcaseBusiness,
  MonitorSmartphone,
  UserRoundCog,
  ShieldCheck,
} from 'lucide-react';

import styles from './WhyChooseSection.module.css';
import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

const features = [
  {
    icon: <BrainCircuit size={24} />,
    title: 'AI-Assisted Learning',
    description:
      'Learn modern engineering workflows using AI tools with practical productivity-focused guidance.',
  },
  {
    icon: <FolderKanban size={24} />,
    title: 'Practical Projects',
    description:
      'Implementation-focused learning with guided mini projects and real workflow exposure.',
  },
  {
    icon: <BriefcaseBusiness size={24} />,
    title: 'Career-Oriented Training',
    description:
      'Programs focused on employability, technical confidence and professional development.',
  },
  {
    icon: <MonitorSmartphone size={24} />,
    title: 'Online & Offline Classes',
    description:
      'Flexible training models designed for both classroom and remote learning.',
  },
  {
    icon: <UserRoundCog size={24} />,
    title: 'Portfolio Building',
    description:
      'Guidance for GitHub profiles, resume preparation and public technical presence.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Mentorship & Guidance',
    description:
      'Continuous support throughout learning, implementation and career growth journey.',
  },
];

const WhyChooseSection = () => {
  return (
      <section
        id='why'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>
      <div className={styles.heading}>
        <span className={styles.badge}>
          Why TacoMines
        </span>

        <h2>
          Why Students Choose
          {' '}
          <span>TacoMines</span>
        </h2>

        <p>
          Industry-oriented AI-assisted
          engineering training designed
          for practical skill development
          and career growth.
        </p>
      </div>

        <div className={styles.grid}>
          {features.map((item) => (
            <div
              key={item.title}
              className={styles.card}
            >
              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;