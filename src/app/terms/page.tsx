import ScrollReveal from "@/components/ScrollReveal";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 bg-white min-h-screen">
      <ScrollReveal yOffset={20}>
        <h1 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-10 text-center">
          Terms of Use
        </h1>
        
        <div className="prose prose-lg text-[#86868b] max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-[#1d1d1f]">1. Acceptance of Terms</h2>
          <p>
            By accessing and placing an order with Inscript, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and Inscript.
          </p>

          <h2 className="text-2xl font-semibold text-[#1d1d1f]">2. Products and Pricing</h2>
          <p>
            All products are subject to availability. We reserve the right to discontinue any product at any time. Prices for all products are subject to change. We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of the product.
          </p>

          <h2 className="text-2xl font-semibold text-[#1d1d1f]">3. Accuracy of Billing and Account Information</h2>
          <p>
            We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
