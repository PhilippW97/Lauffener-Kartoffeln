import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/app/components/ui/button';
import { getBadgeColor } from '@/app/utils/productUtils';
import { toast } from 'sonner';

export function Checkout() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  // Formatting helper
  const formatPrice = (value: number) => 
    value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });

  // Mock shipping logic
  const shippingCost = cartTotal > 50 ? 0 : 5.90;
  const finalTotal = cartTotal + shippingCost;

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Bestellung erfolgreich simuliert!");
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="font-nunito font-bold text-3xl text-dark-charcoal mb-4">Ihr Warenkorb ist leer</h2>
        <p className="font-proza text-dark-charcoal/60 mb-8 max-w-md text-center">
          Es sieht so aus, als hätten Sie noch keine Kartoffeln ausgewählt. Stöbern Sie doch mal durch unser Sortiment!
        </p>
        <Link to="/produkte">
          <Button className="bg-dusty-olive hover:bg-dusty-olive/90 text-white font-proza px-8 py-6 text-lg">
            Zu den Produkten
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full px-5 md:px-16 2xl:px-24 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <Link to="/produkte" className="inline-flex items-center text-dusty-olive hover:opacity-80 transition-opacity font-proza font-medium mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Shop
          </Link>
          <h1 className="font-nunito font-bold text-4xl md:text-5xl text-dark-charcoal" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            Kasse
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Cart Items Column */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="font-nunito font-bold text-2xl text-dark-charcoal border-b border-black/5 pb-4">
              Ihr Warenkorb
            </h2>

            <div className="flex flex-col gap-6">
              {cart.map((item) => (
                <motion.div 
                  layout
                  key={item.id} 
                  className="flex gap-4 md:gap-6 bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-eggshell rounded-md overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider w-fit mb-2 ${getBadgeColor(item.category)}`}>
                            {item.category}
                        </div>
                        <h3 className="font-nunito font-bold text-xl text-dark-charcoal">
                          {item.name}
                        </h3>
                        <p className="text-dark-charcoal/50 text-sm font-proza mt-1">
                          {item.price} / 10kg
                        </p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="text-red-500/40 hover:text-red-500 transition-colors p-1"
                        aria-label="Artikel entfernen"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center gap-3 bg-eggshell rounded-lg p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-white rounded-md text-dark-charcoal shadow-sm hover:scale-105 active:scale-95 transition-transform"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold text-base w-8 text-center tabular-nums">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-white rounded-md text-dark-charcoal shadow-sm hover:scale-105 active:scale-95 transition-transform"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="font-nunito font-bold text-xl text-dark-charcoal">
                          {/* We need to parse the string price to multiply */}
                          {formatPrice(parseFloat(item.price.replace(',', '.').replace(/[^0-9.]/g, '')) * item.quantity)}
                        </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Column */}
          <div className="lg:w-96 shrink-0">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm sticky top-24">
              <h2 className="font-nunito font-bold text-2xl text-dark-charcoal mb-6">
                Zusammenfassung
              </h2>
              
              <div className="flex flex-col gap-4 mb-6 border-b border-black/5 pb-6">
                <div className="flex justify-between items-center text-dark-charcoal/70 font-proza">
                  <span>Zwischensumme</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between items-center text-dark-charcoal/70 font-proza">
                  <span>Versand</span>
                  <span>{shippingCost === 0 ? 'Kostenlos' : formatPrice(shippingCost)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-1 text-dark-charcoal font-nunito font-bold text-2xl">
                <span>Gesamtsumme</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
              <p className="text-xs text-dark-charcoal/40 font-proza text-right mb-8">
                inkl. MwSt.
              </p>

              <Button 
                onClick={handleCheckout} 
                disabled={isProcessing}
                className="w-full bg-dusty-olive hover:bg-dusty-olive/90 text-white font-proza font-bold text-lg h-14"
              >
                {isProcessing ? 'Verarbeite...' : 'Jetzt bezahlen'}
              </Button>
              
              <div className="mt-6 text-center">
                 <p className="text-xs text-dark-charcoal/40 font-proza">
                   Dies ist eine Demo-Kasse. Es findet keine echte Zahlung statt.
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
