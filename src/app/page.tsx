import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import FeatureSection from '@/components/sections/FeatureSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import LiveDemoSection from '@/components/sections/LiveDemoSection';

const POSAnalysisSection = dynamic(
  () => import('@/components/sections/POSAnalysisSection'),
  { loading: () => <div className="min-h-[600px]" /> }
);
const SocialProofSection = dynamic(
  () => import('@/components/sections/SocialProofSection'),
  { loading: () => <div className="min-h-[400px]" /> }
);
const PricingSection = dynamic(
  () => import('@/components/sections/PricingSection'),
  { loading: () => <div className="min-h-[500px]" /> }
);
const FAQSection = dynamic(
  () => import('@/components/sections/FAQSection'),
  { loading: () => <div className="min-h-[400px]" /> }
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <LiveDemoSection />
      <POSAnalysisSection />
      <SocialProofSection />
      <PricingSection />
      <FAQSection />
    </>
  );
}
