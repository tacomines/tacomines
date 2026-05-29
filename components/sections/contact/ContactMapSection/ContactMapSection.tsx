import Link from 'next/link';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import {
  MapPinned,
  ArrowUpRight,
} from 'lucide-react';

import styles from './ContactMapSection.module.css';

export default function ContactMapSection() {
  return (
      <section
        id='map'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>

        <SectionHeading
          badge='Visit TacoMines'
          title='Training & Support'
          highlight='Location'
          description='Connect with TacoMines for engineering training guidance, workshops and implementation-oriented learning support.'
          center
        />

        <div className={styles.mapCard}>
          <iframe
            src='https://www.google.com/maps?q=Hyderabad,Telangana,India&output=embed'
            loading='lazy'
            allowFullScreen
            referrerPolicy='no-referrer-when-downgrade'
            className={styles.map}
          />

          <div className={styles.overlayCard}>
            <div className={styles.locationTop}>
              <div className={styles.icon}>
                <MapPinned size={22} />
              </div>

              <div>
                <h3>TacoMines</h3>

                <p>
                  Hyderabad, Telangana,
                  India
                </p>
              </div>
            </div>

            <Link
              href='https://maps.google.com'
              target='_blank'
              className={styles.directionButton}
            >
              Open Directions

              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}