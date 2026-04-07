import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturesBentoSection from '@/components/sections/FeaturesBentoSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesBentoSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
