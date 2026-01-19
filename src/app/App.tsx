import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Home } from '@/app/pages/Home';
import { About } from '@/app/pages/About';
import { Products } from '@/app/pages/Products';
import { Contact } from '@/app/pages/Contact';
import { Privacy } from '@/app/pages/Privacy';
import { Terms } from '@/app/pages/Terms';
import { Cookies } from '@/app/pages/Cookies';
import { useEffect } from 'react';

export default function App() {
  // Inside your component:
useEffect(() => {
  const script = document.createElement('script');
  script.src = "https://scripts.feedspring.com/instagram-attrs.js";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);

  return () => {
    // Cleanup to prevent multiple scripts on re-renders
    document.body.removeChild(script);
  };
}, []);

  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col bg-eggshell">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ueber-uns" element={<About />} />
            <Route path="/produkte" element={<Products />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/datenschutz" element={<Privacy />} />
            <Route path="/agb" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}