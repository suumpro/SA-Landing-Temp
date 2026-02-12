import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import LiveDemoSection from '@/components/sections/LiveDemoSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FeatureSection from '@/components/sections/FeatureSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <LiveDemoSection />
      <HowItWorksSection />
      <FeatureSection />
      <CTASection />
    </>
  );
}
