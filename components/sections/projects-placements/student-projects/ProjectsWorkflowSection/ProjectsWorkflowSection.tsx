import {
  ClipboardList,
  PenTool,
  Code2,
  Rocket,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './ProjectsWorkflowSection.module.css';

const workflow = [
  {
    icon: <ClipboardList size={26} />,
    title: 'Project Planning',
    description:
      'Students learn structured planning workflows and requirement understanding.',
  },

  {
    icon: <PenTool size={26} />,
    title: 'UI & Workflow Design',
    description:
      'Practical exposure to interface structure and workflow-oriented engineering design.',
  },

  {
    icon: <Code2 size={26} />,
    title: 'Implementation',
    description:
      'Hands-on implementation experience with guided engineering workflows.',
  },

  {
    icon: <Rocket size={26} />,
    title: 'Deployment & Optimization',
    description:
      'Exposure to deployment workflows, optimization and practical productivity systems.',
  },
];

export default function ProjectsWorkflowSection() {
  return (
    <section className={styles.section}>
      <div className='container'>

        <SectionHeading
          badge='Project Workflow'
          title='Structured'
          highlight='Implementation Workflow'
          description='Projects are designed to help students understand practical engineering workflows from planning to deployment.'
          center
        />

        <div className={styles.grid}>
          {workflow.map(
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