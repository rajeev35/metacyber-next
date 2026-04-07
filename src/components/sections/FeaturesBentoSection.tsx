'use client';

export default function FeaturesBentoSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-4xl font-headline font-bold mb-6">
              The <span className="gradient-text">Sentinel</span> Shield
            </h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Security isn't an afterthought; it's our foundation. Our solutions are wrapped in multi-layered defense systems.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="font-semibold">AI Security Layers</span>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="font-semibold">End-to-End Encryption</span>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="font-semibold">Real-time Threat Monitoring</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-high p-8 rounded-3xl flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary-container text-4xl">cloud_done</span>
              <h3 className="text-xl font-bold">Cloud Protection</h3>
              <p className="text-sm text-on-surface-variant">
                Scalable cloud architectures with hardened security perimeters and automated failovers.
              </p>
            </div>

            <div className="bg-surface-container-high p-8 rounded-3xl flex flex-col gap-4">
              <span className="material-symbols-outlined text-secondary text-4xl">enhanced_encryption</span>
              <h3 className="text-xl font-bold">Data Encryption</h3>
              <p className="text-sm text-on-surface-variant">Military-grade AES-256 encryption for all data at rest and in transit.</p>
            </div>

            <div className="bg-surface-container-high p-8 rounded-3xl flex flex-col gap-4 md:col-span-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="material-symbols-outlined text-error text-4xl mb-4 block">radar</span>
                  <h3 className="text-xl font-bold">Real-time Threat Detection</h3>
                  <p className="text-sm text-on-surface-variant max-w-md">
                    Our AI algorithms scan millions of patterns per second to identify and neutralize zero-day vulnerabilities
                    before they strike.
                  </p>
                </div>
                <div className="hidden sm:block p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/20">
                  <div className="flex gap-2">
                    <div className="w-1 h-8 bg-primary-container/40 rounded-full"></div>
                    <div className="w-1 h-12 bg-primary-container rounded-full"></div>
                    <div className="w-1 h-6 bg-primary-container/60 rounded-full"></div>
                    <div className="w-1 h-10 bg-primary-container rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
