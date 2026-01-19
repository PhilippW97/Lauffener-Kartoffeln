import { motion } from 'motion/react';
import imgPlaceholderImage9 from "@/assets/map.png";

const SVG_PATHS = {
  mail: "M4.73877 5.6263H27.2612C27.7386 5.6263 28.1473 5.79537 28.5093 6.15755C28.8715 6.51955 29.0405 6.92824 29.0405 7.4056V24.5951C29.0405 25.0696 28.8713 25.4757 28.5093 25.8363C28.1474 26.1971 27.7391 26.3665 27.2612 26.3665H4.73877C4.32308 26.3665 3.95997 26.237 3.63428 25.9632L3.49658 25.8372C3.13594 25.4768 2.96729 25.0702 2.96729 24.5951V7.4056C2.96729 6.92783 3.13602 6.51933 3.49658 6.15755H3.49756C3.85816 5.79552 4.26423 5.6263 4.73877 5.6263ZM4.23877 7.56576V25.0951H27.7612V8.49447L26.9868 9.00423L16.3657 15.9964C16.2804 16.0413 16.2047 16.0773 16.1372 16.1038C16.116 16.1122 16.0731 16.1234 15.9995 16.1234C15.9262 16.1233 15.884 16.1122 15.8628 16.1038C15.7951 16.0772 15.719 16.0414 15.6333 15.9964L5.23877 9.15267V8.22103L15.7261 15.0902L15.9995 15.2699L16.2729 15.0902L27.4019 7.82357L28.8081 6.9056H3.229L4.23877 7.56576Z",
  phone: "M5.49202 4.29297H10.159C10.4429 4.29305 10.6543 4.37934 10.827 4.54199C11.0199 4.72357 11.1656 4.97248 11.2508 5.3125L12.1405 9.34082C12.1874 9.6688 12.1776 9.93944 12.1248 10.1611C12.0758 10.3672 11.9768 10.5392 11.8211 10.6875L11.8153 10.6943L8.45784 14.0049L8.17855 14.2803L8.37874 14.6172C8.94455 15.568 9.54556 16.458 10.1815 17.2871C10.8202 18.1199 11.5294 18.912 12.3084 19.6631C13.122 20.5033 13.9723 21.2654 14.8592 21.9482C15.7522 22.6357 16.6848 23.2372 17.6571 23.752L17.9881 23.9277L18.2498 23.6592L21.4559 20.3691L21.4657 20.3584C21.6698 20.1369 21.8904 19.9983 22.1297 19.9268L22.1307 19.9277C22.3247 19.8702 22.5181 19.8482 22.7127 19.8623L22.908 19.8887L26.6815 20.7236C27.0065 20.8142 27.2512 20.9736 27.4364 21.1973C27.6173 21.4158 27.7068 21.6631 27.7069 21.96V26.5078C27.7069 26.8656 27.5921 27.1386 27.367 27.3613C27.1393 27.5866 26.8659 27.6992 26.5155 27.6992C23.9878 27.6991 21.404 27.0919 18.7596 25.8633C16.116 24.6351 13.6586 22.8892 11.3885 20.6191C9.26049 18.4911 7.59223 16.1973 6.37777 13.7383L6.14046 13.2451L5.91683 12.749C4.83529 10.2746 4.30062 7.85669 4.30062 5.49219C4.30064 5.17911 4.38843 4.92968 4.56136 4.7207L4.64046 4.63379C4.8654 4.40761 5.13797 4.29297 5.49202 4.29297ZM5.58773 6.09375C5.62844 7.03203 5.77599 8.01839 6.02718 9.05176C6.27992 10.0914 6.67731 11.2422 7.2137 12.501L7.50277 13.1797L8.0262 12.6592L10.7176 9.98145L10.911 9.78906L10.8543 9.52246L10.0955 5.96777L10.0116 5.57227H5.56527L5.58773 6.09375ZM26.4285 21.9717L26.0291 21.8896L22.7157 21.2041L22.4442 21.1475L22.2528 21.3486L19.6356 24.0918L19.1541 24.5957L19.786 24.8896C20.7021 25.3158 21.6961 25.6624 22.7664 25.9307C23.838 26.1992 24.8839 26.3605 25.9032 26.4121L26.4285 26.4385V21.9717Z",
  location: "M16.0002 2.95964C18.7426 2.95968 21.1536 3.91589 23.2531 5.84733C25.3237 7.75212 26.3741 10.3098 26.3742 13.5758C26.3742 14.915 26.0791 16.2523 25.4806 17.5895C24.871 18.9519 24.1054 20.2559 23.1847 21.5026C22.258 22.7575 21.2513 23.9288 20.1642 25.0163C19.065 26.1162 18.0395 27.0899 17.0881 27.9372L17.0832 27.9421L17.0773 27.9469C16.9383 28.0784 16.7783 28.1736 16.592 28.234C16.3814 28.3024 16.181 28.3346 15.9894 28.3346C15.7981 28.3346 15.6024 28.3022 15.4006 28.235C15.2224 28.1757 15.0695 28.0826 14.9367 27.9528L14.9279 27.944L14.9181 27.9362L14.1877 27.277C13.4437 26.5946 12.6593 25.8409 11.8351 25.0163C10.7482 23.9289 9.74129 22.7574 8.81462 21.5026C7.8941 20.2561 7.13051 18.9516 6.5236 17.5895C5.92771 16.2523 5.63395 14.9152 5.63395 13.5758C5.63405 10.3096 6.68317 7.75206 8.75114 5.84733C10.8479 3.91603 13.2577 2.95964 16.0002 2.95964ZM15.9992 4.23893C13.4616 4.23903 11.2986 5.11348 9.54215 6.86003C7.77754 8.61485 6.90553 10.868 6.90544 13.5758C6.90544 15.4228 7.67787 17.4438 9.14079 19.6227C10.6042 21.8022 12.7821 24.2305 15.6593 26.9069L15.9953 27.2204L16.3361 26.9108C19.281 24.2391 21.4794 21.8093 22.9123 19.6217C24.3413 17.4399 25.0949 15.4196 25.0949 13.5758C25.0948 10.8679 24.222 8.61489 22.4572 6.86003C20.7002 5.11343 18.5369 4.23893 15.9992 4.23893ZM15.9972 11.4362C16.5292 11.4363 16.9681 11.6177 17.342 11.9899C17.7152 12.3615 17.8966 12.7992 17.8966 13.3307C17.8966 13.8628 17.7154 14.2996 17.3439 14.6706C16.9725 15.0414 16.5355 15.2223 16.0031 15.2223C15.4701 15.2223 15.0329 15.0422 14.6623 14.6735C14.2922 14.3049 14.1105 13.869 14.1105 13.3366C14.1105 12.8035 14.2906 12.3636 14.6603 11.9899L14.6613 11.9909C15.0301 11.6185 15.4657 11.4362 15.9972 11.4362Z",
  chevronRight: "M9.38708 6.67285C9.48791 6.67285 9.56488 6.70326 9.64294 6.78125L14.5873 11.7256C14.6412 11.7795 14.6663 11.8215 14.6781 11.8496V11.8506C14.6929 11.8861 14.7015 11.9259 14.7015 11.9746C14.7015 12.0233 14.6929 12.0631 14.6781 12.0986V12.0996C14.6663 12.1277 14.6412 12.1697 14.5873 12.2236L9.61853 17.1924C9.54076 17.2702 9.47362 17.292 9.39294 17.2891C9.29892 17.2856 9.21805 17.2537 9.1322 17.168C9.05408 17.0898 9.02283 17.013 9.02283 16.9121C9.02283 16.8112 9.05408 16.7344 9.1322 16.6562L13.8138 11.9746L9.10681 7.26758C9.02915 7.18988 9.0072 7.12357 9.01013 7.04297C9.01358 6.9487 9.04615 6.86731 9.1322 6.78125C9.21013 6.70344 9.28649 6.67293 9.38708 6.67285Z",
};


function MailIcon() {
  return (
    <svg className="w-8 h-8" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      <path d={SVG_PATHS.mail} fill="currentColor" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-8 h-8" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      <path d={SVG_PATHS.phone} fill="currentColor" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-8 h-8" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      <path d={SVG_PATHS.location} fill="currentColor" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d={SVG_PATHS.chevronRight} fill="currentColor" />
    </svg>
  );
}

function InstagramPost() {
  return (
    <div 
      feedspring="post" 
      className="group relative aspect-square overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:translate-y-[-4px]"
    >
      <div className="w-full h-full [&_img]:w-full [&_img]:h-full [&_img]:object-cover overflow-hidden">
        <img 
          feed-field="img" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
      </div>
      
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-end p-6 2xl:p-8 text-white">
        <div 
          feed-field="caption" 
          className="font-proza text-sm md:text-base line-clamp-3 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" 
        />
        
        <div className="flex items-center gap-6 font-proza text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-logo-color fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span feed-field="like-count" />
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            <span feed-field="comment-count" />
          </div>
        </div>

        <a 
          feed-field="link"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/30"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

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
                <MailIcon />
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
                <PhoneIcon />
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
                <LocationIcon />
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
                    <ChevronRight />
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

      {/* Instagram Section */}
      <section id="instagram" className="bg-dusty-olive w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 2xl:mb-20">
            <div className="flex flex-col gap-4">
              <p className="font-proza font-semibold text-white/80 text-base">
                Social Media
              </p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-nunito font-bold text-4xl md:text-5xl 2xl:text-[52px] leading-tight tracking-tight text-white" 
                style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
              >
                Instagram <span className="text-eggshell/60">Feed</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a 
                href="https://www.instagram.com/link_lauffener_kartoffeln/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-lg text-dusty-olive font-proza font-medium text-base shadow-[0px_4px_12px_rgba(0,0,0,0.1)] hover:bg-white/90 transition-all hover:translate-y-[-2px]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Folge uns</span>
              </a>
            </motion.div>
          </div>

          {/* FeedSpring Wrapper */}
          <div 
            feedspring="inst_UeITM4rImQzX55AJRVmQK" 
            className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
          >
            <InstagramPost />
            <InstagramPost />
            <InstagramPost />
            <InstagramPost />
            <InstagramPost />
            <InstagramPost />
          </div>
        </div>
      </section>
    </>
  );
}