"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const [isClient, setIsClient] = useState(false);

  // Ensure hydration match
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const total = getTotalPrice();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-12">
        Review your bag.
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-[#86868b] mb-8">Your bag is empty.</p>
          <Link href="/catalogue" className="bg-[#1d1d1f] text-white px-6 py-3 rounded-full hover:bg-black transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Cart Items List */}
          <div className="flex-1">
            <ul className="divide-y divide-[#d2d2d7]">
              {items.map((item) => (
                <li key={item.id} className="py-8 flex gap-6">
                  {/* Image Placeholder */}
                  <div className="w-32 h-40 bg-[#f5f5f7] rounded-2xl flex-shrink-0 flex items-center justify-center text-gray-400 text-xs font-medium">
                    [ Image ]
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-xl font-semibold text-[#1d1d1f]">
                          <Link href={`/product/${item.productId}`} className="hover:underline">
                            {item.title}
                          </Link>
                        </h3>
                        <p className="text-xl font-semibold text-[#1d1d1f]">
                          GH₵ {item.price * item.quantity}
                        </p>
                      </div>
                      <p className="text-[#86868b] mt-1 text-sm">Device: {item.device}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-[#d2d2d7] rounded-lg">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-500 hover:text-black"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-3 font-medium text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-500 hover:text-black"
                        >
                          +
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-[#0066cc] hover:underline text-sm flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Checkout Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-[#fbfbfd] p-8 rounded-3xl sticky top-24">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[#86868b]">
                  <span>Subtotal</span>
                  <span>GH₵ {total}</span>
                </div>
                <div className="flex justify-between text-[#86868b]">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t border-[#d2d2d7] pt-4 flex justify-between font-semibold text-xl text-[#1d1d1f]">
                  <span>Total</span>
                  <span>GH₵ {total}</span>
                </div>
              </div>

              <Link 
                href="/checkout"
                className="w-full block text-center bg-[#0071e3] text-white rounded-xl py-4 font-normal text-[17px] hover:bg-[#0077ed] transition-colors shadow-sm"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
