import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 bg-white min-h-screen">
      <ScrollReveal yOffset={20}>
        <h1 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-10 text-center">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg text-[#86868b] max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-[#1d1d1f]">1. Information We Collect</h2>
          <p>
            When you visit the Inscript website, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support.
          </p>

          <h2 className="text-2xl font-semibold text-[#1d1d1f]">2. How We Use Your Information</h2>
          <p>
            We use your personal Information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up to date on new products, services, and offers.
          </p>

          <h2 className="text-2xl font-semibold text-[#1d1d1f]">3. Sharing Personal Information</h2>
          <p>
            We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you. For example, we use Paystack for payment processing and Sanity as our backend CMS. We do not sell your personal information to third parties.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
