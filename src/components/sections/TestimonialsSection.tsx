'use client';

import Image from 'next/image';
import GlassCard from '../ui/GlassCard';

const testimonials = [
  {
    id: 1,
    name: 'Alex Rivera',
    title: 'CEO, TechFlow Solutions',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5p32xn1KiNQzh5zW4cF8_uAevNLTDo0r7TiNnHlFy6r74L4GWC5FdOg3EHaAXS1m_doE-RYmfMGFDrS6e8tvije-p6CDps3uug-WdRemmBodFmPspmKi9Z-ga8LD6mxas_-0PbVT2I5tvA6GsSN7WKe4aRb-ngFxBWivRP3VGF6Lf8l2RIpxSWSBvrDhZiJ7cv4kl9zdxiHMp0I53-IkSBpYIF8KoDjq1B2wS0RwDyNj1VK8jC07Cw9LRMQmQr1NjnNRD6cXCWDxz',
    quote:
      '"Metacyber transformed our legacy systems into a modern, secure powerhouse. Their AI integration saved us 40% in operational costs."',
    borderColor: 'border-primary-container',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    title: 'Director of Digital Growth',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJzYpWxG1H1K9A-Z99mZlodsL0RKI9WdaDeBKcTTRm3-tuPIQtJXKlu335CB3zgCczNsdfueike-QThYn6XseZLAYRF9GInqBnDkC7XXOZ3I_pI7jGEXjtz5wiTk6KUeRzxwAPo85UjNU4flbG2HYzlfqHT97j3jwo3fj6FxadHTj6ZenHNnR82vk_TfWMtfpfyjLz_h7ZdmLJdcT4BZDe_qyGUK3snF8Itorb8Acd9VEYDSKjswhpP1P6r3N1qYMJOKSU2yR35loz',
    quote:
      '"The payment gateway integration was seamless. We went live globally in weeks, not months. Highly recommended for any serious digital business."',
    borderColor: 'border-secondary',
  },
  {
    id: 3,
    name: 'Marcus Thorne',
    title: 'Founder, CyberOps',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB04XKuLLWwCStiadgJNrtctiNKxwmGT-1JF0dGfzvYKmDySz6ecthrO6MQww6JeSVPFYNYY-WMWhCWzhvUEUEVB3JQLOr8Bo311hZJng-PEBIdxCu3lp7UGc1EydLMZTWcdkCcN2cFQJBaZBFVugiqUflj0c9YHPm_XnKjhOfgU4463SHzhRQv_zhvMJTqHVa99YH6zH9Q_mhJgsYjrFex8m9UYomprUEnU96-d1ZiJGhv-4B-_V8_fxDpxWTahR4KKYF9IwvNs9eK',
    quote:
      '"Finally, a dev team that understands security. Our app isn\'t just fast; it\'s impenetrable. The piece of mind is worth every penny."',
    borderColor: 'border-primary-container',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">
            Trusted by <span className=" text-cyan-400 text-primary-container">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <GlassCard key={testimonial.id} className={`rounded-2xl ${testimonial.borderColor} border-t-2`}>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-container/30"
                  src={testimonial.image}
                  width={56}
                  height={56}
                />
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-xs text-on-surface-variant">{testimonial.title}</div>
                </div>
              </div>
              <p className="text-on-surface-variant italic">{testimonial.quote}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
