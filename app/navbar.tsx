'use client';

import { usePathname } from 'next/navigation';


const brandings = ['psb']

export default function Navbar() {
  const pathname = usePathname();
  return (
        <>
          {brandings.map((brand) => (
            <div>
              <div>
                <a
                  key={brand}
                  href={`/${brand}`}
                  aria-current={pathname === `/${brand}` ? 'page' : undefined}
                >
                  {brand}
                </a>
              </div>
              <div>
                <a
                    key={`${brand} prod`}
                    href={`/${brand}/index.html`}
                    aria-current={pathname === `/${brand}/prod` ? 'page' : undefined}
                  >
                    {brand} prod
                  </a>
                </div>
            </div>
          ))}
        </>
  );
}
