import { motion } from 'motion/react';
import { InstagramFeed } from '@/app/components/InstagramFeed';
import imgPlaceholderImage9 from "@/assets/map.png";
import { ChevronRight, Mail, Map, MapPin, Phone, Pin } from 'lucide-react';

export function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dusty-olive w-full px-5 md:px-16 2xl:px-24 py-24 md:py-32 2xl:py-40">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-proza font-semibold text-white text-base mb-6">
            Kontakt
          </p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-nunito font-bold text-white text-5xl md:text-6xl 2xl:text-7xl leading-tight tracking-tight mb-8" 
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Erreiche uns
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-proza text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Wir freuen uns auf deine Nachricht und deine Fragen. Kontaktiere uns per E-Mail, Telefon oder besuche uns direkt auf dem Hof.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-eggshell w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-12 2xl:gap-20">
            <div className="flex flex-col gap-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col gap-4"
              >
                <Mail className="w-8 h-8"/>
                <div className="flex flex-col gap-2">
                  <h3 className="font-nunito font-bold text-[22px] tracking-tight text-dark-charcoal" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    E-Mail
                  </h3>
                  <p className="font-proza text-dark-charcoal text-base">
                    Schreib uns jederzeit
                  </p>
                  <a href="mailto:LINK@lauffener-kartoffeln.de" className="font-proza text-dark-charcoal text-base underline hover:opacity-70 transition-opacity">
                    LINK@lauffener-kartoffeln.de
                  </a>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                <Phone className="w-8 h-8" />
                <div className="flex flex-col gap-2">
                  <h3 className="font-nunito font-bold text-[22px] tracking-tight text-dark-charcoal" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Telefon
                  </h3>
                  <p className="font-proza text-dark-charcoal text-base">
                    Ruf uns an
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="font-proza font-semibold text-dark-charcoal text-base">Hansjörg:</p>
                    <a href="tel:+491728469726" className="font-proza text-dark-charcoal text-base underline hover:opacity-70 transition-opacity">
                      0172 / 8469726
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-proza font-semibold text-dark-charcoal text-base">Kilian:</p>
                    <a href="tel:+491739032286" className="font-proza text-dark-charcoal text-base underline hover:opacity-70 transition-opacity">
                      0173 / 9032286
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col gap-4"
              >
                <MapPin className="w-8 h-8" />
                <div className="flex flex-col gap-2">
                  <h3 className="font-nunito font-bold text-[22px] tracking-tight text-dark-charcoal" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Adresse
                  </h3>
                  <p className="font-proza text-dark-charcoal text-base">
                    LINK Kartoffel GbR, Nordheimer Str. 99, 74348 Lauffen am Neckar
                  </p>
                  <button className="flex items-center gap-2 text-dark-charcoal font-proza font-medium text-base hover:opacity-70 transition-opacity mt-2 w-fit"
                    onClick={() => window.open('https://maps.app.goo.gl/Yc5JVxDhat8mqBMW9')}
                  >
                    Route anzeigen
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="w-full h-[400px] 2xl:h-[600px] rounded-lg overflow-hidden">
              <img src={imgPlaceholderImage9} alt="Map location" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="bg-logo-color w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-nunito font-bold text-4xl md:text-5xl leading-tight tracking-tight text-white text-center mb-12" 
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Öffnungszeiten
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              >
                <h3 className="font-nunito font-bold text-xl text-white mb-4" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Hofladen
                </h3>
                <div className="flex flex-col gap-2 font-proza text-white text-base">
                  <div className="flex justify-between">
                    <span>Montag - Freitag:</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag:</span>
                    <span>8:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag:</span>
                    <span>Geschlossen</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              >
                <h3 className="font-nunito font-bold text-xl text-white mb-4" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Telefon
                </h3>
                <div className="flex flex-col gap-2 font-proza text-white text-base">
                  <div className="flex justify-between">
                    <span>Montag - Freitag:</span>
                    <span>7:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag:</span>
                    <span>8:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag:</span>
                    <span>Geschlossen</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <InstagramFeed />
    </>
  );
}
