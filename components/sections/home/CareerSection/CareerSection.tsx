import {
  BriefcaseBusiness,
  FolderGit2,
  GraduationCap,
  FileText,
  BadgeCheck,
  LaptopMinimal,
  Users,
} from 'lucide-react';

import styles from './CareerSection.module.css';

const roadmap = [
  'Learning & Implementation',
  'Mini Projects & Workflows',
  'Portfolio Building',
  'GitHub Profile Setup',
  'Resume Preparation',
  'LinkedIn Optimization',
  'Mock Interviews',
  'Freelancing Guidance',
  'Placement Preparation',
];

const cards = [
  {
    icon: <FolderGit2 size={26} />,
    title: 'Portfolio Building',
    description:
      'Guidance for GitHub profiles, project hosting, resume creation and technical portfolio visibility.',
  },

  {
    icon: <GraduationCap size={26} />,
    title: 'Career Guidance',
    description:
      'Role-based guidance for development, AI tools, automation and engineering-focused career paths.',
  },

  {
    icon: <LaptopMinimal size={26} />,
    title: 'Freelancing Support',
    description:
      'Introduction to freelance workflows, communication practices and modern remote work opportunities.',
  },

  {
    icon: <BriefcaseBusiness size={26} />,
    title: 'Placement Preparation',
    description:
      'Interview preparation, productivity guidance, discipline, technical confidence and implementation readiness.',
  },
];

export default function CareerSection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.header}>
          <span className={styles.badge}>
            Career Growth Ecosystem
          </span>

          <h2 className={styles.title}>
            Career Growth &
            <span> Placement Guidance</span>
          </h2>

          <p className={styles.description}>
            TacoMines focuses on practical engineering growth,
            implementation confidence and career-oriented student
            development beyond traditional classroom training.
          </p>
        </div>

        <div className={styles.wrapper}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.roadmapCard}>
              <div className={styles.roadmapTop}>
                <Users size={22} />

                <h3>
                  Student Growth Roadmap
                </h3>
              </div>

              <div className={styles.timeline}>
                {roadmap.map((item, index) => (
                  <div
                    key={index}
                    className={styles.timelineItem}
                  >
                    <div className={styles.timelineIcon}>
                      <BadgeCheck size={16} />
                    </div>

                    <div className={styles.timelineContent}>
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            {cards.map((card, index) => (
              <div
                key={index}
                className={styles.card}
              >
                <div className={styles.cardIcon}>
                  {card.icon}
                </div>

                <h3 className={styles.cardTitle}>
                  {card.title}
                </h3>

                <p className={styles.cardDescription}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}