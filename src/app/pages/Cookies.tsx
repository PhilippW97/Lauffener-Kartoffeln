import { motion } from 'motion/react';
import { useState } from 'react';

export function Cookies() {
  const [essentialEnabled, setEssentialEnabled] = useState(true);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  const handleSavePreferences = () => {
    // Here you would typically save the preferences to localStorage or a cookie
    alert('Deine Cookie-Einstellungen wurden gespeichert.');
  };

  const handleAcceptAll = () => {
    setAnalyticsEnabled(true);
    setMarketingEnabled(true);
    alert('Alle Cookies wurden aktiviert.');
  };

  const handleRejectAll = () => {
    setAnalyticsEnabled(false);
    setMarketingEnabled(false);
    alert('Nur essenzielle Cookies sind aktiviert.');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dusty-olive w-full px-5 md:px-16 2xl:px-24 py-24 md:py-32 2xl:py-40">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-nunito font-bold text-white text-5xl md:text-6xl 2xl:text-7xl leading-tight tracking-tight mb-8" 
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Cookie-Einstellungen
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-proza text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Verwalte deine Cookie-Präferenzen und Datenschutzeinstellungen
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-eggshell w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="font-nunito font-bold text-3xl tracking-tight text-dark-charcoal mb-4" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Was sind Cookies?
            </h2>
            <p className="font-proza text-dark-charcoal text-base leading-relaxed mb-4">
              Cookies sind kleine Textdateien, die auf deinem Gerät gespeichert werden, wenn du unsere Website besuchst. Sie helfen uns, dein Nutzererlebnis zu verbessern, die Website-Leistung zu analysieren und personalisierte Inhalte anzubieten.
            </p>
            <p className="font-proza text-dark-charcoal text-base leading-relaxed">
              Du kannst jederzeit deine Cookie-Einstellungen ändern. Bitte beachte, dass das Deaktivieren bestimmter Cookies die Funktionalität der Website beeinträchtigen kann.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="flex flex-col gap-6 mb-12">
            
            {/* Essential Cookies */}
            <div className="bg-white rounded-lg p-6 border border-dark-charcoal/10">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-nunito font-bold text-xl tracking-tight text-dark-charcoal mb-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Essenzielle Cookies
                  </h3>
                  <p className="font-proza text-dark-charcoal text-sm leading-relaxed mb-2">
                    Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                  <p className="font-proza text-dark-charcoal/60 text-xs">
                    Beispiele: Session-Management, Sicherheit, Formular-Übermittlung
                  </p>
                </div>
                <div className="ml-4">
                  <div className="flex items-center justify-center w-12 h-6 bg-dusty-olive rounded-full cursor-not-allowed opacity-50">
                    <div className="w-5 h-5 bg-white rounded-full translate-x-3"></div>
                  </div>
                  <p className="font-proza text-dark-charcoal/60 text-xs mt-1 text-center">
                    Immer aktiv
                  </p>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-white rounded-lg p-6 border border-dark-charcoal/10">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-nunito font-bold text-xl tracking-tight text-dark-charcoal mb-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Analyse-Cookies
                  </h3>
                  <p className="font-proza text-dark-charcoal text-sm leading-relaxed mb-2">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen anonym gesammelt und gemeldet werden.
                  </p>
                  <p className="font-proza text-dark-charcoal/60 text-xs">
                    Beispiele: Google Analytics, Besucherstatistiken, Seitenaufrufe
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                    className={`flex items-center justify-center w-12 h-6 rounded-full transition-colors ${
                      analyticsEnabled ? 'bg-dusty-olive' : 'bg-dark-charcoal/20'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      analyticsEnabled ? 'translate-x-3' : '-translate-x-3'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-white rounded-lg p-6 border border-dark-charcoal/10">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-nunito font-bold text-xl tracking-tight text-dark-charcoal mb-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Marketing-Cookies
                  </h3>
                  <p className="font-proza text-dark-charcoal text-sm leading-relaxed mb-2">
                    Diese Cookies werden verwendet, um Besuchern auf Webseiten zu folgen. Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend für den einzelnen Benutzer sind.
                  </p>
                  <p className="font-proza text-dark-charcoal/60 text-xs">
                    Beispiele: Social Media Integration, Werbe-Tracking, Retargeting
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => setMarketingEnabled(!marketingEnabled)}
                    className={`flex items-center justify-center w-12 h-6 rounded-full transition-colors ${
                      marketingEnabled ? 'bg-dusty-olive' : 'bg-dark-charcoal/20'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      marketingEnabled ? 'translate-x-3' : '-translate-x-3'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button 
              onClick={handleSavePreferences}
              className="flex-1 bg-dusty-olive px-6 py-3 rounded-md text-white font-proza font-medium text-base shadow-[0px_1px_2px_0px_var(--color-dark-charcoal-05),inset_0px_32px_24px_0px_rgba(255,255,255,0.05),inset_0px_2px_1px_0px_rgba(255,255,255,0.25),inset_0px_0px_0px_1px_dark-charcoal/15,inset_0px_-2px_1px_0px_rgba(0,0,0,0.2)] hover:opacity-90 transition-opacity"
            >
              Auswahl speichern
            </button>
            <button 
              onClick={handleAcceptAll}
              className="flex-1 bg-logo-color px-6 py-3 rounded-md text-white font-proza font-medium text-base shadow-[0px_1px_2px_0px_var(--color-dark-charcoal-05)] hover:opacity-90 transition-opacity"
            >
              Alle akzeptieren
            </button>
            <button 
              onClick={handleRejectAll}
              className="flex-1 bg-white border border-dark-charcoal/20 px-6 py-3 rounded-md text-dark-charcoal font-proza font-medium text-base hover:bg-dark-charcoal/5 transition-colors"
            >
              Alle ablehnen
            </button>
          </div>

          {/* Additional Information */}
          <div className="mt-12 pt-8 border-t border-dark-charcoal/15">
            <h3 className="font-nunito font-bold text-xl tracking-tight text-dark-charcoal mb-3" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Weitere Informationen
            </h3>
            <p className="font-['Proza_Libre:Regular',sans-serif] text-[#0c0c0b] text-sm leading-relaxed mb-4">
              Für weitere Informationen über die von uns verwendeten Cookies und wie wir deine Daten verarbeiten, lies bitte unsere Datenschutzerklärung.
            </p>
            <p className="text-sm text-dark-charcoal/70">
              Letzte Aktualisierung: Januar 2026
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
