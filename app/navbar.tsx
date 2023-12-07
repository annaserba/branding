'use client';

import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'PSB', href: '/psb' }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
        <>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </>
  );
}
