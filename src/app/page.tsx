import Link from "next/link";
import Image from "next/image";
import DeviceSelector from "@/components/DeviceSelector";
import HeroCarousel from "@/components/HeroCarousel";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#fbfbfd]">
      
      {/* First Hero Section */}
      <section className="w-full text-center min-h-[85vh] flex flex-col justify-center items-center px-4 pt-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Tiny Logo */}
          <div className="text-[#1d1d1f] text-sm font-semibold tracking-widest uppercase mb-6 animate-on-load">
            Inscript
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-[#1d1d1f] mb-8 animate-on-load delay-100">
            Faith in every case.
          </h1>
          
          <p className="text-base md:text-lg text-[#86868b] max-w-2xl font-serif italic leading-relaxed animate-on-load delay-200">
            "These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up. Tie them as symbols on your hands and bind them on your foreheads. Write them on the doorframes of your houses and on your gates."
            <br />
            <span className="block mt-4 not-italic font-medium text-[#1d1d1f] text-sm">— Deuteronomy 6:6-9</span>
          </p>
        </div>
      </section>

      {/* Second Hero Section (Carousel & Phone Selector) */}
      <ScrollReveal delay={0.2} yOffset={40}>
        <section className="w-full text-center py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
              Find your perfect fit.
            </h2>
            
            <div className="max-w-xl mx-auto mb-12">
              <h3 className="text-lg font-medium text-[#86868b] mb-4">Select your device</h3>
              <DeviceSelector />
            </div>
          </div>
          
          <HeroCarousel />
        </section>
      </ScrollReveal>

      {/* Browse Cases Section */}
      <ScrollReveal delay={0.2} yOffset={40}>
        <section className="w-full text-center py-24 px-4 bg-[#fbfbfd]">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-8">
            Designed for protection.<br/>Created for inspiration.
          </h2>
          
          <Link 
            href="/catalogue" 
            className="inline-block bg-[#1d1d1f] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Browse All Cases
          </Link>
        </section>
      </ScrollReveal>

    </div>
  );
}
