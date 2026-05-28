import {
  BrainCircuit,
  Globe,
  Smartphone,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './FeaturedArticlesSection.module.css';

const articles = [
  {
    icon: <BrainCircuit size={26} />,
    category: 'AI Productivity',

    title:
      'AI-Assisted Engineering Workflows',

    description:
      'Understanding responsible AI-assisted workflows for modern engineering productivity.',
  },

  {
    icon: <Globe size={26} />,
    category: 'Web Development',

    title:
      'Modern Website Development Fundamentals',

    description:
      'Practical frontend engineering concepts and responsive implementation workflows.',
  },

  {
    icon: <Smartphone size={26} />,
    category: 'Hybrid Apps',

    title:
      'Cross-Platform Application Development',

    description:
      'Implementation-oriented overview of hybrid application engineering workflows.',
  },
];

export default function FeaturedArticlesSection() {
  return (
      <section
        id='featured'
        className={styles.section}
      >
      <div className='container'>

        <SectionHeading
          badge='Featured Insights'
          title='Engineering'
          highlight='Knowledge & Insights'
          description='Technical insights focused on practical engineering workflows, productivity and implementation-oriented learning.'
          center
        />

        <div className={styles.grid}>
          {articles.map(
            (article, index) => (
              <article
                key={index}
                className={styles.card}
              >
                <div className={styles.icon}>
                  {article.icon}
                </div>

                <span className={styles.category}>
                  {article.category}
                </span>

                <h3>{article.title}</h3>

                <p>{article.description}</p>
              </article>
            )
          )}
        </div>

      </div>
    </section>
  );
}