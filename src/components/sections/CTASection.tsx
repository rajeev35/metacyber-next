'use client';

import Button from '../ui/Button';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary-container/10"></div>
      <div className="max-w-5xl mx-auto px-8 relative z-10 glass-card rounded-[3rem] p-12 md:p-20 text-center">
        <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">
          Start Your Digital <br />
          <span className="text-primary-container">Transformation</span> Today
        </h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Don't settle for standard solutions. Build the future of your business on the most secure and advanced foundation
          available.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className=" bg-cyan-400 text-black glass-card neon-glow px-8 py-4 rounded-xl font-headline font-bold text-lg">
              Contact Us
          </button>
          <button className="glass-card neon-glow px-8 py-4 rounded-xl font-headline font-bold text-lg">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
