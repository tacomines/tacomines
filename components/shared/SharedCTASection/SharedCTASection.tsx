import CTAButton from '@/components/shared/CTAButton/CTAButton';

import styles from './SharedCTASection.module.css';

interface SharedCTASectionProps {
  id?: string;

  badge: string;

  title: string;

  highlight?: string;

  description: string;

  primaryLabel?: string;

  primaryHref?: string;

  secondaryLabel?: string;

  secondaryHref?: string;
}

export default function SharedCTASection({
  id,

  badge,

  title,

  highlight,

  description,

  primaryLabel = 'Register Now',

  primaryHref = '/register',

  secondaryLabel = 'Contact Us',

  secondaryHref = '/contact',
}: SharedCTASectionProps) {
  return (
    <section
      id={id}
      className={styles.section}
    >
      <div className='container'>

        <div className={styles.card}>

          <span className={styles.badge}>
            {badge}
          </span>

          <h2 className={styles.title}>
            {title}

            {highlight && (
              <span>
                {' '}
                {highlight}
              </span>
            )}
          </h2>

          <p className={styles.description}>
            {description}
          </p>

          <div className={styles.actions}>

            <CTAButton
              href={primaryHref}
              label={primaryLabel}
            />

            <CTAButton
              href={secondaryHref}
              label={secondaryLabel}
              variant='secondary'
            />

          </div>

        </div>

      </div>
    </section>
  );
}