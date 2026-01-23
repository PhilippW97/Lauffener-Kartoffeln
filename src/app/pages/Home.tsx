import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { InstagramFeed } from '@/app/components/InstagramFeed';

const SVG_PATHS = {
  chevronRight: "M9.38708 6.67285C9.48791 6.67285 9.56488 6.70326 9.64294 6.78125L14.5873 11.7256C14.6412 11.7795 14.6663 11.8215 14.6781 11.8496V11.8506C14.6929 11.8861 14.7015 11.9259 14.7015 11.9746C14.7015 12.0233 14.6929 12.0631 14.6781 12.0986V12.0996C14.6663 12.1277 14.6412 12.1697 14.5873 12.2236L9.61853 17.1924C9.54076 17.2702 9.47362 17.292 9.39294 17.2891C9.29892 17.2856 9.21805 17.2537 9.1322 17.168C9.05408 17.0898 9.02283 17.013 9.02283 16.9121C9.02283 16.8112 9.05408 16.7344 9.1322 16.6562L13.8138 11.9746L9.10681 7.26758C9.02915 7.18988 9.0072 7.12357 9.01013 7.04297C9.01358 6.9487 9.04615 6.86731 9.1322 6.78125C9.21013 6.70344 9.28649 6.67293 9.38708 6.67285Z",
  mail: "M4.73877 5.6263H27.2612C27.7386 5.6263 28.1473 5.79537 28.5093 6.15755C28.8715 6.51955 29.0405 6.92824 29.0405 7.4056V24.5951C29.0405 25.0696 28.8713 25.4757 28.5093 25.8363C28.1474 26.1971 27.7391 26.3665 27.2612 26.3665H4.73877C4.32308 26.3665 3.95997 26.237 3.63428 25.9632L3.49658 25.8372C3.13594 25.4768 2.96729 25.0702 2.96729 24.5951V7.4056C2.96729 6.92783 3.13602 6.51933 3.49658 6.15755H3.49756C3.85816 5.79552 4.26423 5.6263 4.73877 5.6263ZM4.23877 7.56576V25.0951H27.7612V8.49447L26.9868 9.00423L16.3657 15.9964C16.2804 16.0413 16.2047 16.0773 16.1372 16.1038C16.116 16.1122 16.0731 16.1234 15.9995 16.1234C15.9262 16.1233 15.884 16.1122 15.8628 16.1038C15.7951 16.0772 15.719 16.0414 15.6333 15.9964L5.23877 9.15267V8.22103L15.7261 15.0902L15.9995 15.2699L16.2729 15.0902L27.4019 7.82357L28.8081 6.9056H3.229L4.23877 7.56576Z",
  phone: "M5.49202 4.29297H10.159C10.4429 4.29305 10.6543 4.37934 10.827 4.54199C11.0199 4.72357 11.1656 4.97248 11.2508 5.3125L12.1405 9.34082C12.1874 9.6688 12.1776 9.93944 12.1248 10.1611C12.0758 10.3672 11.9768 10.5392 11.8211 10.6875L11.8153 10.6943L8.45784 14.0049L8.17855 14.2803L8.37874 14.6172C8.94455 15.568 9.54556 16.458 10.1815 17.2871C10.8202 18.1199 11.5294 18.912 12.3084 19.6631C13.122 20.5033 13.9723 21.2654 14.8592 21.9482C15.7522 22.6357 16.6848 23.2372 17.6571 23.752L17.9881 23.9277L18.2498 23.6592L21.4559 20.3691L21.4657 20.3584C21.6698 20.1369 21.8904 19.9983 22.1297 19.9268L22.1307 19.9277C22.3247 19.8702 22.5181 19.8482 22.7127 19.8623L22.908 19.8887L26.6815 20.7236C27.0065 20.8142 27.2512 20.9736 27.4364 21.1973C27.6173 21.4158 27.7068 21.6631 27.7069 21.96V26.5078C27.7069 26.8656 27.5921 27.1386 27.367 27.3613C27.1393 27.5866 26.8659 27.6992 26.5155 27.6992C23.9878 27.6991 21.404 27.0919 18.7596 25.8633C16.116 24.6351 13.6586 22.8892 11.3885 20.6191C9.26049 18.4911 7.59223 16.1973 6.37777 13.7383L6.14046 13.2451L5.91683 12.749C4.83529 10.2746 4.30062 7.85669 4.30062 5.49219C4.30064 5.17911 4.38843 4.92968 4.56136 4.7207L4.64046 4.63379C4.8654 4.40761 5.13797 4.29297 5.49202 4.29297ZM5.58773 6.09375C5.62844 7.03203 5.77599 8.01839 6.02718 9.05176C6.27992 10.0914 6.67731 11.2422 7.2137 12.501L7.50277 13.1797L8.0262 12.6592L10.7176 9.98145L10.911 9.78906L10.8543 9.52246L10.0955 5.96777L10.0116 5.57227H5.56527L5.58773 6.09375ZM26.4285 21.9717L26.0291 21.8896L22.7157 21.2041L22.4442 21.1475L22.2528 21.3486L19.6356 24.0918L19.1541 24.5957L19.786 24.8896C20.7021 25.3158 21.6961 25.6624 22.7664 25.9307C23.838 26.1992 24.8839 26.3605 25.9032 26.4121L26.4285 26.4385V21.9717Z",
  location: "M16.0002 2.95964C18.7426 2.95968 21.1536 3.91589 23.2531 5.84733C25.3237 7.75212 26.3741 10.3098 26.3742 13.5758C26.3742 14.915 26.0791 16.2523 25.4806 17.5895C24.871 18.9519 24.1054 20.2559 23.1847 21.5026C22.258 22.7575 21.2513 23.9288 20.1642 25.0163C19.065 26.1162 18.0395 27.0899 17.0881 27.9372L17.0832 27.9421L17.0773 27.9469C16.9383 28.0784 16.7783 28.1736 16.592 28.234C16.3814 28.3024 16.181 28.3346 15.9894 28.3346C15.7981 28.3346 15.6024 28.3022 15.4006 28.235C15.2224 28.1757 15.0695 28.0826 14.9367 27.9528L14.9279 27.944L14.9181 27.9362L14.1877 27.277C13.4437 26.5946 12.6593 25.8409 11.8351 25.0163C10.7482 23.9289 9.74129 22.7574 8.81462 21.5026C7.8941 20.2561 7.13051 18.9516 6.5236 17.5895C5.92771 16.2523 5.63395 14.9152 5.63395 13.5758C5.63405 10.3096 6.68317 7.75206 8.75114 5.84733C10.8479 3.91603 13.2577 2.95964 16.0002 2.95964ZM15.9992 4.23893C13.4616 4.23903 11.2986 5.11348 9.54215 6.86003C7.77754 8.61485 6.90553 10.868 6.90544 13.5758C6.90544 15.4228 7.67787 17.4438 9.14079 19.6227C10.6042 21.8022 12.7821 24.2305 15.6593 26.9069L15.9953 27.2204L16.3361 26.9108C19.281 24.2391 21.4794 21.8093 22.9123 19.6217C24.3413 17.4399 25.0949 15.4196 25.0949 13.5758C25.0948 10.8679 24.222 8.61489 22.4572 6.86003C20.7002 5.11343 18.5369 4.23893 15.9992 4.23893ZM15.9972 11.4362C16.5292 11.4363 16.9681 11.6177 17.342 11.9899C17.7152 12.3615 17.8966 12.7992 17.8966 13.3307C17.8966 13.8628 17.7154 14.2996 17.3439 14.6706C16.9725 15.0414 16.5355 15.2223 16.0031 15.2223C15.4701 15.2223 15.0329 15.0422 14.6623 14.6735C14.2922 14.3049 14.1105 13.869 14.1105 13.3366C14.1105 12.8035 14.2906 12.3636 14.6603 11.9899L14.6613 11.9909C15.0301 11.6185 15.4657 11.4362 15.9972 11.4362Z",
};

import imgHeader111 from "@/assets/IMG_8858.webp";
import imgPlaceholderImage2 from "@/assets/IMG_8818.webp";
import imgPlaceholderImage1 from "@/assets/IMG_8814.webp";
import imgPlaceholderImage6 from "@/assets/IMG_8820.webp";
import imgPlaceholderImage3 from "@/assets/IMG_8848.webp";
import imgPlaceholderImage4 from "@/assets/IMG_8841.webp";
import imgPlaceholderImage5 from "@/assets/IMG_8839.webp";
import imgPlaceholderImage from "@/assets/IMG_8845.webp";
import imgPlaceholderImage9 from "@/assets/map.png";

function ChevronRight() {
  return (
    <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d={SVG_PATHS.chevronRight} fill="currentColor" />
    </svg>
  );
}

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

function HeroSection() {
  return (
    <section className="relative w-full h-[525px] lg:h-[95vh] 2xl:h-[95vh]">
      <div className="absolute inset-0">
        <img alt="Potato field with family" className="w-full h-full object-cover" src={imgHeader111} />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]" />
      </div>
      <div className="relative h-full flex items-center justify-center px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 2xl:gap-20">
            <div className="flex flex-col">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="font-nunito font-bold text-white text-4xl md:text-5xl 2xl:text-7xl leading-tight tracking-tight mb-4 md:mb-0" 
                style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
              >
                Kartoffeln aus Leidenschaft und Tradition
              </motion.h1>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-col justify-end gap-6 2xl:gap-8"
            >
              <p className="font-proza text-white text-lg md:text-xl 2xl:text-2xl leading-relaxed">
                Seit Generationen bauen wir die besten Kartoffeln an. Direkt vom Feld zu dir nach Hause, frisch und voller Geschmack.
              </p>
              <Link to="/ueber-uns">
                <button className="bg-dusty-olive px-6 py-2.5 rounded-md text-floral-white font-proza font-medium text-base shadow-[0px_1px_2px_0px_var(--color-dark-charcoal-05),inset_0px_0px_0px_1px_var(--color-dark-charcoal-05),inset_0px_-2px_1px_0px_var(--color-dark-charcoal-05)] w-fit hover:opacity-90 transition-opacity">
                  Mehr erfahren
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-eggshell w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 2xl:gap-20">
          <div className="flex flex-col gap-4">
            <p className="font-proza font-semibold text-dark-charcoal text-base">
              Unsere Geschichte
            </p>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-nunito font-bold text-4xl md:text-5xl 2xl:text-7xl leading-tight tracking-tight" 
              style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
            >
              <span className="text-black">Familie</span>
              <br />
              <span className="text-logo-color">LINK</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-end gap-6 2xl:gap-8"
          >
            <p className="font-proza text-dark-charcoal text-base md:text-lg leading-relaxed">
              Unser Hof steht für ehrliche Arbeit und natürliche Qualität. Wir kennen jeden Acker, jede Pflanze und jeden Stein auf unserem Land. Das ist nicht nur unser Beruf, es ist unser Leben.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/ueber-uns">
                <button className="bg-logo-color px-6 py-2.5 rounded-md text-white font-proza font-medium text-base shadow-[0px_1px_2px_0px_var(--color-dark-charcoal-05),inset_0px_32px_24px_0px_rgba(255,255,255,0.05),inset_0px_2px_1px_0px_rgba(255,255,255,0.25),inset_0px_0px_0px_1px_dark-charcoal/15,inset_0px_-2px_1px_0px_rgba(0,0,0,0.2)] hover:opacity-90 transition-opacity">
                  Entdecken
                </button>
              </Link>
              <Link to="/kontakt">
                <button className="bg-dark-charcoal-05 px-6 py-2.5 rounded-md text-dark-charcoal font-proza font-medium text-base shadow-[0px_1px_2px_0px_var(--color-dark-charcoal-05),inset_0px_0px_0px_1px_var(--color-dark-charcoal-05),inset_0px_-2px_1px_0px_var(--color-dark-charcoal-05)] hover:bg-dark-charcoal/10 transition-colors">
                  Kontaktieren
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="bg-dusty-olive w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-white max-w-3xl mx-auto mb-12 2xl:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-nunito font-bold text-4xl md:text-5xl 2xl:text-[52px] leading-tight tracking-tight mb-6" 
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Frisch vom Feld
          </motion.h2>
          <p className="font-proza text-lg leading-relaxed">
            Wähle aus unserer Auswahl an hochwertigen Kartoffelsorten
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-8">
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            src={imgPlaceholderImage2} 
            alt="Potato product 1" 
            className="w-full rounded-lg object-cover aspect-square"
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            src={imgPlaceholderImage1} 
            alt="Potato product 2" 
            className="w-full rounded-lg object-cover aspect-square"
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            src={imgPlaceholderImage6} 
            alt="Potato product 3" 
            className="w-full rounded-lg object-cover aspect-square"
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            src={imgPlaceholderImage3} 
            alt="Potato product 4" 
            className="w-full rounded-lg object-cover aspect-square"
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            src={imgPlaceholderImage4} 
            alt="Potato product 5" 
            className="w-full rounded-lg object-cover aspect-square"
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            src={imgPlaceholderImage5} 
            alt="Potato product 6" 
            className="w-full rounded-lg object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
}



function ShopSection() {
  return (
    <section className="bg-eggshell w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 2xl:gap-8"
          >
            <div className="flex flex-col gap-6">
              <h2 className="font-nunito font-bold text-4xl md:text-5xl 2xl:text-[52px] leading-tight tracking-tight text-dark-charcoal" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Besuche unseren <span className="text-dusty-olive">Online-Shop</span>
              </h2>
              <p className="font-proza text-dark-charcoal text-base md:text-lg leading-relaxed">
                Bestelle jetzt deine frischen Kartoffeln direkt vom Hof und lass sie dir nach Hause liefern
              </p>
            </div>
            <Link
              to="/produkte"
              className="bg-dusty-olive px-6 py-2.5 rounded-md text-white font-proza font-medium text-base shadow-[0px_1px_2px_0px_var(--color-dark-charcoal-05),inset_0px_32px_24px_0px_rgba(255,255,255,0.05),inset_0px_2px_1px_0px_rgba(255,255,255,0.25),inset_0px_0px_0px_1px_dark-charcoal/15,inset_0px_-2px_1px_0px_rgba(0,0,0,0.2)] w-fit hover:opacity-90 transition-opacity"
            >
              Zum Shop
            </Link>
          </motion.div>
          <img src={imgPlaceholderImage} alt="Online shop preview" className="w-full rounded-lg object-cover aspect-[3/2]" />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-eggshell w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 2xl:mb-20">
          <p className="font-proza font-semibold text-dark-charcoal text-base mb-4">
            Kontakt
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-nunito font-bold text-4xl md:text-5xl 2xl:text-[52px] leading-tight tracking-tight text-dark-charcoal mb-6" 
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Erreiche uns
          </motion.h2>
          <p className="font-proza text-dark-charcoal text-base md:text-lg leading-relaxed">
            Wir freuen uns auf deine Nachricht und deine Fragen
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
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
            </div>
            <div className="flex flex-col gap-4">
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
            </div>
            <div className="flex flex-col gap-4">
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
            </div>
          </div>
          <div className="w-full h-[400px] 2xl:h-[516px] rounded-lg overflow-hidden">
            <img src={imgPlaceholderImage9} alt="Map location" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <InstagramFeed />
      <ShopSection />
      <ContactSection />
    </>
  );
}