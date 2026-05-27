import Link from 'next/link';
import ScrollToTopLink from './ScrollToTopLink';

import {
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';

import styles from './Footer.module.css';

import Container from './Container';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.topSection}>
          {/* COLUMN 1 */}
          <div className={styles.brandSection}>
            <h2 className={styles.logo}>
              TacoMines
            </h2>

            <p className={styles.description}>
              AI-assisted engineering academy
              focused on practical software,
              AI, IoT and automation training
              through industry-oriented
              academic programs, workshops
              and guided student projects.
            </p>
          </div>

          {/* COLUMN 2 */}
          <div className={styles.linksSection}>
            <h3 className={styles.title}>
              Quick Links
            </h3>

            <ul>
              <li>
              <ScrollToTopLink href='/'>
                Home
              </ScrollToTopLink>
              </li>

              <li>
                <ScrollToTopLink href='/about'>
                  About
                </ScrollToTopLink>
              </li>

              <li>
                <ScrollToTopLink href='/register'>
                  Register
                </ScrollToTopLink>
              </li>

              <li>
                <ScrollToTopLink href='/contact'>
                  Contact
                </ScrollToTopLink>
              </li>

              <li>
                <ScrollToTopLink href='/blog'>
                  Blog
                </ScrollToTopLink>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className={styles.linksSection}>
            <h3 className={styles.title}>
              Programs
            </h3>

            <ul>
              <li>
                <Link href='/classes-workshops/online-classes'>
                  Online Classes
                </Link>
              </li>

              <li>
                <Link href='/classes-workshops/offline-classes'>
                  Offline Classes
                </Link>
              </li>

              <li>
                <Link href='/classes-workshops/workshops'>
                  Workshops
                </Link>
              </li>

              <li>
                <Link href='/projects-placements/student-projects'>
                  Student Projects
                </Link>
              </li>

              <li>
                <Link href='/projects-placements/placements'>
                  Placements
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div className={styles.contactSection}>
            <h3 className={styles.title}>
              Contact
            </h3>

            <div className={styles.contactInfo}>
              <p>info@tacomines.com</p>

              <p>+91 90637 25514</p>

              <p>
                Hyderabad, Telangana,
                India
              </p>
            </div>

            <div className={styles.socialIcons}>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='YouTube'
              >
                <FaYoutube size={18} />
              </a>

              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <FaInstagram size={18} />
              </a>

              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='X'
              >
                <FaXTwitter size={16} />
              </a>

              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href='https://wa.me/919063725514'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='WhatsApp'
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottomSection}>
          <p>
            © {new Date().getFullYear()}
            {' '}
            TacoMines. All rights
            reserved.
          </p>

          <a
            href='https://tacovex.com'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.credit}
          >
            Design & Developed by
            Tacovex.com
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;