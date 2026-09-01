export interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Programs', path: '/programs' },
  { name: 'Our Work', path: '/projects' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Get Involved', path: '/volunteer' },
  { name: 'Contact Us', path: '/contact' },
];
