'use client';

export default function StatsSection() {
  const stats = [
    {
      value: '500+',
      label: 'Projects Completed',
      color: 'text-cyan-400',
    },
    {
      value: '99.9%',
      label: 'System Uptime',
      color: 'text-cyan-400',
    },
    {
      value: '250+',
      label: 'Happy Clients',
      color: 'text-cyan-400',
    },
    {
      value: '100',
      label: 'Security Score',
      color: 'text-purple-400',
    },
  ];

  return (
    <section className="py-20 border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className={`text-4xl md:text-5xl font-headline font-extrabold ${stat.color} mb-2`}>{stat.value}</div>
            <div className="text-sm font-label uppercase tracking-widest text-on-surface-variant">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
