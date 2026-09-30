import ScrollReveal from "@/components/ScrollReveal";

export default function ShippingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 bg-white min-h-screen">
      <ScrollReveal yOffset={20}>
        <h1 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-10 text-center">
          Shipping & Delivery
        </h1>
        
        <div className="prose prose-lg text-[#86868b] max-w-none">
          <h2 className="text-2xl font-semibold text-[#1d1d1f] mt-8 mb-4">Domestic Shipping (Ghana)</h2>
          <p>
            We offer fast and reliable shipping across Ghana. Delivery within Accra typically takes 1-2 business days. For regions outside Greater Accra, please allow 3-5 business days for your Inscript case to arrive.
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Standard Delivery (Accra):</strong> GH₵ 30</li>
            <li><strong>Express Delivery (Accra - Same Day):</strong> GH₵ 60</li>
            <li><strong>Outside Accra:</strong> GH₵ 50</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#1d1d1f] mt-8 mb-4">Free Shipping</h2>
          <p>
            We are pleased to offer <strong>free standard shipping</strong> on all orders over GH₵ 300 within Ghana.
          </p>

          <h2 className="text-2xl font-semibold text-[#1d1d1f] mt-8 mb-4">Order Tracking</h2>
          <p>
            Once your order has been dispatched, you will receive an email containing a tracking number and a link to track your package's journey.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
