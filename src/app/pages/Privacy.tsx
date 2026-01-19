import { motion } from 'motion/react';

export function Privacy() {
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
            Datenschutz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-proza text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Informationen zur Verarbeitung deiner personenbezogenen Daten
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-eggshell w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-8 font-proza text-dark-charcoal text-base leading-relaxed">
            
            <div>
              <h2 className="font-nunito font-bold text-3xl tracking-tight text-dark-charcoal mb-4" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-xl tracking-tight text-[#0c0c0b] mb-3 mt-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Allgemeine Hinweise
              </h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.
              </p>
            </div>

            <div>
              <h3 className="font-nunito font-bold text-xl tracking-tight text-dark-charcoal mb-3" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Datenerfassung auf dieser Website
              </h3>
              <p className="mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten kannst du dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>
              <p className="mb-4">
                <strong>Wie erfassen wir deine Daten?</strong>
              </p>
              <p className="mb-4">
                Deine Daten werden zum einen dadurch erhoben, dass du uns diese mitteilst. Hierbei kann es sich z. B. um Daten handeln, die du in ein Kontaktformular eingibst.
              </p>
              <p className="mb-4">
                Andere Daten werden automatisch oder nach deiner Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </div>

            <div>
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-3xl tracking-tight text-[#0c0c0b] mb-4 mt-8" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                2. Hosting und Content Delivery Networks (CDN)
              </h2>
              <p className="mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-xl tracking-tight text-[#0c0c0b] mb-3 mt-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Externes Hosting
              </h3>
              <p className="mb-4">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </div>

            <div>
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-3xl tracking-tight text-[#0c0c0b] mb-4 mt-8" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-xl tracking-tight text-[#0c0c0b] mb-3 mt-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Datenschutz
              </h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln deine personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mb-4">
                Wenn du diese Website benutzt, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen du persönlich identifiziert werden kannst. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
            </div>

            <div>
              <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-xl tracking-tight text-[#0c0c0b] mb-3 mt-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mb-4">
                LINK Kartoffel GbR<br />
                Nordheimer Str. 99<br />
                74348 Lauffen am Neckar
              </p>
              <p className="mb-4">
                Telefon: Hansjörg: 0172 / 8469726, Kilian: 0173 / 9032286<br />
                E-Mail: LINK@lauffener-kartoffeln.de
              </p>
              <p className="mb-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </div>

            <div>
              <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-xl tracking-tight text-[#0c0c0b] mb-3 mt-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Widerruf deiner Einwilligung zur Datenverarbeitung
              </h3>
              <p className="mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit deiner ausdrücklichen Einwilligung möglich. Du kannst eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
            </div>

            <div>
              <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-xl tracking-tight text-[#0c0c0b] mb-3 mt-6" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Auskunft, Löschung und Berichtigung
              </h3>
              <p className="mb-4">
                Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten kannst du dich jederzeit an uns wenden.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-dark-charcoal/15">
              <p className="text-sm text-dark-charcoal/70">
                Stand: Januar 2026
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}