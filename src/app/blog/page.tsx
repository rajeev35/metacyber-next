import Image from 'next/image';
import GlassCard from '@/components/ui/GlassCard';

const blogPosts = [
  {
    id: 1,
    title: 'The Quantum Shift: Neural Cryptography and the Future of Zero-Knowledge Proofs',
    category: 'Featured Trend',
    date: 'March 24, 2024',
    readTime: '12 min read',
    description:
      'Exploring how generative AI models are reshaping the landscape of cryptographic security, creating self-evolving firewalls that adapt in milliseconds.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTqfh73LlrD_7EOmyjgXP9c5rPRnWZbR8L3I5SAz2hceOobSCzQYdU9mvvTkNrc5SvPjddbOfnFOwkBzGRatBF7nrd-EJ0Xc9RI5O1_xlsORDACNM2_n-4R3Vkl8REEoMu-3gjy2zoCB60VuYU35iSRc506Ymnl-UDdYmhL_6808OnYmGjav0EqQU_WVGUbdbR_xsLk-h8btftY-Nzbmvx3noEIBzCan6Kep1dTsfM4qWtY-953J5Y9gp6syPOEipY-MtN-dAWYtis',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Ghost Protocol: Securing Decentralized Nodes',
    category: 'Cybersecurity',
    date: 'March 20, 2024',
    readTime: '8 min read',
    description: 'Analyzing the vulnerabilities in modern decentralized networks and how to deploy autonomous sentinel agents to protect node integrity.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKJbbtiBafPGS0HiDpZNfkHvXwIVMwkstSHfE7-sfUFpXeoclrw-m4BCQdDbVI1TL7ZPoi_JKFcjFgH-Xm1B2nU07DOYiFqIgPPm4DwFCtWVwWgmG00Dg0QzlSpgxQqW0Ua4TGPVpyBBYZ76lbilFKjYtSBAS0qwmUriiWNyBPoEg3jOTB68c_C7ydV4LssMc1VDKvyCyCq1bXqUsK3BiaqY0dl8HparkrlX-3rdV08Xqn5o8kCG5ukkgbOcJHiB4s1a7_jR7eGxxn',
  },
  {
    id: 3,
    title: 'Generative Adversarial Networks in Pentesting',
    category: 'AI',
    date: 'March 18, 2024',
    readTime: '10 min read',
    description:
      'How GANs are being used to simulate infinite breach scenarios, allowing security teams to train against unseen threat vectors.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAdQttSP3ss8sEPF4Fn1RvWrfNkl0lJs9ufLcl3GMJRGUWVqlizbdbRrvmTNQE1k-z5OgEQHb1l_uN81cs38-NDEwwWjm8pp5eUeQ6hLNOXZa6zavhQ22UYitjizPgoaDgKoQtoJv36sGrjPERF8UTEGDGErFWblqErBWfAU0CtkPWgpS4sX-poIgVupsORS8py05VPuXefS7tjEtmxw21XZa3OwGeIJi3a_s3sxjqPSD_pAwWo3k4q_PwnUQ4vyMdXpHcbHNe915vU',
  },
  {
    id: 4,
    title: 'Solidity Hardening for Enterprise DeFi',
    category: 'Web3',
    date: 'March 15, 2024',
    readTime: '11 min read',
    description: 'A technical breakdown of smart contract auditing best practices for high-volume institutional liquidity pools.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2zXm1RhP9z_7dbC4j1g6LfzVFSOa2k2jnWzVG2mz1Z_ZBaynbS8dfha7u7dO2bVdaYENsh_hwTK7A4sOsmkWj7s7W6bkQz6crAR_aGlzpqoAYMT829UUH384VKBZBVCxSiVg2ctUXvKA_nZePeXp_CUFiVZKR0WH4yGJU-u3AePqe1zJYQT83lg0ookMf01ioW9P9lbPMiqpWryE5A5oIo6EgREeqqnpXa7WX-yNA9AVpiMJgGZn2oAn7gNlsiS0hag9VuzRxnG5b',
  },
  {
    id: 5,
    title: 'Search Intelligence: Beyond the Keyword',
    category: 'SEO',
    date: 'March 12, 2024',
    readTime: '9 min read',
    description:
      'Utilizing semantic search patterns and AI entity recognition to dominate modern search engine results pages.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBut5XpfQUMkc3cpz1JKpdjKQQ6GoBY6ziGxppoqLf_iMmbTQCtwvg9tHjtGzjn6eZam60fDtrr1ACGX6DYm4ManMqMaByX2jrGsJEDzfdt3aX99IV68KTpeghqDo4lGTrLtPs4WZpvdEGSZQ1JHlxr8HdRcWD1pUwH6Y3rJEUZl_uLvAaqrOmHEo57eL59UBx3B_kAgfE_NgEphtn_pYzOrSQ67jxea3U9PFz7LzctYOJHR8C4ychobecKwVMc8Rpe1la2AxJdiHpM',
  },
  {
    id: 6,
    title: 'Atomic Design Systems in Neo-UI',
    category: 'App Dev',
    date: 'March 10, 2024',
    readTime: '7 min read',
    description:
      'Building scalable, resilient application interfaces that prioritize glassmorphism and motion-first user experiences.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCq_lg1YrQxaN-50dB-huEu3fzEjnT7JzY4Epr0ZHzMpFPn3JHTd8QPSbz79bmMs5BpO_maJXH6yBvFfM5vGt0tUvQxduOaeSkvlRD4MD9CdaMx9vOAaQmP6Mem8CmY_APRvJ1cPU0ISZ5KS6dK4abqKHeI_KDHVDpboXZ8LQ--ztDATwC0Y_lbf0zQSdbhQkCM7gFVcZIpHN2TxgdD3Dx8SMZB5smVhEZ8Z7_AtNP4thIuJkwDVF5Rj9evAYoOPA4SvZ-5pPGM0BD2',
  },
  {
    id: 7,
    title: 'Physical Layer Security in Hybrid Clouds',
    category: 'Cybersecurity',
    date: 'March 8, 2024',
    readTime: '13 min read',
    description: 'Addressing the often-overlooked hardware vulnerabilities in global data distribution centers.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB0BhnL2nLI2sZdG9Dp7jzdmeWmiJkXL3QFnPdtPN2Re136ANy8miJ9gslbueu7roqdSFCSU8FyyZ4PwcxWcSNxxg3Rg3A18dJ3QqOvv40W6YWlXs-ETn-SvmrEmyy_LfnpgJ-HlvJPUVTvPwEh16PGWvNEk7_4XwQbg_PJ4B3LFgX93ib4QwE3eGOV-kuAHTDgeExnnv9Xc-JFDZeurkPNVi9EsgYLFmOc9IsTaAc6Y_7Of9PUqpuexxU8RUEcLmAIAAriL_hUab-n',
  },
];

const categories = ['AI', 'Web3', 'Cybersecurity', 'App Development', 'SEO'];

export default function BlogPage() {
  return (
    <>
      {/* Hero & Featured Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto pt-32">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary-container/20 text-secondary-fixed-dim text-xs font-label font-bold tracking-widest uppercase mb-4">
              The Sentinel Prism Intelligence
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary tracking-tight leading-none mb-6">
              Cyber <span className="gradient-text">Intelligence</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed">
              Deep dives into the convergence of impenetrable security and fluid artificial intelligence architectures.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-start md:justify-end">
            {categories.map((cat) => (
              <a
                key={cat}
                href="#"
                className="glass-card px-6 py-3 rounded-xl text-sm font-label font-medium text-on-surface hover:text-primary-container transition-all"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>

        {/* Featured Card */}
        <div className="relative group overflow-hidden rounded-xl bg-surface-container-low aspect-[21/9] flex flex-col justify-end p-8 md:p-12 transition-all hover:bg-surface-container-high">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Featured"
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              src={blogPosts[0].image}
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-primary-fixed-dim text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {blogPosts[0].category}
              </span>
              <span className="text-on-surface-variant text-sm font-label">
                {blogPosts[0].date} • {blogPosts[0].readTime}
              </span>
            </div>

            <h2 className="font-headline text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {blogPosts[0].title}
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 line-clamp-2">{blogPosts[0].description}</p>

            <a  className="inline-flex items-center gap-3 text-primary-container font-headline font-bold text-lg group/link" href="#">
              Read Full Intelligence <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {blogPosts.slice(1).map((post) => (
          <div key={post.id} className="flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:bg-surface-container-high transition-all group">
            <div className="aspect-video relative overflow-hidden">
              <Image
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={post.image}
                fill
              />
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest text-primary-fixed-dim">
                {post.category}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3 group-hover:text-primary-container transition-colors">
                {post.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">{post.description}</p>

              <a  className="text-primary-fixed-dim text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-tighter" href="#">
                Access Data <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="relative overflow-hidden rounded-[2rem] bg-surface-container-lowest p-12 md:p-20 text-center border border-outline-variant/10 max-w-7xl mx-auto mx-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,245,255,0.15),transparent_70%)]"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-primary-container text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
            alternate_email
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary mb-6">
            Stay Updated with Cyber Intelligence
          </h2>
          <p className="text-on-surface-variant text-lg mb-10">
            Receive weekly technical deep-dives and emerging threat landscape reports directly to your inbox. No noise, just signal.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              className="flex-grow bg-surface-container-high border-none rounded-xl py-4 px-6 text-on-surface focus:ring-2 focus:ring-primary-container transition-all placeholder:text-on-surface-variant/40"
              placeholder="enter your intelligence-clearance@email.com"
              type="email"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed px-8 py-4 rounded-xl font-headline font-bold uppercase tracking-wider hover:shadow-[0_0_25px_rgba(0,245,255,0.6)] transition-all active:scale-95 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-6 text-xs text-on-surface-variant/50 font-label tracking-wide">
            Encrypted via RSA-4096. Your data is protected by the Sentinel Prism protocol.
          </p>
        </div>
      </section>
    </>
  );
}
