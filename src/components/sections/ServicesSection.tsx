'use client';

import Image from 'next/image';
import GlassCard from '../ui/GlassCard';

const services = [
  {
    id: 1,
    title: 'Website Development',
    description:
      'Modern, fast, and responsive websites tailored to your business, optimized for elite performance.',
    icon: 'language',
    color: 'text-primary-container',
  },
  {
    id: 2,
    title: 'App Development',
    description:
      'High-performance mobile and web applications for all platforms with intuitive user experiences.',
    icon: 'smartphone',
    color: 'text-primary-container',
  },
  {
    id: 3,
    title: 'AI Integration',
    description: 'Smart AI solutions including chatbots, automation, and predictive analytics that evolve with your data.',
    icon: 'psychology',
    color: 'text-secondary',
    featured: true,
  },
  {
    id: 4,
    title: 'Payment Integration',
    description: 'Secure and seamless payment solutions across global providers including Razorpay, Stripe, and more.',
    icon: 'payments',
    color: 'text-primary-container',
  },
  {
    id: 5,
    title: 'Digital Marketing & SEO',
    description: 'Boost your online presence with data-driven SEO, strategic ads, and comprehensive marketing growth plans.',
    icon: 'trending_up',
    color: 'text-primary-container',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">
            Core <span className="text-purple-400">Intelligence</span> Services
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Propel your business into the next generation with our integrated technology suite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <GlassCard
              key={service.id}
              className={`rounded-2xl neon-glow transition-all duration-300 group ${
                service.featured ? 'lg:row-span-2 flex flex-col justify-between' : ''
              }`}
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-xl ${
                    service.featured ? 'bg-secondary-container/10' : 'bg-primary-container/10'
                  } flex items-center justify-center mb-6 group-hover:${
                    service.featured ? 'bg-secondary-container/20' : 'bg-primary-container/20'
                  } transition-colors`}
                >
                  <span className={`material-symbols-outlined text-3xl ${service.color}`}>{service.icon}</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">{service.title}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">{service.description}</p>
              </div>

              {service.featured && (
                <Image
                  alt="AI visualization"
                  className="rounded-xl w-full h-48 object-cover mt-6 brightness-75"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPYCb1FUU6HCv1AL96nJzzC_Y_UfELFC0ifSWh3Izo9pWak_Ocws2Ztu88zeFBBZytTDh6uDlC9Q-_2jW3P9oFTtQyujyf8QqndMm4RYKAIKwG6aMh41XXVSAPgEorS7AKITVlpechAVDAU9wHH-9AIqd3GaoHD6Uo8FjBUn4xBjUJO2ZTm1ZAz1cqx8upeaFeN4CHF4E-vi-Hfx2v3HLU6Mt7rWDKdo62UqqmBeCcZD22b7Ykrdk421O7VBgFqIxFWHY7SZ3Ete8q"
                  width={400}
                  height={200}
                />
              )}

              <a className="text-primary-container font-semibold flex items-center gap-2 group/link" href="#">
                Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
