# Metacyber Frontend - Next.js 14 Application

A production-ready, pixel-perfect implementation of the Metacyber cybersecurity and AI solutions website built with **Next.js 14**, **React**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

- **Next.js 14 App Router** - Modern server and client components
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Custom design system with Material Design 3 color palette
- **Responsive Design** - Mobile-first approach for all screen sizes
- **Component-Based Architecture** - Reusable, maintainable components
- **Custom Color System** - Material Design 3 cybersecurity theme
- **Optimized Images** - Next.js Image component for performance
- **SEO Optimized** - Meta tags and semantic HTML
- **Glass Morphism** - Modern UI with glassmorphic effects

## 📁 Project Structure

```
src/
├── app/
│   ├── services/      # Services page
│   ├── about/         # About Us page
│   ├── contact/       # Contact page
│   ├── blog/          # Blog page
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Hero, Services, Features, Stats, etc.
│   └── ui/            # Button, GlassCard components
└── public/            # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.2 (with Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with Material Design 3
- **Package Manager**: npm
- **Node Version**: v20.9.0+

## 📦 Installation

1. **Navigate to the project directory**:
```bash
cd metacyber-frontend
```

2. **Install dependencies**:
```bash
npm install
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📄 Pages

- **Home** (`/`) - Landing page with hero, services, features, stats, testimonials, and CTA
- **Services** (`/services`) - Detailed service offerings and technology stack
- **About Us** (`/about`) - Company story, values, and team
- **Contact** (`/contact`) - Contact form with FAQ
- **Blog** (`/blog`) - Featured blog posts and articles

## 🎨 Design System

### Colors
The application uses a custom Material Design 3 cybersecurity color palette:
- **Primary**: `#00f5ff` (Cyan)
- **Secondary**: `#dcb8ff` (Purple)
- **Background**: `#0e1320` (Deep Blue-Black)
- **Surface**: `#1a1f2d`, `#252a38` (Various depths)

### Typography
- **Headlines**: Manrope (400, 600, 700, 800)
- **Body**: Inter (400, 500, 600)
- **Labels**: Inter (400, 500, 600)

### Components

#### Button
```tsx
<Button variant="primary" size="lg">Get Started</Button>
// Variants: primary, secondary, outline
// Sizes: sm, md, lg
```

#### GlassCard
```tsx
<GlassCard hover={true} className="custom-class">
  Content here
</GlassCard>
```

#### Section Components
- `HeroSection` - Hero banner with CTA
- `ServicesSection` - Service showcase
- `FeaturesBentoSection` - Feature highlights
- `StatsSection` - Statistics
- `TestimonialsSection` - Client testimonials
- `CTASection` - Call-to-action section

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `Navbar.tsx`

### Modifying Colors
Edit `tailwind.config.ts` in the root directory.

### Creating New Components
Add components to `src/components/` in appropriate subdirectories.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Docker
```bash
docker build -t metacyber-frontend .
docker run -p 3000:3000 metacyber-frontend
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ using Next.js 14**
