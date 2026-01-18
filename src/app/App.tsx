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

export default function App() {
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