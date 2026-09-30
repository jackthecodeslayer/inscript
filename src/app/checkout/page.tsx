"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  if (items.length === 0) {
    router.push("/cart");
    return null;
  }

  const total = getTotalPrice();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData, cartItems: items, total }),
      });
      
      const data = await response.json();
      if (data.success) {
        alert("Success! Your order has been placed. (Email sent to vendor in background).");
        clearCart();
        router.push("/");
      } else {
        alert("Something went wrong with the order.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting order.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-8 text-center">
        Checkout
      </h1>

      <div className="bg-[#fbfbfd] p-8 md:p-12 rounded-3xl shadow-sm border border-[#f5f5f7]">
        <h2 className="text-2xl font-semibold mb-6">Shipping Details</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#86868b] mb-2">First Name</label>
              <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-white border border-[#d2d2d7] rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#0071e3] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#86868b] mb-2">Last Name</label>
              <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-white border border-[#d2d2d7] rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#0071e3] outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#86868b] mb-2">Email</label>
              <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white border border-[#d2d2d7] rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#0071e3] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#86868b] mb-2">Phone Number</label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white border border-[#d2d2d7] rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#0071e3] outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#86868b] mb-2">Delivery Address</label>
            <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-white border border-[#d2d2d7] rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#0071e3] outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#86868b] mb-2">City</label>
            <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-white border border-[#d2d2d7] rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#0071e3] outline-none" />
          </div>

          <div className="pt-8 border-t border-[#d2d2d7] mt-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-medium text-[#1d1d1f]">Total to Pay</span>
              <span className="text-2xl font-bold text-[#1d1d1f]">GH₵ {total}</span>
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white rounded-xl py-4 font-normal text-[17px] shadow-lg transition-all ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1d1d1f] hover:bg-black hover:shadow-xl transform hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? 'Processing Order...' : 'Complete Order Demo'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
