import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import {
  BrainCircuit,
  FolderKanban,
  BriefcaseBusiness,
  BadgeCheck,
  Rocket,
  BookOpen,
} from 'lucide-react';

import styles from './CoursesMethodologySection.module.css';

const workflow = [
  {
    icon: <BookOpen size={22} />,
    title: 'Fundamentals',
    description:
      'Understand engineering basics, workflow systems and implementation foundations.',
  },

  {
    icon: <BrainCircuit size={22} />,
    title: 'AI-Assisted Learning',
    description:
      'Use modern AI tools responsibly for productivity and engineering support.',
  },

  {
    icon: <FolderKanban size={22} />,
    title: 'Practical Assignments',
    description:
      'Implementation-focused guided exercises and mini engineering tasks.',
  },

  {
    icon: <Rocket size={22} />,
    title: 'Guided Projects',
    description:
      'Real-world workflow exposure through structured practical projects.',
  },

  {
    icon: <BadgeCheck size={22} />,
    title: 'Portfolio Development',
    description:
      'GitHub, LinkedIn, resume and technical profile building guidance.',
  },

  {
    icon: <BriefcaseBusiness size={22} />,
    title: 'Career Guidance',
    description:
      'Career-oriented mentoring, placement support and productivity mindset.',
  },
];

const highlights = [
  {
    title: 'Modern Engineering Workflow',
    description:
      'Training designed around real-world engineering practices instead of only theoretical learning.',
  },

  {
    title: 'Practical Implementation',
    description:
      'Focus on implementation confidence, guided development and workflow understanding.',
  },

  {
    title: 'AI Productivity Systems',
    description:
      'Responsible AI-assisted workflows to improve productivity and technical learning.',
  },

  {
    title: 'Structured Technical Growth',
    description:
      'Long-term development approach including projects, portfolio and career preparation.',
  },
];

export default function CoursesMethodologySection() {
  return (
      <section
        id='methodology'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>

        <SectionHeading
          badge='Learning Methodology'
          title='Structured Engineering'
          highlight='Learning Workflow'
          description='TacoMines focuses on implementation-oriented learning workflows designed for practical engineering growth and productivity.'
          center
        />

        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.timeline}>
              {workflow.map((item, index) => (
                <div
                  key={index}
                  className={styles.step}
                >
                  <div className={styles.icon}>
                    {item.icon}
                  </div>

                  <div className={styles.content}>
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            {highlights.map(
              (item, index) => (
                <div
                  key={index}
                  className={styles.card}
                >
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}