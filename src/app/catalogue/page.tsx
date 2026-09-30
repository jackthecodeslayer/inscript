import Link from 'next/link';
import ProductCard from "@/components/ProductCard";
import fs from 'fs';
import path from 'path';

export default async function CataloguePage({
  searchParams,
}: {
  searchParams: Promise<{ device?: string }>;
}) {
  const resolvedParams = await searchParams;
  // Read models from the folders in public/images
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  let models: string[] = [];
  
  try {
    const items = fs.readdirSync(imagesDir);
    models = items.filter(item => {
      const stat = fs.statSync(path.join(imagesDir, item));
      return stat.isDirectory();
    }).sort(); // e.g. "11", "11 Pro", "12", etc.
  } catch (error) {
    console.error("Could not read images directory", error);
  }

  // Prepend an "All Models" tab if desired, or just let them select one.
  let rawDevice = resolvedParams.device || (models.length > 0 ? models[0] : "All Models");
  
  // If the device came from the homepage search selector, it will have "iPhone " prefix.
  // We need to strip it to match the folder names (e.g., "11 Pro")
  if (rawDevice.startsWith("iPhone ")) {
    rawDevice = rawDevice.replace("iPhone ", "");
  }
  
  const currentDevice = rawDevice;

  // Read images for the selected device to generate products
  let displayedProducts: any[] = [];
  
  if (currentDevice && currentDevice !== "All Models" && models.includes(currentDevice)) {
    try {
      const deviceDir = path.join(imagesDir, currentDevice);
      // Remove the regex filter because some of the Google Drive files are missing extensions
      const files = fs.readdirSync(deviceDir).filter(f => !f.startsWith('.'));
      
      displayedProducts = files.map((file, index) => {
        // Create a mock product object from the file
        return {
          id: file,
          title: `Inscript Case (${currentDevice})`,
          price: 150,
          slug: encodeURIComponent(file), // use filename as slug (encoded for safety)
          category: 'Premium Series',
          imageUrl: `/images/${currentDevice}/${file}`,
          devices: [currentDevice]
        };
      });
    } catch (error) {
      console.error(`Could not read images for device ${currentDevice}`, error);
    }
  }

  return (
    <div className="bg-[#fbfbfd] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
            Browse by Phone Model
          </h1>
          <p className="text-lg text-[#86868b]">
            Select your device below to see exact designs available.
          </p>
        </div>

        {/* Device Tabs - Scrollable for many models */}
        <div className="flex overflow-x-auto pb-4 justify-start md:justify-center gap-3 mb-12 scrollbar-hide">
          {models.map((model) => {
            const isActive = currentDevice === model;
            const href = `/catalogue?device=${encodeURIComponent(model)}`;
            
            return (
              <Link 
                key={model} 
                href={href}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive 
                    ? 'bg-[#1d1d1f] text-white' 
                    : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#ebebeb]'
                }`}
              >
                iPhone {model}
              </Link>
            );
          })}
        </div>

        {/* Filtering Options */}
        <div className="flex justify-between items-center mb-8 border-b border-[#d2d2d7] pb-4">
          <div className="text-sm text-[#86868b] font-medium">
            {displayedProducts.length} Designs for iPhone {currentDevice}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {displayedProducts.length > 0 ? (
            displayedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-[#86868b]">
              No images found in the folder for iPhone {currentDevice}.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
