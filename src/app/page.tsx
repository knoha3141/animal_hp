import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import FeatureSection from "@/components/FeatureSection";
import ServicesSection from "@/components/ServicesSection";
import RecruitSection from "@/components/RecruitSection";
import AccessSection from "@/components/AccessSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewsSection />
      <FeatureSection />
      <ServicesSection />
      <RecruitSection />
      <AccessSection />
    </main>
  );
}
