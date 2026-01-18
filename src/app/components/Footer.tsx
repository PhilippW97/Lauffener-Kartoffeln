import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-eggshell w-full px-5 md:px-16 2xl:px-24 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-px bg-[rgba(12,12,11,0.15)] mb-8" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-['Proza_Libre:Regular',sans-serif] text-[#0c0c0b] text-sm">
          <p>© 2026 LINK Kartoffel GbR. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap gap-6 underline">
            <Link to="/datenschutz" className="hover:opacity-70 transition-opacity">Datenschutz</Link>
            <Link to="/agb" className="hover:opacity-70 transition-opacity">Allgemeine Geschäftsbedingungen</Link>
            <Link to="/cookies" className="hover:opacity-70 transition-opacity">Cookie-Einstellungen</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}