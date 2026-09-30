import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 bg-white min-h-screen">
      <ScrollReveal yOffset={20}>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-6 text-center">
          Get in touch.
        </h1>
        <p className="text-lg text-[#86868b] text-center mb-16 max-w-2xl mx-auto">
          Whether you have a question about our cases, shipping, or just want to say hello, we'd love to hear from you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="bg-[#fbfbfd] p-10 rounded-[32px]">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-1">Email</h3>
                <a href="mailto:hello@inscriptcases.com" className="text-lg text-[#0066cc] hover:underline">hello@inscriptcases.com</a>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-1">Phone / WhatsApp</h3>
                <a href="tel:+233200000000" className="text-lg text-[#1d1d1f] hover:underline">+233 20 000 0000</a>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-1">Business Hours</h3>
                <p className="text-lg text-[#1d1d1f]">Mon - Fri, 9am - 5pm (GMT)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#86868b] mb-2">Name</label>
                <input type="text" className="w-full bg-[#f5f5f7] border-transparent rounded-xl py-4 px-4 focus:bg-white focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3] outline-none transition-all" placeholder="Your name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#86868b] mb-2">Email</label>
                <input type="email" className="w-full bg-[#f5f5f7] border-transparent rounded-xl py-4 px-4 focus:bg-white focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3] outline-none transition-all" placeholder="you@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#86868b] mb-2">Message</label>
                <textarea rows={4} className="w-full bg-[#f5f5f7] border-transparent rounded-xl py-4 px-4 focus:bg-white focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3] outline-none transition-all" placeholder="How can we help?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-[#1d1d1f] text-white rounded-xl py-4 font-medium text-[17px] hover:bg-black transition-colors shadow-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
