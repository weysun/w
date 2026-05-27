import { PHeading, PText, PTag, PLinkTile, PCarousel } from '@porsche-design-system/components-react';

export default function Collection() {
  const pieces = [
    {
      img: '/pcb-overhead.webp',
      title: 'Circuit No. 7',
      subtitle: 'PCB Series',
      tag: 'Limited Edition',
    },
    {
      img: '/vacuum-tubes.webp',
      title: 'Incandescence',
      subtitle: 'Valve Series',
      tag: "Collector's Item",
    },
    {
      img: '/components-flatlay.webp',
      title: 'Composition IV',
      subtitle: 'Component Series',
      tag: 'Available',
    },
    {
      img: '/soldering-art.webp',
      title: "The Maker's Touch",
      subtitle: 'Process Series',
      tag: 'New',
    },
    {
      img: '/cpu-art.webp',
      title: 'Genesis',
      subtitle: 'CPU Series',
      tag: 'Commission',
    },
    {
      img: '/silicon-glow.webp',
      title: 'Silicon Dreams',
      subtitle: 'Glow Series',
      tag: 'Limited Edition',
    },
    {
      img: '/vintage-electronics.webp',
      title: 'Analog Memories',
      subtitle: 'Vintage Series',
      tag: 'Collector\'s Item',
    },
    {
      img: '/wafer-fractals.webp',
      title: 'Fractal Geometry',
      subtitle: 'Wafer Series',
      tag: 'Available',
    },
    {
      img: '/transistor-landscape.webp',
      title: 'Microscopic Vistas',
      subtitle: 'Transistor Series',
      tag: 'New',
    },
  ];

  return (
    <section className="bg-surface py-fluid-2xl pt-28">
      <div className="px-fluid-lg mb-fluid-lg">
        <div className="flex items-end justify-between">
          <div>
            <PTag variant="secondary">Collection</PTag>
            <div className="mt-fluid-xs">
              <PHeading size="x-large" tag="h1">
                Current Works
              </PHeading>
            </div>
          </div>
          <p className="hidden md:block text-sm tracking-widest uppercase text-contrast-medium">
            {pieces.length} Pieces
          </p>
        </div>
      </div>

      <PCarousel
        slidesPerPage={{ base: 1, s: 2, l: 3 }}
        width="basic"
        rewind
        gradientColor="background-surface"
      >
        {pieces.map((piece) => (
          <PLinkTile
            key={piece.title}
            href="/collection"
            label="View Piece"
            description={piece.title}
            aspectRatio="3/4"
            size="medium"
          >
            <span slot="header" style={{ padding: '8px', display: 'block' }}>
              <PTag variant="secondary">{piece.tag}</PTag>
            </span>
            <img src={piece.img} alt={piece.title} />
            <div slot="footer" style={{ padding: '8px' }}>
              <PText size="x-small" color="inherit" theme="dark">
                {piece.subtitle}
              </PText>
            </div>
          </PLinkTile>
        ))}
      </PCarousel>
    </section>
  );
}
