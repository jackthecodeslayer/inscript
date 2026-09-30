import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      
      {/* Hero Section */}
      <section className="w-full text-center pt-32 pb-20 px-4 bg-[#fbfbfd]">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="text-[#1d1d1f] text-sm font-semibold tracking-widest uppercase mb-6 animate-on-load">
            Our Story
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-[#1d1d1f] mb-8 animate-on-load delay-100">
            More than just a case.<br />A conversation starter.
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] font-normal leading-relaxed animate-on-load delay-200">
            Inscript was born out of a simple desire: to keep the Word of God close to us in our everyday lives, in a beautiful, premium format.
          </p>
        </div>
      </section>

      {/* Image Placeholder */}
      <ScrollReveal yOffset={40}>
        <div className="w-full max-w-6xl mx-auto px-4 -mt-10 mb-20 relative z-10">
          <div className="w-full aspect-video bg-[#f5f5f7] rounded-[40px] shadow-xl flex items-center justify-center overflow-hidden relative">
            <Image 
              src="/images/11/10-025-11.jpg" 
              alt="Inscript Lifestyle" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Mission Section */}
      <section className="w-full max-w-3xl mx-auto px-4 py-20 text-center">
        <ScrollReveal yOffset={30}>
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-8">Our Mission</h2>
          <p className="text-lg text-[#1d1d1f] leading-relaxed mb-6">
            In today's fast-paced world, our phones are the one item we look at more than anything else. We realized that this screen time is an incredible opportunity for daily inspiration. 
          </p>
          <p className="text-lg text-[#1d1d1f] leading-relaxed mb-6">
            We design cases that are not only highly protective and aesthetically minimal, but carry profound truths. Whether it is a subtle cross or a full verse, every Inscript case is designed to remind you of what truly matters, and to spark meaningful conversations with those around you.
          </p>
        </ScrollReveal>
      </section>

      {/* Quality Section */}
      <section className="w-full bg-[#fbfbfd] py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal yOffset={30}>
            <div className="w-full aspect-square bg-white rounded-[40px] shadow-sm border border-gray-100 flex items-center justify-center relative overflow-hidden">
              <Image 
                src="/images/13 Pro/10-046-13P.jpg" 
                alt="Case Details" 
                fill 
                className="object-cover" 
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} yOffset={30}>
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-6">Uncompromising Quality.</h2>
              <p className="text-lg text-[#86868b] leading-relaxed mb-6">
                Faith deserves excellence. We spent months sourcing the perfect materials that offer military-grade drop protection without the bulk. 
              </p>
              <p className="text-lg text-[#86868b] leading-relaxed">
                Our matte finishes resist fingerprints, our raised bezels protect your lenses, and our prints are embedded deeply into the material so they never fade. It's protection you can trust, with a message that endures.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full text-center py-32 px-4 bg-white">
        <ScrollReveal yOffset={20}>
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-8">Ready to find your case?</h2>
          <Link 
            href="/catalogue" 
            className="inline-block bg-[#0071e3] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Explore the Collection
          </Link>
        </ScrollReveal>
      </section>

    </div>
  );
}
