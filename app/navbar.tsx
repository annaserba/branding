'use client';

import { usePathname } from 'next/navigation';
const defaultEnv=['desktop','mobile']

const brandings = [{ name: 'example', env: defaultEnv }]

export default function Navbar() {
  const pathname = usePathname();
  return (<>
          {brandings.map((brand) => (
            <div>
              {brand.env.map(env => (
                <>
              <div>
                <a
                  key={`${env}${brand.name}`}
                  href={`/${brand.name}/${env}`}
                  aria-current={pathname === `/${env}/${brand.name}` ? 'page' : undefined}
                >
                  {env} {brand.name}
                </a>
              </div>
              <div>
                <a
                    key={`${env}${brand.name} prod`}
                    href={`/${brand.name}/${env}/index.html`}
                    aria-current={pathname === `/${env}/${brand.name}/prod` ? 'page' : undefined}
                  >
                    {env} {brand.name} prod
                  </a>
                </div>
                </>
              ))}
            </div>
          ))}
        </>
  );
}
