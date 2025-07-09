import BusinessSection from "@/components/BusinessSection";
import CTASection from "@/components/CTASection";
import ExperienceWhyUsSection from "@/components/ExperienceWhyUsSection";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-800">
      {/* <Header /> */}
      <HeroSection />
      <ExperienceWhyUsSection />
      <BusinessSection />
      <CTASection />
      {/* <Footer /> */}
    </div>
  );
}