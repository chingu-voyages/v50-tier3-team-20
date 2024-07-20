'use client';

import Link from 'next/link'
import { usePathname} from 'next/navigation';

const links = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
  },
  {
    name: 'Explore',
    href: '/dashboard/explore',
  },
  { 
    name: 'Profile', 
    href: '/dashboard/profile', 
  },
  { 
    name: 'Messages',
    href: '/dashboard/messages', 
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
          >
            <p className='rounded-md text-customBrown hover:bg-customBrown hover:text-customWhite p-5 m-5'>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
