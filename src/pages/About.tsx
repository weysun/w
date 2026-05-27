import { PHeading, PText, PTag, PDivider, PDisplay } from '@porsche-design-system/components-react';

export default function About() {
  return (
    <>
      <section className="bg-canvas py-fluid-2xl px-fluid-lg pt-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-xl items-center">
            <div>
              <PTag variant="secondary">Philosophy</PTag>
              <div className="mt-fluid-sm">
                <PHeading size="x-large" tag="h1">
                  The Art of
                  <br />
                  the Invisible
                </PHeading>
              </div>
              <div className="mt-fluid-md space-y-fluid-sm">
                <PText size="medium" color="contrast-high">
                  Inside every electronic device lies an unseen architecture —
                  vast and intricate, engineered to perfection, yet never
                  intended to be seen.
                </PText>
                <PText size="small" color="contrast-medium">
                  WEYSON believes the real artistry lives in the substrate.
                  In copper traces that carry electricity like rivers carry
                  water. In the crystalline geometry of silicon. In the
                  iridescent blues and greens of an oxidized board.
                </PText>
                <PText size="small" color="contrast-medium">
                  We extract these hidden worlds and bring them into the light —
                  framing them, illuminating them, and presenting them as the
                  masterpieces they have always been.
                </PText>
              </div>
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                src="/circuit-face.webp"
                alt="Circuit face art"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-fluid-2xl px-fluid-lg">
        <div className="max-w-5xl mx-auto">
          <div className="mb-fluid-lg">
            <PTag variant="secondary">The Craft</PTag>
            <div className="mt-fluid-xs">
              <PHeading size="x-large" tag="h2">
                How We Create
              </PHeading>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-md">
            <div className="relative overflow-hidden group" style={{ aspectRatio: '16/9' }}>
              <img
                src="/soldering-art.webp"
                alt="Soldering craft"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-fluid-md">
                <PText size="x-small" theme="dark" color="contrast-medium">
                  PROCESS
                </PText>
                <div className="mt-1">
                  <PHeading size="large" tag="h3" theme="dark">
                    Hand-Crafted
                    <br />
                    Every Time
                  </PHeading>
                </div>
                <div className="mt-fluid-xs">
                  <PText size="small" theme="dark" color="contrast-medium">
                    Each WEYSON piece begins with the hands of a craftsman,
                    selecting, positioning, and illuminating components with
                    surgical care.
                  </PText>
                </div>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-fluid-md">
              <div className="relative overflow-hidden group" style={{ aspectRatio: '16/8' }}>
                <img
                  src="/components-art.webp"
                  alt="Components close-up"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-fluid-md">
                  <PText size="x-small" theme="dark" color="contrast-medium">
                    MATERIALS
                  </PText>
                  <div className="mt-1">
                    <PHeading size="medium" tag="h3" theme="dark">
                      Premium Components
                    </PHeading>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden group" style={{ aspectRatio: '16/8' }}>
                <img
                  src="/pcb-overhead.webp"
                  alt="PCB art"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-fluid-md">
                  <PText size="x-small" theme="dark" color="contrast-medium">
                    ARCHITECTURE
                  </PText>
                  <div className="mt-1">
                    <PHeading size="medium" tag="h3" theme="dark">
                      Precision Design
                    </PHeading>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-fluid-2xl px-fluid-lg">
        <div className="max-w-4xl mx-auto text-center">
          <PDisplay size="small" tag="h2" align="center" color="primary">
            "In the dance of electrons, we found our muse. In the geometry of
            silicon, our gallery. In the hum of current, our song."
          </PDisplay>
          <div className="mt-fluid-lg">
            <PDivider />
            <div className="mt-fluid-md">
              <PText size="small" color="contrast-medium" align="center">
                — Wei Song, Founder &amp; Creative Director, WEYSON
              </PText>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-fluid-2xl px-fluid-lg">
        <div className="max-w-7xl mx-auto">
          <div className="mb-fluid-xl">
            <PTag variant="secondary">Services</PTag>
            <div className="mt-fluid-xs">
              <PHeading size="x-large" tag="h2">
                What We Offer
              </PHeading>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-fluid-lg">
            {[
              {
                number: '01',
                title: 'Commissions',
                desc: 'Bespoke artworks created to your vision. Whether a residential installation or corporate statement piece, we collaborate to realize your exact specifications.',
              },
              {
                number: '02',
                title: 'Curation',
                desc: 'From private collections to gallery exhibitions, our team curates electronic art experiences that challenge and inspire audiences worldwide.',
              },
              {
                number: '03',
                title: 'Conservation',
                desc: 'Restoration and archival of existing electronic art, ensuring the integrity and longevity of your collection for generations to come.',
              },
            ].map((s) => (
              <div key={s.number} className="pt-fluid-md" style={{ borderTop: '2px solid currentColor' }}>
                <PText size="xx-small" color="contrast-low" weight="bold">
                  {s.number}
                </PText>
                <div className="mt-fluid-sm mb-fluid-sm">
                  <PHeading size="large" tag="h3">
                    {s.title}
                  </PHeading>
                </div>
                <PText size="small" color="contrast-medium">
                  {s.desc}
                </PText>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
