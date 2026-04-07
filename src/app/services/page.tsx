import Image from 'next/image';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

const serviceDetails = [
  {
    id: 1,
    title: 'Enterprise Web Development',
    description:
      'Next-generation web applications built with resilience and high-velocity performance. We leverage edge computing and modular architectures to ensure your digital ecosystem scales infinitely.',
    icon: 'terminal',
    tech: ['Next.js 14', 'Micro-Frontends', 'Rust-WASM'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCmqvLJtBkEBBrkyAWcjxZdfctbYlq6FNAjMmuheVPPvynMFujmG9MawYHRozKRCkdpI61NMBNq_P-Q4bDC0MW-UWSwHlJ5V0UissLdPi5h_BTdZ1m9fPC_tVfj0Z9kbWC3y-5dYgeSPQYYsNby69OQaOKuoDTYwGNR0YpFoMeMQRM6jra-tmDQazZRBEyptHdJsdxL6soEYI9yttMRkApiDqWJGznjH592Z9LNXL6vgH2jIEYQbqOwY_k-2bFK26Ik_b7wibEnK_2_',
  },
  {
    id: 2,
    title: 'AI Integration',
    description:
      'Synthesizing large language models and predictive neural networks into your core workflows to automate decision-making at lightspeed.',
    icon: 'psychology',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDa9uH3-Hrsmex2VoepGn16uSXqORB9gMGM-AsfF6xjd2BWj9C2kMmQiaHADyRtToFu9uwY_3AJAY2zJ9gz83IDydMMnahTosQmGbqCORH-nM0_4uJkgAQ0QIdlpV_zNeqKP79qGpgSs2o7ktqFF3VNlyRXyGMaXout71H-Aio0tPXdhclqIh13i3udjgZfld2cx_6qGIzjzAQIYR5lwlala6nLh73ybWos4EubW8SFDKbXfgzo6JOVLN8wcEZP4iYksvAKVbw60lMe',
  },
  {
    id: 3,
    title: 'Payment Systems',
    description:
      'Encrypted, multi-currency processing gateways with sub-millisecond latency. Compliant with international security standards.',
    icon: 'account_balance_wallet',
    badge: 'PCI DSS Certified',
  },
  {
    id: 4,
    title: 'Native App Development',
    description:
      'Crafting fluid mobile experiences for iOS and Android that feel indistinguishable from magic, powered by high-performance kernels.',
    icon: 'smartphone',
  },
  {
    id: 5,
    title: 'Growth Engines',
    description:
      'Data-driven market infiltration strategies utilizing algorithmic targeting and deep-funnel analytics for exponential scaling.',
    icon: 'query_stats',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header Section */}
      <section className="relative py-32 overflow-hidden px-8 pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-10 w-96 h-96 bg-secondary-container/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="font-label text-primary-fixed-dim tracking-[0.3em] uppercase text-xs mb-4 block font-semibold">
            Intelligence & Infrastructure
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
            Our Cutting-Edge Solutions
          </h1>
          <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Propelling enterprises into the future with hyper-secure, AI-driven architectural excellence.
          </p>
        </div>
      </section>

      {/* Service Details Grid */}
      <section className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Featured Service */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-xl glass-card p-12 transition-all duration-500 hover:bg-surface-container-high">
          <div className="flex flex-col h-full justify-between gap-12">
            <div>
              <div className="w-14 h-14 bg-primary-container/10 rounded-xl flex items-center justify-center mb-6 border border-primary-container/20">
                <span className="material-symbols-outlined text-primary-container text-3xl">{serviceDetails[0].icon}</span>
              </div>
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">{serviceDetails[0].title}</h2>
              <p className="font-body text-on-surface-variant text-lg max-w-md leading-relaxed">{serviceDetails[0].description}</p>
            </div>

            {serviceDetails[0].tech && (
              <div className="flex flex-wrap gap-3">
                {serviceDetails[0].tech.map((item) => (
                  <span key={item} className="px-4 py-1.5 rounded-full bg-surface-container-highest text-primary-fixed text-xs font-label uppercase tracking-widest border border-outline-variant/30">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
          {serviceDetails[0].image && (
            <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image
                alt=""
                className="w-full h-full object-contain"
                src={serviceDetails[0].image}
                width={256}
                height={256}
              />
            </div>
          )}
        </div>

        {/* AI Integration Card */}
        <GlassCard className="md:col-span-4 rounded-xl p-8 flex flex-col justify-between hover:bg-surface-container-high transition-all">
          <div>
            <div className="w-12 h-12 bg-secondary-container/10 rounded-xl flex items-center justify-center mb-6 border border-secondary-container/20">
              <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                {serviceDetails[1].icon}
              </span>
            </div>
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">{serviceDetails[1].title}</h2>
            <p className="font-body text-on-surface-variant leading-relaxed">{serviceDetails[1].description}</p>
          </div>
          {serviceDetails[1].image && (
            <div className="mt-8 pt-8 border-t border-outline-variant/10">
              <Image alt="" className="rounded-lg w-full h-32 object-cover opacity-60" src={serviceDetails[1].image} width={400} height={128} />
            </div>
          )}
        </GlassCard>

        {/* Payment Systems Card */}
        <GlassCard hover={true} className="md:col-span-4 rounded-xl p-8">
          <div className="w-12 h-12 bg-tertiary-container/10 rounded-xl flex items-center justify-center mb-6 border border-tertiary-container/20">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-2xl">{serviceDetails[2].icon}</span>
          </div>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">{serviceDetails[2].title}</h2>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-4">{serviceDetails[2].description}</p>
          {serviceDetails[2].badge && (
            <div className="flex items-center text-primary-container text-xs font-label uppercase tracking-widest gap-2">
              <span>{serviceDetails[2].badge}</span>
              <span className="material-symbols-outlined text-sm">verified_user</span>
            </div>
          )}
        </GlassCard>

        {/* App Development Card */}
        <GlassCard hover={true} className="md:col-span-4 rounded-xl p-8">
          <div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center mb-6 border border-primary-container/20">
            <span className="material-symbols-outlined text-primary-container text-2xl">{serviceDetails[3].icon}</span>
          </div>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">{serviceDetails[3].title}</h2>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed">{serviceDetails[3].description}</p>
        </GlassCard>

        {/* Growth Engines Card */}
        <GlassCard hover={true} className="md:col-span-4 rounded-xl p-8">
          <div className="w-12 h-12 bg-secondary-container/10 rounded-xl flex items-center justify-center mb-6 border border-secondary-container/20">
            <span className="material-symbols-outlined text-secondary text-2xl">{serviceDetails[4].icon}</span>
          </div>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">{serviceDetails[4].title}</h2>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed">{serviceDetails[4].description}</p>
        </GlassCard>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-surface-container-lowest/50 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="font-headline text-3xl font-bold text-on-surface mb-4">The Sentinel Tech Stack</h3>
            <p className="font-body text-on-surface-variant max-w-xl mx-auto">We build with the world's most resilient and innovative frameworks.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
            {[
              { name: 'React', icon: 'data_object' },
              { name: 'Python', icon: 'settings_ethernet' },
              { name: 'AWS', icon: 'cloud' },
              { name: 'Razorpay', icon: 'account_balance' },
              { name: 'PostgreSQL', icon: 'database' },
              { name: 'Go-Lang', icon: 'terminal' },
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center group-hover:border-primary-container/50 transition-all">
                  <span className="material-symbols-outlined text-3xl text-on-surface">{tech.icon}</span>
                </div>
                <span className="font-label text-xs uppercase tracking-widest">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-container/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <div className="glass-card rounded-[2.5rem] p-12 md:p-20 text-center border-primary-container/10">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">Need a custom solution?</h2>
            <p className="font-body text-on-surface-variant text-lg mb-12 max-w-lg mx-auto">
              Our engineers are ready to architect your vision. Let's build the next paradigm of your industry together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get a Free Quote</Button>
              <button className="px-10 py-4 rounded-full font-headline font-bold text-sm uppercase tracking-[0.2em] hover:bg-surface-variant/40 transition-all bg-surface-variant/20 border border-outline-variant/30">
                Speak to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
