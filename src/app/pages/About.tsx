import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import imgPlaceholderImage8 from "@/assets/3a85234191fcf8654c37cae4e6ee29b8d0dfcf7f.png";
import imgPlaceholderImage2 from "@/assets/55215e51a79c223dc6ed4c1a1a6b72a5e6d8e54e.png";
import imgPlaceholderImage7 from "@/assets/7502bd1c8388a80c90d7cf27db00f74ac2de094a.png";
import imgPlaceholderImage3 from "@/assets/7971e5238dc3cc814471ec24e5dc47b665ca0564.png";

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dusty-olive w-full px-5 md:px-16 2xl:px-24 py-24 md:py-32 2xl:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-12 2xl:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <p className="font-['Proza_Libre:SemiBold',sans-serif] text-white text-base">
                Unsere Geschichte
              </p>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-white text-5xl md:text-6xl 2xl:text-7xl leading-tight tracking-tight" 
                style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
              >
                Familie <span className="text-eggshell">LINK</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-['Proza_Libre:Regular',sans-serif] text-white text-lg md:text-xl leading-relaxed"
              >
                Seit über vier Generationen bauen wir mit Leidenschaft und Hingabe Kartoffeln an. Was als kleiner Familienbetrieb begann, ist heute ein moderner Hof mit tiefen Wurzeln in der Tradition.
              </motion.p>
            </div>
            <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <img src={imgPlaceholderImage8} alt="Familie Link" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-eggshell w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-12 2xl:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-4xl md:text-5xl leading-tight tracking-tight text-[#0c0c0b]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Unsere Philosophie
              </h2>
              <p className="font-['Proza_Libre:Regular',sans-serif] text-[#0c0c0b] text-base md:text-lg leading-relaxed">
                Für uns bedeutet Landwirtschaft mehr als nur Arbeit. Es ist eine Lebenseinstellung, die von Respekt für die Natur, nachhaltigen Anbaumethoden und dem Streben nach höchster Qualität geprägt ist.
              </p>
              <p className="font-['Proza_Libre:Regular',sans-serif] text-[#0c0c0b] text-base md:text-lg leading-relaxed">
                Jede Kartoffel, die unseren Hof verlässt, trägt die Handschrift unserer Familie und die Liebe zum Handwerk in sich. Wir kennen unsere Felder wie unsere Westentasche und wissen genau, was jede Pflanze braucht.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <img src={imgPlaceholderImage2} alt="Felder" className="w-full h-full object-cover rounded-lg" />
              <img src={imgPlaceholderImage7} alt="Ernte" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-logo-color w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-4xl md:text-5xl leading-tight tracking-tight text-white text-center mb-16" 
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Unsere Werte
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-4 text-center"
            >
              <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-2xl text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Qualität
              </h3>
              <p className="font-['Proza_Libre:Regular',sans-serif] text-white text-base leading-relaxed">
                Nur die besten Kartoffeln verlassen unseren Hof. Jede wird sorgfältig ausgewählt und geprüft.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 text-center"
            >
              <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-2xl text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Nachhaltigkeit
              </h3>
              <p className="font-['Proza_Libre:Regular',sans-serif] text-white text-base leading-relaxed">
                Wir arbeiten im Einklang mit der Natur und setzen auf umweltschonende Anbaumethoden.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 text-center"
            >
              <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-2xl text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Tradition
              </h3>
              <p className="font-['Proza_Libre:Regular',sans-serif] text-white text-base leading-relaxed">
                Über Generationen weitergegebenes Wissen und Erfahrung prägen unsere tägliche Arbeit.
              </p>
            </motion.div>
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
            Möchten Sie mehr erfahren?
          </motion.h2>
          <p className="font-['Proza_Libre:Regular',sans-serif] text-[#0c0c0b] text-base md:text-lg leading-relaxed mb-8">
            Besuchen Sie uns auf dem Hof oder kontaktieren Sie uns für weitere Informationen über unsere Arbeit und unsere Produkte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/produkte">
              <button className="bg-dusty-olive px-6 py-2.5 rounded-md text-white font-['Proza_Libre:Medium',sans-serif] text-base shadow-[0px_1px_2px_0px_rgba(12,12,11,0.05),inset_0px_32px_24px_0px_rgba(255,255,255,0.05),inset_0px_2px_1px_0px_rgba(255,255,255,0.25),inset_0px_0px_0px_1px_rgba(12,12,11,0.15),inset_0px_-2px_1px_0px_rgba(0,0,0,0.2)] hover:opacity-90 transition-opacity">
                Unsere Produkte
              </button>
            </Link>
            <Link to="/kontakt">
              <button className="bg-[rgba(12,12,11,0.05)] px-6 py-2.5 rounded-md text-[#0c0c0b] font-['Proza_Libre:Medium',sans-serif] text-base shadow-[0px_1px_2px_0px_rgba(12,12,11,0.05),inset_0px_0px_0px_1px_rgba(12,12,11,0.05),inset_0px_-2px_1px_0px_rgba(12,12,11,0.05)] hover:bg-[rgba(12,12,11,0.1)] transition-colors">
                Kontakt
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
