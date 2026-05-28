import styles from './StudentWorkflowSection.module.css';

import {
  BookOpen,
  BrainCircuit,
  FolderKanban,
  Rocket,
  UserRound,
  BadgeCheck,
  BriefcaseBusiness,
} from 'lucide-react';

const workflow = [
  {
    icon: <BookOpen size={24} />,
    title: 'Learn Fundamentals',
    description:
      'Understand engineering basics, tools and workflow foundations.',
  },

  {
    icon: <BrainCircuit size={24} />,
    title: 'AI-Assisted Learning',
    description:
      'Use modern AI tools for productivity and implementation support.',
  },

  {
    icon: <FolderKanban size={24} />,
    title: 'Practical Assignments',
    description:
      'Implementation-focused exercises and guided mini tasks.',
  },

  {
    icon: <Rocket size={24} />,
    title: 'Live Projects',
    description:
      'Experience real development workflow and project exposure.',
  },

  {
    icon: <UserRound size={24} />,
    title: 'Portfolio Building',
    description:
      'Create GitHub, LinkedIn, resume and technical visibility.',
  },

  {
    icon: <BadgeCheck size={24} />,
    title: 'Certification',
    description:
      'Verification-enabled certification and professional validation.',
  },

  {
    icon: <BriefcaseBusiness size={24} />,
    title: 'Career Guidance',
    description:
      'Placement, freelance and long-term growth direction support.',
  },
];

export default function StudentWorkflowSection() {
  return (
      <section
        id='workflow'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>

        <div className={styles.header}>
          <span className={styles.badge}>
            Student Development Workflow
          </span>

          <h2 className={styles.title}>
            Structured Engineering
            <span className='text-gradient'>
              {' '}Growth Journey
            </span>
          </h2>

          <p className={styles.description}>
            TacoMines focuses on practical
            implementation, productivity,
            portfolio building and career-oriented
            engineering growth.
          </p>
        </div>

        <div className={styles.timeline}>
          {workflow.map((item, index) => (
            <div
              key={index}
              className={styles.step}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>
                  {item.icon}
                </div>

                {index !== workflow.length - 1 && (
                  <div className={styles.line} />
                )}
              </div>

              <div className={styles.content}>
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}