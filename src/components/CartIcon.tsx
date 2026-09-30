"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartIcon() {
  const [isClient, setIsClient] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Link href="/cart" className="hover:text-white transition-colors flex items-center relative" aria-label="Cart">
      <ShoppingBag className="w-4 h-4" />
      <AnimatePresence>
        {isClient && totalItems > 0 && (
          <motion.span 
            key={totalItems} // Key change triggers animation
            initial={{ scale: 0, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            className="absolute -top-1.5 -right-2 bg-white text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full"
          >
            {totalItems}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
}
