import { motion } from 'motion/react';
import { ProductData } from '@/data/products';
import { getBadgeColor } from '@/app/utils/productUtils';
import { memo } from 'react';

interface ProductCardProps {
  product: ProductData;
  onClick: (product: ProductData) => void;
  index: number;
}

export const ProductCard = memo(function ProductCard({ product, onClick, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.4) }} // Cap delay to avoid long waits on list end
      onClick={() => onClick(product)}
      className="flex flex-col gap-6 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group will-change-transform"
    >
      <div className="w-full h-64 overflow-hidden relative">
        <div className={`absolute top-4 left-4 z-10 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${getBadgeColor(product.category)}`}>
          {product.category}
        </div>
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
        />
        {/* Overlay on hover indicating clickability */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/90 text-dark-charcoal px-4 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out will-change-transform">
            Details ansehen
          </span>
        </div>
      </div>
      <div className="px-6 pb-6 flex flex-col gap-4 flex-1">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-nunito font-bold text-2xl text-dark-charcoal" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            {product.name}
          </h3>
          <p className="font-proza font-bold text-xl text-dusty-olive">
            {product.price}
          </p>
        </div>
        
        <p className="font-proza text-dark-charcoal text-base leading-relaxed line-clamp-2">
          {product.description}
        </p>
        
        {/* Mini usage tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
           {product.usage.slice(0, 2).map(use => (
              <span key={use} className="text-xs bg-eggshell text-dark-charcoal/70 px-2 py-1 rounded-md">
                {use}
              </span>
           ))}
        </div>
      </div>
    </motion.div>
  );
});
