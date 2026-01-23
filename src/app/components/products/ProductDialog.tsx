import { useState } from 'react';
import { Plus, Minus, ShoppingCart, Check } from 'lucide-react';
import { ProductData } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Dialog, DialogContent, DialogTitle } from '@/app/components/ui/dialog';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { getBadgeColor } from '@/app/utils/productUtils';
import { toast } from 'sonner';

interface ProductDialogProps {
  product: ProductData | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductDialog({ product, isOpen, onOpenChange }: ProductDialogProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onOpenChange(false);
    toast.success(`${quantity}x ${product.name} zum Warenkorb hinzugefügt`);
    // Reset quantity for next time
    setTimeout(() => setQuantity(1), 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
        {/* Custom max-width and height/layout for better mobile experience */}
        {/* We use a custom class architecture to avoid conflicts with default 'grid' and 'p-6' if they persist, though 'DialogContent' usually handles merging */}
        <DialogContent className="w-[95vw] sm:max-w-4xl p-0 overflow-hidden bg-white flex flex-col md:flex-row gap-0">
          
          {/* Image Side */}
          <div className='w-1/2'>
             <img 
               src={product.image} 
               alt={product.name} 
               className="w-full h-full object-cover"
             />
          </div>

          {/* Content Side with Flex Column */}
          <div className="flex flex-col h-full w-full md:w-1/2 min-h-0 bg-white">
            
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10">
                <div className="mb-4 md:mb-6">
                <Badge className={`mb-3 md:mb-4 border-none ${getBadgeColor(product.category)}`}>
                    {product.category}
                </Badge>
                <DialogTitle className="font-nunito font-bold text-3xl md:text-4xl text-dark-charcoal mb-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    {product.name}
                </DialogTitle>
                <p className="text-xl md:text-2xl font-proza font-bold text-dusty-olive mb-1">{product.price}</p>
                <p className="text-sm text-dark-charcoal/50">pro 10kg Sack</p>
                </div>

                <p className="font-proza text-dark-charcoal text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                {product.longDescription}
                </p>

                <div className="bg-eggshell/50 p-4 md:p-6 rounded-lg mb-4">
                <h4 className="font-bold text-xs md:text-sm uppercase tracking-wider text-dark-charcoal/40 mb-3">
                    Bestens geeignet für
                </h4>
                <ul className="space-y-2">
                    {product.usage.map((use, i) => (
                        <li key={i} className="flex items-center gap-2 text-dark-charcoal font-medium font-proza text-sm md:text-base">
                            <span className="bg-white p-1 rounded-full text-dusty-olive shadow-sm shrink-0"><Check className="w-3 h-3" /></span>
                            {use}
                        </li>
                    ))}
                </ul>
                </div>
            </div>

            {/* Sticky Footer (at bottom of the right column) */}
            <div className="p-4 md:p-6 border-t border-black/5 bg-white z-10 shrink-0">
               <div className="flex items-center justify-between gap-3 md:gap-4">
                  <div className="flex items-center gap-2 md:gap-3 bg-eggshell rounded-lg p-1">
                      <button 
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-md text-dark-charcoal shadow-sm hover:scale-105 active:scale-95 transition-transform"
                      >
                          <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-base md:text-lg w-6 md:w-8 text-center">{quantity}</span>
                      <button 
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-md text-dark-charcoal shadow-sm hover:scale-105 active:scale-95 transition-transform"
                      >
                          <Plus className="w-4 h-4" />
                      </button>
                  </div>
                  <Button 
                      onClick={handleAddToCart}
                      className="flex-1 bg-dusty-olive hover:bg-dusty-olive/90 text-white h-10 md:h-12 text-base md:text-lg font-proza"
                  >
                      <ShoppingCart className="mr-2 w-4 h-4 md:w-5 md:h-5" /> In den Warenkorb
                  </Button>
               </div>
            </div>
            
          </div>
        </DialogContent>
      </Dialog>
  );
}
