import { PDisplay, PText, PTag } from '@porsche-design-system/components-react';

export default function Contact() {
  const contacts = [
    { label: 'General Inquiries', value: 'hello@weyson.com' },
    { label: 'Acquisitions', value: 'hello@weyson.com' },
    { label: 'Commissions', value: 'hello@weyson.com' },
  ];

  return (
    <section className="relative bg-black py-fluid-2xl px-fluid-lg pt-28 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/hero-circuit.webp"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <PTag theme="dark" variant="secondary">Contact</PTag>
        <div className="mt-fluid-sm">
          <PDisplay size="medium" tag="h1" theme="dark" align="center">
            Begin a Conversation
          </PDisplay>
        </div>
        <div className="mt-fluid-md">
          <PText size="medium" theme="dark" color="contrast-medium" align="center">
            Whether you seek to commission a work, acquire a piece from our
            collection, or simply wish to connect with a community of
            electronic art enthusiasts — we welcome your message.
          </PText>
        </div>

        <div className="mt-fluid-xl grid grid-cols-1 sm:grid-cols-3 gap-fluid-md text-left">
          {contacts.map((item) => (
            <div key={item.label} style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1rem' }}>
              <PText size="x-small" theme="dark" color="contrast-medium">
                {item.label}
              </PText>
              <div className="mt-1">
                <PText size="small" theme="dark" weight="semi-bold">
                  <a href={`mailto:${item.value}`} className="text-inherit no-underline hover:opacity-80 transition-opacity">
                    {item.value}
                  </a>
                </PText>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-fluid-xl">
          <a
            href="mailto:hello@weyson.com"
            className="inline-flex items-center border border-primary text-primary px-fluid-xl py-fluid-sm text-sm tracking-widest uppercase no-underline hover:bg-primary hover:text-black transition-all duration-300"
          >
            Write to Us
          </a>
        </div>
      </div>
    </section>
  );
}
