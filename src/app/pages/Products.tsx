import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import imgPlaceholderImage2 from "@/assets/55215e51a79c223dc6ed4c1a1a6b72a5e6d8e54e.png";
import imgPlaceholderImage1 from "@/assets/bf64f5deee2eb021e74584a36b2466a48cdfc63b.png";
import imgPlaceholderImage6 from "@/assets/1c3196cd034da7c9677bfe640abe64ef7dbf6690.png";
import imgPlaceholderImage3 from "@/assets/7971e5238dc3cc814471ec24e5dc47b665ca0564.png";
import imgPlaceholderImage4 from "@/assets/aa1609e142fb2fa036f4678f4654b587e80d98a6.png";
import imgPlaceholderImage5 from "@/assets/f3b45765bc9c48234308cba38e09b63540d713c8.png";

export function Products() {
  const products = [
    {
      name: "Festkochende Kartoffeln",
      description: "Perfekt für Salate und als Beilage. Behalten ihre Form beim Kochen.",
      image: imgPlaceholderImage2,
    },
    {
      name: "Mehligkochende Kartoffeln",
      description: "Ideal für Püree, Suppen und Eintöpfe. Cremig und aromatisch.",
      image: imgPlaceholderImage1,
    },
    {
      name: "Vorwiegend festkochend",
      description: "Vielseitig einsetzbar. Der Allrounder in der Küche.",
      image: imgPlaceholderImage6,
    },
    {
      name: "Bio-Kartoffeln",
      description: "Zertifiziert biologisch angebaut. Ohne Pestizide und Kunstdünger.",
      image: imgPlaceholderImage3,
    },
    {
      name: "Frühkartoffeln",
      description: "Die ersten Kartoffeln der Saison. Besonders zart und aromatisch.",
      image: imgPlaceholderImage4,
    },
    {
      name: "Lagerkartoffeln",
      description: "Optimal gelagert für ganzjährige Verfügbarkeit. Lange haltbar.",
      image: imgPlaceholderImage5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dusty-olive w-full px-5 md:px-16 2xl:px-24 py-24 md:py-32 2xl:py-40">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-['Proza_Libre:SemiBold',sans-serif] text-white text-base mb-6">
            Unsere Produkte
          </p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-white text-5xl md:text-6xl 2xl:text-7xl leading-tight tracking-tight mb-8" 
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Frisch vom Feld
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Proza_Libre:Regular',sans-serif] text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Entdecken Sie unsere Auswahl an hochwertigen Kartoffelsorten. Jede Sorte wird sorgfältig ausgewählt und unter optimalen Bedingungen angebaut.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-eggshell w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 2xl:gap-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-6 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-full h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-6 pb-6 flex flex-col gap-3">
                  <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-2xl text-[#0c0c0b]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    {product.name}
                  </h3>
                  <p className="font-['Proza_Libre:Regular',sans-serif] text-[#0c0c0b] text-base leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-4xl md:text-5xl leading-tight tracking-tight text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Qualität, die man schmeckt
              </h2>
              <p className="font-['Proza_Libre:Regular',sans-serif] text-white text-base md:text-lg leading-relaxed">
                Alle unsere Kartoffeln werden unter strengen Qualitätskontrollen angebaut. Wir verwenden nur natürliche Düngemittel und setzen auf nachhaltige Anbaumethoden, die sowohl der Umwelt als auch der Qualität unserer Produkte zugutekommen.
              </p>
              <p className="font-['Proza_Libre:Regular',sans-serif] text-white text-base md:text-lg leading-relaxed">
                Von der Aussaat bis zur Ernte begleiten wir jede Kartoffel mit größter Sorgfalt. So können wir garantieren, dass nur die besten Kartoffeln auf Ihren Teller kommen.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-4xl text-white mb-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  100%
                </p>
                <p className="font-['Proza_Libre:Regular',sans-serif] text-white text-base">
                  Regional angebaut
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-4xl text-white mb-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  4+
                </p>
                <p className="font-['Proza_Libre:Regular',sans-serif] text-white text-base">
                  Generationen Erfahrung
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-4xl text-white mb-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  6
                </p>
                <p className="font-['Proza_Libre:Regular',sans-serif] text-white text-base">
                  Verschiedene Sorten
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-4xl text-white mb-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  365
                </p>
                <p className="font-['Proza_Libre:Regular',sans-serif] text-white text-base">
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
            className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-4xl md:text-5xl leading-tight tracking-tight text-[#0c0c0b] mb-6" 
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Bereit zum Bestellen?
          </motion.h2>
          <p className="font-['Proza_Libre:Regular',sans-serif] text-[#0c0c0b] text-base md:text-lg leading-relaxed mb-8">
            Besuchen Sie unseren Online-Shop oder kontaktieren Sie uns direkt für Großbestellungen und individuelle Wünsche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://shop.lauffener-kartoffeln.de"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dusty-olive px-6 py-2.5 rounded-md text-white font-['Proza_Libre:Medium',sans-serif] text-base shadow-[0px_1px_2px_0px_rgba(12,12,11,0.05),inset_0px_32px_24px_0px_rgba(255,255,255,0.05),inset_0px_2px_1px_0px_rgba(255,255,255,0.25),inset_0px_0px_0px_1px_rgba(12,12,11,0.15),inset_0px_-2px_1px_0px_rgba(0,0,0,0.2)] hover:opacity-90 transition-opacity"
            >
              Zum Shop
            </a>
            <Link to="/kontakt">
              <button className="bg-[rgba(12,12,11,0.05)] px-6 py-2.5 rounded-md text-[#0c0c0b] font-['Proza_Libre:Medium',sans-serif] text-base shadow-[0px_1px_2px_0px_rgba(12,12,11,0.05),inset_0px_0px_0px_1px_rgba(12,12,11,0.05),inset_0px_-2px_1px_0px_rgba(12,12,11,0.05)] hover:bg-[rgba(12,12,11,0.1)] transition-colors">
                Kontakt aufnehmen
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
