import ScrollReveal from "@/components/ScrollReveal";

export default function ReturnsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 bg-white min-h-screen">
      <ScrollReveal yOffset={20}>
        <h1 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-10 text-center">
          Returns & Exchanges
        </h1>
        
        <div className="prose prose-lg text-[#86868b] max-w-none">
          <h2 className="text-2xl font-semibold text-[#1d1d1f] mt-8 mb-4">Our Guarantee</h2>
          <p>
            At Inscript, we stand behind the quality of every case we make. If you are not completely satisfied with your purchase, we are here to help.
          </p>

          <h2 className="text-2xl font-semibold text-[#1d1d1f] mt-8 mb-4">Return Policy</h2>
          <p>
            You have <strong>7 days</strong> from the date you receive your item to request a return. To be eligible for a return, your case must be unused, in the same condition that you received it, and in its original packaging.
          </p>

          <h2 className="text-2xl font-semibold text-[#1d1d1f] mt-8 mb-4">How to Initiate a Return</h2>
          <p>
            To start a return, please contact us at <strong>support@inscriptcases.com</strong> with your order number and the reason for the return. We will provide you with instructions on how and where to send your package.
          </p>

          <h2 className="text-2xl font-semibold text-[#1d1d1f] mt-8 mb-4">Refunds</h2>
          <p>
            Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed and a credit will automatically be applied to your original method of payment within 3-5 business days.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
