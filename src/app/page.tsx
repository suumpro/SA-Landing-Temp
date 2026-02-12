import HeroSection from '@/components/sections/HeroSection';
import LiveDemoSection from '@/components/sections/LiveDemoSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FeatureSection from '@/components/sections/FeatureSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LiveDemoSection />
      <SocialProofSection />
      <HowItWorksSection />
      <FeatureSection />
      <PricingSection />
      <FAQSection />
    </>
  );
}
