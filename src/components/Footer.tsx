import { Link } from 'react-router-dom';
import { PText } from '@porsche-design-system/components-react';

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-contrast-low py-fluid-lg px-fluid-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-fluid-md">
          <div>
            <Link
              to="/"
              className="font-bold text-primary no-underline"
              style={{ fontSize: '1rem', letterSpacing: '0.3em' }}
            >
              WEYSON
            </Link>
            <div className="mt-fluid-xs max-w-xs">
              <PText size="x-small" color="contrast-medium">
                Electronic components as art. Art as philosophy. Philosophy as
                a way of seeing the world.
              </PText>
            </div>
          </div>
          <div className="flex gap-fluid-xl">
            <div>
              <PText size="x-small" weight="semi-bold">
                Explore
              </PText>
              <div className="mt-fluid-sm space-y-2">
                {['Collection', 'Gallery', 'About'].map((l) => (
                  <div key={l}>
                    <Link
                      to={`/${l.toLowerCase()}`}
                      className="text-xs text-contrast-medium no-underline hover:text-primary transition-colors duration-300 tracking-wider uppercase"
                    >
                      {l}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <PText size="x-small" weight="semi-bold">
                Connect
              </PText>
              <div className="mt-fluid-sm space-y-2">
                {['Instagram', 'Twitter', 'Newsletter', 'Press'].map((l) => (
                  <div key={l}>
                    <a
                      href="#"
                      className="text-xs text-contrast-medium no-underline hover:text-primary transition-colors duration-300 tracking-wider uppercase"
                    >
                      {l}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-fluid-lg pt-fluid-sm flex flex-col md:flex-row justify-between items-center gap-fluid-sm"
          style={{ borderTop: '1px solid var(--p-color-contrast-low, #d8d8db)' }}
        >
          <PText size="xx-small" color="contrast-medium">
            © 2024 WEYSON. All rights reserved.
          </PText>
          <div className="flex gap-fluid-md">
            {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-contrast-medium no-underline hover:text-primary transition-colors duration-300"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
