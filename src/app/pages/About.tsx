import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import imgPlaceholderImage8 from "@/assets/IMG_8858.webp";
import imgPlaceholderImage2 from "@/assets/IMG_8818.webp";
import imgPlaceholderImage7 from "@/assets/IMG_8823.webp";

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dusty-olive w-full px-5 md:px-16 2xl:px-24 py-24 md:py-32 2xl:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-12 2xl:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <p className="font-proza font-semibold text-white text-base">
                Unsere Geschichte
              </p>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-nunito font-bold text-white text-5xl md:text-6xl 2xl:text-7xl leading-tight tracking-tight" 
                style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
              >
                Familie <span className="text-eggshell">LINK</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-proza text-white text-lg md:text-xl leading-relaxed"
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
              <h2 className="font-nunito font-bold text-4xl md:text-5xl leading-tight tracking-tight text-dark-charcoal" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Unsere Philosophie
              </h2>
              <p className="font-proza text-dark-charcoal text-base md:text-lg leading-relaxed">
                Für uns bedeutet Landwirtschaft mehr als nur Arbeit. Es ist eine Lebenseinstellung, die von Respekt für die Natur, nachhaltigen Anbaumethoden und dem Streben nach höchster Qualität geprägt ist.
              </p>
              <p className="font-proza text-dark-charcoal text-base md:text-lg leading-relaxed">
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
            className="font-nunito font-bold text-4xl md:text-5xl leading-tight tracking-tight text-white text-center mb-16" 
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
              <h3 className="font-nunito font-bold text-2xl text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Qualität
              </h3>
              <p className="font-proza text-white text-base leading-relaxed">
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
              <h3 className="font-nunito font-bold text-2xl text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Nachhaltigkeit
              </h3>
              <p className="font-proza text-white text-base leading-relaxed">
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
              <h3 className="font-nunito font-bold text-2xl text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Tradition
              </h3>
              <p className="font-proza text-white text-base leading-relaxed">
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
            className="font-nunito font-bold text-4xl md:text-5xl leading-tight tracking-tight text-dark-charcoal mb-6" 
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Möchten Sie mehr erfahren?
          </motion.h2>
          <p className="font-proza text-dark-charcoal text-base md:text-lg leading-relaxed mb-8">
            Besuchen Sie uns auf dem Hof oder kontaktieren Sie uns für weitere Informationen über unsere Arbeit und unsere Produkte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/produkte">
              <button className="bg-dusty-olive px-6 py-2.5 rounded-md text-white font-proza font-medium text-base shadow-[0px_1px_2px_0px_var(--color-dark-charcoal-05),inset_0px_32px_24px_0px_rgba(255,255,255,0.05),inset_0px_2px_1px_0px_rgba(255,255,255,0.25),inset_0px_0px_0px_1px_dark-charcoal/15,inset_0px_-2px_1px_0px_rgba(0,0,0,0.2)] hover:opacity-90 transition-opacity">
                Unsere Produkte
              </button>
            </Link>
            <Link to="/kontakt">
              <button className="bg-dark-charcoal-05 px-6 py-2.5 rounded-md text-dark-charcoal font-proza font-medium text-base shadow-[0px_1px_2px_0px_var(--color-dark-charcoal-05),inset_0px_0px_0px_1px_var(--color-dark-charcoal-05),inset_0px_-2px_1px_0px_var(--color-dark-charcoal-05)] hover:bg-dark-charcoal/10 transition-colors">
                Kontakt
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
