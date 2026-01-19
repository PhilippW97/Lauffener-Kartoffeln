import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import imgLogo from "@/assets/logo_no_bg.png";

function HamburgerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path d="M17.5996 5.925C17.7639 5.925 17.8659 5.97351 17.9463 6.05391C18.0265 6.13422 18.0751 6.2357 18.0752 6.39961C18.0752 6.56382 18.0266 6.6659 17.9463 6.74629L12.6924 12.0002L13.0459 12.3537L17.9463 17.2531C18.0267 17.3335 18.0752 17.4357 18.0752 17.5998C18.0752 17.7641 18.0267 17.8661 17.9463 17.9465C17.8659 18.0269 17.7639 18.0754 17.5996 18.0754C17.4355 18.0754 17.3333 18.0269 17.2529 17.9465L12.3535 13.0461L12 12.6926L6.74609 17.9465C6.66571 18.0268 6.56362 18.0754 6.39941 18.0754C6.23551 18.0753 6.13402 18.0267 6.05371 17.9465C5.97331 17.8661 5.9248 17.7641 5.9248 17.5998C5.92484 17.4357 5.97334 17.3335 6.05371 17.2531L11.3066 12.0002L10.9531 11.6467L6.05371 6.74629C5.97331 6.66589 5.9248 6.56388 5.9248 6.39961C5.92488 6.23557 5.97337 6.13425 6.05371 6.05391C6.13405 5.97357 6.23537 5.92508 6.39941 5.925C6.56368 5.925 6.66569 5.97351 6.74609 6.05391L11.6465 10.9533L12 11.3068L17.2529 6.05391C17.3333 5.97354 17.4355 5.92504 17.5996 5.925Z" fill="currentColor" />
    </svg>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block bg-eggshell w-full sticky top-0 z-50">
        <div className="h-[72px] px-24 flex items-center justify-center">
          <div className="flex items-center justify-between gap-8 max-w-7xl w-full">
            <div className="flex items-center gap-8">
              <Link to="/" className="w-14 h-14 shrink-0">
                <img alt="Logo" className="w-full h-full object-cover" src={imgLogo} />
              </Link>
              <Link to="/ueber-uns" className="font-proza text-dark-charcoal text-base hover:opacity-70 transition-opacity">
                Über uns
              </Link>
              <Link to="/produkte" className="font-proza text-dark-charcoal text-base hover:opacity-70 transition-opacity">
                Produkte
              </Link>
              <Link to="/kontakt" className="font-proza text-dark-charcoal text-base hover:opacity-70 transition-opacity">
                Kontakt
              </Link>
            </div>
            <a 
              href="https://shop.lauffener-kartoffeln.de"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dusty-olive px-5 py-2 rounded-md text-white font-proza font-medium text-base shadow-[0px_1px_2px_0px_var(--color-dark-charcoal-05),inset_0px_32px_24px_0px_rgba(255,255,255,0.05),inset_0px_2px_1px_0px_rgba(255,255,255,0.25),inset_0px_0px_0px_1px_dark-charcoal/15,inset_0px_-2px_1px_0px_rgba(0,0,0,0.2)] hover:opacity-90 transition-opacity"
            >
              Shop
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Navbar */}
      <nav className="md:hidden bg-eggshell w-full sticky top-0 z-50">
        <div className="h-16 px-5 md:px-8 flex items-center justify-between">
          <Link to="/" className="w-14 h-14" onClick={closeMenu}>
            <img alt="Logo" className="w-full h-full object-cover" src={imgLogo} />
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 flex items-center justify-center text-dark-charcoal hover:opacity-70 transition-opacity"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-eggshell z-40 md:hidden"
          >
            <div className="h-16 px-5 md:px-8 flex items-center justify-between border-b border-dark-charcoal/10">
              <Link to="/" className="w-14 h-14" onClick={closeMenu}>
                <img alt="Logo" className="w-full h-full object-cover" src={imgLogo} />
              </Link>
              <button 
                onClick={closeMenu}
                className="w-12 h-12 flex items-center justify-center text-dark-charcoal"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center px-5 py-8 gap-4">
              <Link 
                to="/ueber-uns" 
                onClick={closeMenu}
                className="w-full text-center py-3 font-proza font-bold text-dark-charcoal text-lg hover:bg-dark-charcoal/5 rounded-md transition-colors"
              >
                Über uns
              </Link>
              <Link 
                to="/produkte" 
                onClick={closeMenu}
                className="w-full text-center py-3 font-proza font-bold text-dark-charcoal text-lg hover:bg-dark-charcoal/5 rounded-md transition-colors"
              >
                Produkte
              </Link>
              <Link 
                to="/kontakt" 
                onClick={closeMenu}
                className="w-full text-center py-3 font-proza font-bold text-dark-charcoal text-lg hover:bg-dark-charcoal/5 rounded-md transition-colors"
              >
                Kontakt
              </Link>
              <a 
                href="https://shop.lauffener-kartoffeln.de"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-dusty-olive px-5 py-2 rounded-md text-white font-proza font-medium text-base shadow-[0px_1px_2px_0px_var(--color-dark-charcoal-05),inset_0px_32px_24px_0px_rgba(255,255,255,0.05),inset_0px_2px_1px_0px_rgba(255,255,255,0.25),inset_0px_0px_0px_1px_dark-charcoal/15,inset_0px_-2px_1px_0px_rgba(0,0,0,0.2)] mt-4"
              >
                Shop
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}