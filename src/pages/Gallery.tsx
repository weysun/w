import { PHeading, PTag } from '@porsche-design-system/components-react';

export default function Gallery() {
  const images = [
    { src: '/hero-circuit.webp', alt: 'Circuit traces', span2: true },
    { src: '/vacuum-tubes.webp', alt: 'Vacuum tubes' },
    { src: '/components-flatlay.webp', alt: 'Components flatlay' },
    { src: '/cpu-art.webp', alt: 'CPU art' },
    { src: '/circuit-face.webp', alt: 'Circuit face', span2: false },
    { src: '/soldering-art.webp', alt: 'Soldering art' },
    { src: '/silicon-glow.webp', alt: 'Silicon glow' },
    { src: '/vintage-electronics.webp', alt: 'Vintage electronics' },
    { src: '/wafer-fractals.webp', alt: 'Wafer fractals' },
    { src: '/transistor-landscape.webp', alt: 'Transistor landscape' },
    { src: '/pcb-overhead.webp', alt: 'PCB overhead' },
    { src: '/components-art.webp', alt: 'Components art' },
  ];

  return (
    <section className="bg-black py-fluid-2xl pt-28">
      <div className="px-fluid-lg mb-fluid-lg">
        <PTag theme="dark" variant="secondary">Gallery</PTag>
        <div className="mt-fluid-xs">
          <PHeading size="x-large" tag="h1" theme="dark">
            Visual Archive
          </PHeading>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '4px',
          padding: '0 var(--p-spacing-fluid-lg, 2rem)',
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden group cursor-pointer"
            style={{
              aspectRatio: '1/1',
              gridColumn: img.span2 ? 'span 2' : 'span 1',
              gridRow: img.span2 ? 'span 2' : 'span 1',
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            <div
              className="absolute inset-0 transition-colors duration-500"
              style={{ background: 'rgba(0,0,0,0)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0)';
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
