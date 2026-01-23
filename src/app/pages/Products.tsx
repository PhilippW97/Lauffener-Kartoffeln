import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { useCart } from '@/context/CartContext';
import { products, ProductData } from '@/data/products';
import { ProductCard } from '@/app/components/products/ProductCard';
import { ProductDialog } from '@/app/components/products/ProductDialog';

export function Products() {
  const { toggleCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openProduct = (product: ProductData) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dusty-olive w-full px-5 md:px-16 2xl:px-24 py-24 md:py-32 2xl:py-40">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-proza font-semibold text-white text-base mb-6">
            Unsere Produkte
          </p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-nunito font-bold text-white text-5xl md:text-6xl 2xl:text-7xl leading-tight tracking-tight mb-8" 
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Frisch vom Feld
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-proza text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Entdecken Sie unsere Auswahl an hochwertigen Kartoffelsorten. Jede Sorte wird sorgfältig ausgewählt und unter optimalen Bedingungen angebaut.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-eggshell w-full px-5 md:px-16 lg:px-24 py-16 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index} 
                onClick={openProduct} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Dialog */}
      <ProductDialog 
        product={selectedProduct} 
        isOpen={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />

      {/* Quality Section */}
      <section className="bg-logo-color w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-12 2xl:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h2 className="font-nunito font-bold text-4xl md:text-5xl leading-tight tracking-tight text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Qualität, die man schmeckt
              </h2>
              <p className="font-proza text-white text-base md:text-lg leading-relaxed">
                Alle unsere Kartoffeln werden unter strengen Qualitätskontrollen angebaut. Wir verwenden nur natürliche Düngemittel und setzen auf nachhaltige Anbaumethoden, die sowohl der Umwelt als auch der Qualität unserer Produkte zugutekommen.
              </p>
              <p className="font-proza text-white text-base md:text-lg leading-relaxed">
                Von der Aussaat bis zur Ernte begleiten wir jede Kartoffel mit größter Sorgfalt. So können wir garantieren, dass nur die besten Kartoffeln auf Ihren Teller kommen.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="font-nunito font-bold text-4xl text-white mb-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  100%
                </p>
                <p className="font-proza text-white text-base">
                  Regional angebaut
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="font-nunito font-bold text-4xl text-white mb-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  4+
                </p>
                <p className="font-proza text-white text-base">
                  Generationen Erfahrung
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="font-nunito font-bold text-4xl text-white mb-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  6
                </p>
                <p className="font-proza text-white text-base">
                  Verschiedene Sorten
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="font-nunito font-bold text-4xl text-white mb-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  365
                </p>
                <p className="font-proza text-white text-base">
                  Tage Verfügbarkeit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-eggshell w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-nunito font-bold text-4xl md:text-5xl leading-tight tracking-tight text-dark-charcoal mb-6" 
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Bereit zum Bestellen?
          </motion.h2>
          <p className="font-proza text-dark-charcoal text-base md:text-lg leading-relaxed mb-8">
            Füllen Sie Ihren Warenkorb und schließen Sie die Bestellung in unserem Shop ab.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button 
                onClick={toggleCart} 
                className="bg-dusty-olive hover:bg-dusty-olive/90 text-white h-12 px-8 text-lg font-proza"
             >
                Warenkorb ansehen
             </Button>
            <Link to="/kontakt">
              <button className="bg-dark-charcoal-05 px-6 py-2.5 rounded-md text-dark-charcoal font-proza font-medium text-base shadow-[0px_1px_2px_0px_var(--color-dark-charcoal-05),inset_0px_0px_0px_1px_var(--color-dark-charcoal-05),inset_0px_-2px_1px_0px_var(--color-dark-charcoal-05)] hover:bg-dark-charcoal/10 transition-colors h-12 flex items-center justify-center">
                Kontakt aufnehmen
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

