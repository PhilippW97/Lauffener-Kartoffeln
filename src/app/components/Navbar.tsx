import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import imgLogo from "@/assets/logo_no_bg.png";
import { useCart } from '@/context/CartContext';

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
  const { cartCount, cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, toggleCart } = useCart();
  
  const closeMenu = () => setIsMenuOpen(false);

  // Helper to format currency
  const formatPrice = (priceStr: string) => {
     // Assuming price comes as "12,50 €", we keep it or parse it. 
     // For calculation we used a parser, here we just display.
     return priceStr;
  }
  
  const formatTotal = (num: number) => {
      return num.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block bg-eggshell w-full sticky top-0 z-50">
        <div className="h-[72px] px-24 flex items-center justify-center relative">
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
            
            {/* Cart Icon */}
            <div className="relative">
                <button 
                  onClick={toggleCart}
                  className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-colors relative"
                >
                  <ShoppingBag className="w-6 h-6 text-dark-charcoal" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-dusty-olive text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>

                {/* Mini Cart Dropdown */}
                <AnimatePresence>
                  {isCartOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-12 right-0 w-96 bg-white rounded-lg shadow-xl border border-black/5 z-50 overflow-hidden"
                    >
                      <div className="p-4 border-b border-black/5 flex justify-between items-center bg-eggshell/50">
                        <h3 className="font-nunito font-bold text-lg text-dark-charcoal">Warenkorb ({cartCount})</h3>
                        <button onClick={toggleCart} className="text-dark-charcoal/50 hover:text-dark-charcoal">
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="max-h-[60vh] overflow-y-auto p-4 flex flex-col gap-4">
                        {cart.length === 0 ? (
                          <div className="text-center py-8 text-dark-charcoal/50 font-proza">
                            Ihr Warenkorb ist leer.
                          </div>
                        ) : (
                          cart.map((item) => (
                            <div key={item.id} className="flex gap-4 items-start">
                              <div className="w-16 h-16 rounded-md overflow-hidden bg-eggshell shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start">
                                  <h4 className="font-bold text-dark-charcoal font-nunito">{item.name}</h4>
                                  <button onClick={() => removeFromCart(item.id)} className="text-red-500/50 hover:text-red-500 transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                                <p className="text-sm text-dark-charcoal/60 font-proza">{item.category}</p>
                                <div className="flex justify-between items-center mt-2">
                                  <p className="font-medium text-dusty-olive">{item.price}</p>
                                  <div className="flex items-center gap-2 bg-eggshell rounded-md p-1">
                                    <button 
                                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                      className="p-1 hover:bg-white rounded-md transition-colors text-dark-charcoal"
                                    >
                                      <Minus className="w-3 h-3" />
                                    </button>
                                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                    <button 
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      className="p-1 hover:bg-white rounded-md transition-colors text-dark-charcoal"
                                    >
                                      <Plus className="w-3 h-3" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>

                      {cart.length > 0 && (
                        <div className="p-4 border-t border-black/5 bg-eggshell/30">
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-proza text-dark-charcoal/70">Gesamtsumme</span>
                            <span className="font-nunito font-bold text-xl text-dark-charcoal">{formatTotal(cartTotal)}*</span>
                          </div>
                           <p className="text-xs text-dark-charcoal/40 mb-4">*zzgl. Versand (beim Checkout berechnet)</p>
                          <Link 
                            to="/kasse"
                            onClick={toggleCart} // Close mini-cart on navigation
                            className="block w-full text-center bg-dusty-olive hover:bg-dusty-olive/90 text-white font-proza font-medium py-3 rounded-md transition-colors"
                          >
                           Zur Kasse
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
            
            {/* Old Shop Button - Commented Out */}
            {/* 
            <a 
              href="https://shop.lauffener-kartoffeln.de"
              target="_blank"
              rel="noopener noreferrer"
              className="..."
            >
              Shop
            </a>
            */}
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Navbar */}
      <nav className="md:hidden bg-eggshell w-full sticky top-0 z-50">
        <div className="h-16 px-5 md:px-8 flex items-center justify-between">
          <Link to="/" className="w-14 h-14" onClick={closeMenu}>
            <img alt="Logo" className="w-full h-full object-cover" src={imgLogo} />
          </Link>
          <div className="flex items-center gap-4">
            <button 
                onClick={toggleCart}
                className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-colors relative"
            >
                <ShoppingBag className="w-6 h-6 text-dark-charcoal" />
                {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-dusty-olive text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                </span>
                )}
            </button>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-12 h-12 flex items-center justify-center text-dark-charcoal hover:opacity-70 transition-opacity"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-eggshell z-40 md:hidden flex flex-col pt-20"
          >
            {/* Subtle Background Logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.03] select-none">
              <img 
                src={imgLogo} 
                alt="" 
                className="w-[150%] max-w-none rotate-[-12deg]"
              />
            </div>

            <button 
              onClick={closeMenu}
              className="absolute top-4 right-5 w-12 h-12 flex items-center justify-center text-dark-charcoal active:scale-95 transition-transform"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
            
            <div className="flex-1 flex flex-col px-6 py-8 overflow-y-auto relative">
              <div className="flex flex-col gap-2">
                <Link 
                  to="/" 
                  onClick={closeMenu}
                  className="group flex flex-col py-4"
                >
                  <span className="font-nunito font-bold text-4xl text-dark-charcoal tracking-tight group-active:text-logo-color transition-colors" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Home
                  </span>
                  <div className="h-0.5 w-0 group-active:w-12 bg-logo-color transition-all duration-300 mt-1" />
                </Link>
                <Link 
                  to="/ueber-uns" 
                  onClick={closeMenu}
                  className="group flex flex-col py-4"
                >
                  <span className="font-nunito font-bold text-4xl text-dark-charcoal tracking-tight group-active:text-logo-color transition-colors" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Über uns
                  </span>
                  <div className="h-0.5 w-0 group-active:w-12 bg-logo-color transition-all duration-300 mt-1" />
                </Link>
                <Link 
                  to="/produkte" 
                  onClick={closeMenu}
                  className="group flex flex-col py-4"
                >
                  <span className="font-nunito font-bold text-4xl text-dark-charcoal tracking-tight group-active:text-logo-color transition-colors" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Produkte
                  </span>
                  <div className="h-0.5 w-0 group-active:w-12 bg-logo-color transition-all duration-300 mt-1" />
                </Link>
                <Link 
                  to="/kontakt" 
                  onClick={closeMenu}
                  className="group flex flex-col py-4"
                >
                  <span className="font-nunito font-bold text-4xl text-dark-charcoal tracking-tight group-active:text-logo-color transition-colors" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Kontakt
                  </span>
                  <div className="h-0.5 w-0 group-active:w-12 bg-logo-color transition-all duration-300 mt-1" />
                </Link>
              </div>

               {/* Mobile Shop Link replaced/hidden since we have the icon now, but maybe nice to keep as a big button? Let's hide it to avoid confusion or point to cart. */}
              {/* <div className="mt-8">
                <a 
                  href="https://shop.lauffener-kartoffeln.de"
                  style={{ display: 'none' }} // Hidden as requested
                  className="..."
                >
                  Zum Shop
                </a>
              </div> */}
            </div>

            {/* Mobile Menu Footer */}
            <div className="px-8 py-10 border-t border-dark-charcoal/5 flex flex-col gap-6 relative">
              <div className="flex flex-col gap-1">
                <p className="font-proza text-xs text-dark-charcoal/40 uppercase tracking-widest font-bold">
                  Kontakt
                </p>
                <a href="mailto:LINK@lauffener-kartoffeln.de" className="font-proza text-base text-dark-charcoal font-medium">
                  LINK@lauffener-kartoffeln.de
                </a>
              </div>
              <div className="flex items-center gap-6">
                <a href="https://www.instagram.com/link_lauffener_kartoffeln/" target="_blank" rel="noopener noreferrer" className="text-dark-charcoal/60 hover:text-logo-color transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}