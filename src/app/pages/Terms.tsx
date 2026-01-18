import { motion } from 'motion/react';

export function Terms() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dusty-olive w-full px-5 md:px-16 2xl:px-24 py-24 md:py-32 2xl:py-40">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-white text-5xl md:text-6xl 2xl:text-7xl leading-tight tracking-tight mb-8" 
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            Allgemeine Geschäftsbedingungen
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Proza_Libre:Regular',sans-serif] text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Rechtliche Bedingungen für die Nutzung unseres Angebots
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-eggshell w-full px-5 md:px-16 2xl:px-24 py-16 md:py-24 2xl:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-8 font-['Proza_Libre:Regular',sans-serif] text-[#0c0c0b] text-base leading-relaxed">
            
            <div>
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-3xl tracking-tight text-[#0c0c0b] mb-4" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                1. Geltungsbereich
              </h2>
              <p className="mb-4">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Lieferung von Waren, die ein Verbraucher oder Unternehmer (nachfolgend „Kunde") mit der LINK Kartoffel GbR (nachfolgend „Verkäufer") über die vom Verkäufer betriebene Website oder über den Hofladen abschließt.
              </p>
              <p className="mb-4">
                Die Einbeziehung von eigenen Bedingungen des Kunden wird widersprochen, es sei denn, es ist etwas anderes vereinbart.
              </p>
            </div>

            <div>
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-3xl tracking-tight text-[#0c0c0b] mb-4 mt-8" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                2. Vertragsschluss
              </h2>
              <p className="mb-4">
                Die auf der Website des Verkäufers enthaltenen Produktbeschreibungen stellen keine verbindlichen Angebote seitens des Verkäufers dar, sondern dienen zur Abgabe eines verbindlichen Angebots durch den Kunden.
              </p>
              <p className="mb-4">
                Der Kunde kann das Angebot über das in die Website des Verkäufers integrierte Online-Bestellformular abgeben. Dabei gibt der Kunde, nachdem er die ausgewählten Waren in den virtuellen Warenkorb gelegt und den elektronischen Bestellprozess durchlaufen hat, durch Klicken des den Bestellvorgang abschließenden Buttons ein rechtlich verbindliches Vertragsangebot in Bezug auf die im Warenkorb enthaltenen Waren ab.
              </p>
              <p className="mb-4">
                Der Verkäufer kann das Angebot des Kunden innerhalb von fünf Tagen annehmen, indem er dem Kunden eine schriftliche Auftragsbestätigung oder eine Auftragsbestätigung in Textform (Fax oder E-Mail) übermittelt, wobei insoweit der Zugang der Auftragsbestätigung beim Kunden maßgeblich ist, oder indem er dem Kunden die bestellte Ware liefert, wobei insoweit der Zugang der Ware beim Kunden maßgeblich ist.
              </p>
            </div>

            <div>
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-3xl tracking-tight text-[#0c0c0b] mb-4 mt-8" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                3. Preise und Zahlungsbedingungen
              </h2>
              <p className="mb-4">
                Alle Preise, die auf der Website des Verkäufers angegeben sind, verstehen sich einschließlich der jeweils gültigen gesetzlichen Umsatzsteuer.
              </p>
              <p className="mb-4">
                Der Kunde hat die Möglichkeit der Zahlung per Vorkasse, Rechnung, Kreditkarte oder PayPal. Bei der Abholung im Hofladen ist auch Barzahlung möglich.
              </p>
              <p className="mb-4">
                Hat der Kunde die Zahlung per Vorkasse gewählt, so verpflichtet er sich, den Kaufpreis unverzüglich nach Vertragsschluss zu zahlen.
              </p>
            </div>

            <div>
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-3xl tracking-tight text-[#0c0c0b] mb-4 mt-8" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                4. Lieferung und Versand
              </h2>
              <p className="mb-4">
                Die Lieferung von Waren erfolgt auf dem Versandweg an die vom Kunden angegebene Lieferanschrift, sofern nichts anderes vereinbart ist. Bei der Abwicklung der Transaktion ist die in der Bestellabwicklung des Verkäufers angegebene Lieferanschrift maßgeblich.
              </p>
              <p className="mb-4">
                Alternativ können die Waren nach vorheriger Vereinbarung direkt am Hofladen abgeholt werden.
              </p>
              <p className="mb-4">
                Sendet das Transportunternehmen die versandte Ware an den Verkäufer zurück, da eine Zustellung beim Kunden nicht möglich war, trägt der Kunde die Kosten für den erfolglosen Versand.
              </p>
            </div>

            <div>
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-3xl tracking-tight text-[#0c0c0b] mb-4 mt-8" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                5. Eigentumsvorbehalt
              </h2>
              <p className="mb-4">
                Bis zur vollständigen Bezahlung verbleiben die gelieferten Waren im Eigentum des Verkäufers.
              </p>
            </div>

            <div>
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-3xl tracking-tight text-[#0c0c0b] mb-4 mt-8" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                6. Widerrufsrecht für Verbraucher
              </h2>
              <p className="mb-4">
                Verbrauchern steht grundsätzlich ein Widerrufsrecht zu. Nähere Informationen zum Widerrufsrecht ergeben sich aus der Widerrufsbelehrung des Verkäufers.
              </p>
              <p className="mb-4">
                Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die schnell verderben können oder deren Verfallsdatum schnell überschritten würde, insbesondere bei frischen Lebensmitteln.
              </p>
            </div>

            <div>
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-3xl tracking-tight text-[#0c0c0b] mb-4 mt-8" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                7. Gewährleistung
              </h2>
              <p className="mb-4">
                Es gelten die gesetzlichen Gewährleistungsrechte.
              </p>
              <p className="mb-4">
                Bei Verbrauchern beträgt die Gewährleistungsfrist für bewegliche Sachen zwei Jahre ab Ablieferung der Ware.
              </p>
            </div>

            <div>
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-3xl tracking-tight text-[#0c0c0b] mb-4 mt-8" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                8. Haftungsbeschränkung
              </h2>
              <p className="mb-4">
                Schadensersatzansprüche des Kunden sind ausgeschlossen, soweit nachfolgend nichts anderes bestimmt ist. Der vorstehende Haftungsausschluss gilt auch zugunsten der gesetzlichen Vertreter und Erfüllungsgehilfen des Verkäufers, sofern der Kunde Ansprüche gegen diese geltend macht.
              </p>
              <p className="mb-4">
                Ausgenommen vom Haftungsausschluss sind Schadensersatzansprüche aufgrund einer Verletzung des Lebens, des Körpers, der Gesundheit und Schadensersatzansprüche aus der Verletzung wesentlicher Vertragspflichten.
              </p>
            </div>

            <div>
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-3xl tracking-tight text-[#0c0c0b] mb-4 mt-8" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                9. Anwendbares Recht
              </h2>
              <p className="mb-4">
                Für sämtliche Rechtsbeziehungen der Parteien gilt das Recht der Bundesrepublik Deutschland unter Ausschluss der Gesetze über den internationalen Kauf beweglicher Waren. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, entzogen wird.
              </p>
            </div>

            <div>
              <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-3xl tracking-tight text-[#0c0c0b] mb-4 mt-8" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                10. Kontakt
              </h2>
              <p className="mb-4">
                LINK Kartoffel GbR<br />
                Nordheimer Str. 99/1<br />
                74348 Lauffen am Neckar
              </p>
              <p className="mb-4">
                Telefon: 0172 / 8469726, 0173 / 9032286<br />
                E-Mail: LINK@lauffener-kartoffeln.de
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[rgba(12,12,11,0.15)]">
              <p className="text-sm text-[#0c0c0b]/70">
                Stand: Januar 2026
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}