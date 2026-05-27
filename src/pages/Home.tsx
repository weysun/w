import { PDisplay, PHeading, PText, PTag } from '@porsche-design-system/components-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-end overflow-hidden bg-black pt-24">
        <div className="absolute inset-0">
          <img
            src="/hero-circuit.webp"
            alt="Circuit board art"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full px-fluid-lg pb-fluid-2xl">
          <div className="max-w-4xl">
            <div className="mb-fluid-sm">
              <PTag theme="dark" variant="secondary">
                Electronic Art · Est. 2024
              </PTag>
            </div>
            <PDisplay size={{ base: 'medium', m: 'large' }} theme="dark" tag="h1" color="primary">
              Where Circuit
              <br />
              Becomes Canvas
            </PDisplay>
            <div className="mt-fluid-md max-w-xl">
              <PText size={{ base: 'small', m: 'medium' }} theme="dark" color="contrast-medium">
                WEYSON transforms the hidden beauty of electronic components
                into artistic statements. Each piece is a meditation on
                precision, materiality, and the poetry of the machine.
              </PText>
            </div>
            <div className="mt-fluid-lg flex flex-wrap gap-fluid-sm">
              <Link
                to="/collection"
                className="inline-flex items-center bg-primary text-canvas px-fluid-lg py-static-sm text-sm tracking-widest uppercase no-underline hover:opacity-80 transition-opacity duration-300"
              >
                Explore Collection
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center border border-primary/60 text-primary px-fluid-lg py-static-sm text-sm tracking-widest uppercase no-underline hover:border-primary transition-colors duration-300"
              >
                Our Philosophy
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-fluid-md right-fluid-lg z-10 text-right hidden md:block">
          <PText size="xx-small" theme="dark" color="contrast-medium">
            SCROLL TO DISCOVER
          </PText>
          <div className="mt-2 flex justify-end">
            <div
              className="w-px h-16 animate-pulse"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))' }}
            />
          </div>
        </div>
      </section>

      <section className="bg-canvas py-fluid-2xl px-fluid-lg">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-xl items-center">
            <div>
              <PTag variant="secondary">Featured Works</PTag>
              <div className="mt-fluid-sm">
                <PHeading size="x-large" tag="h2">
                  Discover Our
                  <br />
                  Latest Pieces
                </PHeading>
              </div>
              <div className="mt-fluid-md space-y-fluid-sm">
                <PText size="medium" color="contrast-high">
                  Explore our curated collection of electronic art. Each piece
                  tells a story of precision, creativity, and the hidden beauty
                  within technology.
                </PText>
                <PText size="small" color="contrast-medium">
                  From intricate circuit boards to vintage electronics, WEYSON
                  presents the artistic side of technology that few ever see.
                </PText>
              </div>
              <div className="mt-fluid-lg flex gap-fluid-xl">
                <div>
                  <PDisplay size="small" tag="h3">200+</PDisplay>
                  <PText size="x-small" color="contrast-medium">Unique Pieces</PText>
                </div>
                <div>
                  <PDisplay size="small" tag="h3">12</PDisplay>
                  <PText size="x-small" color="contrast-medium">Countries</PText>
                </div>
                <div>
                  <PDisplay size="small" tag="h3">8yr</PDisplay>
                  <PText size="x-small" color="contrast-medium">Heritage</PText>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                src="/silicon-glow.webp"
                alt="Silicon glow art"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
