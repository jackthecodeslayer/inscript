import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  title: string;
  price: number;
  slug: string;
  category: string;
  imageUrl?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group flex flex-col items-center text-center">
      <div className="w-full aspect-[4/5] bg-white border border-gray-100 shadow-sm rounded-[32px] mb-6 overflow-hidden relative flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
        {product.imageUrl ? (
          <Image 
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="text-gray-400 font-medium group-hover:scale-105 transition-transform duration-700 w-full h-full flex items-center justify-center bg-gray-50/50">
            [ Lifestyle Photo ]
          </div>
        )}
      </div>
      <h3 className="text-[#1d1d1f] font-semibold text-lg">{product.title}</h3>
      <p className="text-[#86868b] text-sm mt-1 mb-3">{product.category}</p>
      <p className="text-[#1d1d1f] font-medium">GH₵ {product.price}</p>
    </Link>
  );
}
