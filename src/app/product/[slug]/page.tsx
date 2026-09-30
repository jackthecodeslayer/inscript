import Link from 'next/link';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';
import { ArrowLeft } from 'lucide-react';
import fs from 'fs';
import path from 'path';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Dynamically find the image based on the slug
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  let productImageUrl = '/images/11/02-051-11.jpg'; // fallback
  let productDevice = 'iPhone 11';
  let productTitle = 'Faith Case';

  try {
    const decodedSlug = decodeURIComponent(resolvedParams.slug);
    const models = fs.readdirSync(imagesDir).filter(item => fs.statSync(path.join(imagesDir, item)).isDirectory());
    for (const model of models) {
      const files = fs.readdirSync(path.join(imagesDir, model));
      // Try exact match first, since our new slug is the exact encoded filename
      const match = files.find(f => f === decodedSlug || f.startsWith(decodedSlug));
      if (match) {
        productImageUrl = `/images/${model}/${match}`;
        productDevice = model;
        productTitle = `Inscript Case (${model})`;
        break;
      }
    }
  } catch (e) {
    console.error(e);
  }

  const product = {
    id: resolvedParams.slug,
    title: productTitle,
    price: 150,
    category: 'Premium Series',
    devices: [productDevice],
    imageUrl: productImageUrl,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/catalogue" className="inline-flex items-center text-sm font-medium text-[#0066cc] hover:underline mb-10">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to catalogue
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Product Images */}
        <div className="flex-1 w-full">
          <div className="w-full aspect-[4/5] bg-white border border-gray-100 shadow-sm rounded-[40px] flex items-center justify-center overflow-hidden relative">
            <Image 
              src={product.imageUrl}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex gap-4 mt-4">
            <div className="w-24 h-24 bg-[#f5f5f7] rounded-2xl flex-shrink-0 cursor-pointer overflow-hidden relative">
              <Image src={product.imageUrl} alt={product.title} fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 w-full flex flex-col justify-center">
          <p className="text-[#0066cc] font-medium text-sm tracking-widest uppercase mb-4">{product.category}</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
            {product.title}
          </h1>
          <p className="text-2xl text-[#1d1d1f] font-medium mb-6">GH₵ {product.price}</p>
          
          <div className="prose text-[#86868b] leading-relaxed mb-10">
            <p>A beautiful, subtle reminder of His sacrifice. This case offers premium protection with a raised lip for the screen and camera, finished in a soft-touch matte texture.</p>
          </div>

          <div className="border-t border-[#d2d2d7] pt-10">
            <AddToCartButton product={{
              id: product.id,
              title: product.title,
              price: product.price,
              slug: resolvedParams.slug,
              category: product.category,
              supportedDevices: product.devices
            }} />
          </div>

          {/* Shipping Info */}
          <div className="mt-10 bg-[#f5f5f7] rounded-2xl p-6">
            <h3 className="font-semibold text-[#1d1d1f] mb-2">Delivery & Returns</h3>
            <p className="text-sm text-[#86868b]">
              Free delivery across major cities in Ghana for orders above GH₵ 300. Returns accepted within 7 days of delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
