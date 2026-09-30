"use client";

import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";

interface Product {
  id: string;
  title: string;
  price: number;
  slug: string;
  supportedDevices: string[];
}

export default function AddToCartButton({ product }: { product: Product }) {
  const [selectedDevice, setSelectedDevice] = useState(product.supportedDevices[0]);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      device: selectedDevice,
    });
    alert(`Added ${product.title} for ${selectedDevice} to cart!`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <label htmlFor="device-select" className="block text-sm font-semibold text-[#1d1d1f] mb-2">
          Select Your Device
        </label>
        <div className="relative">
          <select
            id="device-select"
            value={selectedDevice}
            onChange={(e) => setSelectedDevice(e.target.value)}
            className="w-full appearance-none bg-white border border-[#d2d2d7] rounded-xl py-4 pl-4 pr-10 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all shadow-sm"
          >
            {product.supportedDevices.map((device) => (
              <option key={device} value={device}>
                {device}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-[#0071e3] text-white rounded-xl py-4 font-normal text-[17px] hover:bg-[#0077ed] transition-colors shadow-sm"
      >
        Add to Cart
      </button>
    </div>
  );
}
