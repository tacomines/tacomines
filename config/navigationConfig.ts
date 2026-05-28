export interface NavigationSubItem {
  label: string;
  href: string;
}

export interface NavigationItem {
  label: string;

  href?: string;

  dropdown?: boolean;

  items?: NavigationSubItem[];
}

export const NAVIGATION_LINKS: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
  },

  {
    label: 'About',
    href: '/about',
  },

  {
    label: 'Courses',
    href: '/courses',
  },

  {
    label: 'Classes & Workshops',

    href: '/classes-workshops',

    dropdown: true,

    items: [
      {
        label: 'Online Classes',
        href: '/classes-workshops/online-classes',
      },

      {
        label: 'Offline Classes',
        href: '/classes-workshops/offline-classes',
      },

      {
        label: 'Workshops',
        href: '/classes-workshops/workshops',
      },
    ],
  },

  {
    label: 'Projects & Placements',

    href: '/projects-placements',

    dropdown: true,

    items: [
      {
        label: 'Student Projects',
        href: '/projects-placements/student-projects',
      },

      {
        label: 'Placements',
        href: '/projects-placements/placements',
      },
    ],
  },

  {
    label: 'Register',
    href: '/register',
  },

  {
    label: 'Contact',
    href: '/contact',
  },

  {
    label: 'Blog',
    href: '/blog',
  },
];