"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";

const POPULAR_DEVICES = [
  "iPhone XR", "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
  "iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max",
  "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max",
  "iPhone 14", "iPhone 14 Pro", "iPhone 14 Pro Max", "iPhone 14 Plus",
  "iPhone 15", "iPhone 15 Pro", "iPhone 15 Pro Max", "iPhone 15 Plus",
  "iPhone 16", "iPhone 16 Pro", "iPhone 16 Pro Max", "iPhone 16 Plus",
  "iPhone 17", "iPhone 17 Pro", "iPhone 17 Pro Max", "iPhone 17 Air"
];

export default function DeviceSelector() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredDevices = POPULAR_DEVICES.filter((device) =>
    device.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (device: string) => {
    setQuery(device);
    setIsOpen(false);
    // Redirect to catalogue pre-filtered for this device
    router.push(`/catalogue?device=${encodeURIComponent(device)}`);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto" ref={wrapperRef}>
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-gray-400" />
        <input
          type="text"
          className="w-full pl-12 pr-10 py-4 rounded-2xl bg-white border border-gray-200 text-[#1d1d1f] text-lg focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent transition-all shadow-sm"
          placeholder="Start typing your iPhone model..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        <ChevronDown className="absolute right-4 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden z-50 max-h-72 overflow-y-auto">
          {filteredDevices.length > 0 ? (
            <ul>
              {filteredDevices.map((device) => (
                <li key={device}>
                  <button
                    className="w-full text-left px-6 py-3 hover:bg-[#f5f5f7] text-[#1d1d1f] transition-colors focus:bg-[#f5f5f7] focus:outline-none"
                    onClick={() => handleSelect(device)}
                  >
                    {device}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-6 py-4 text-gray-500">
              No matching devices found. You can still search for it!
            </div>
          )}
        </div>
      )}
    </div>
  );
}
