import { Product } from '@/context/CartContext';
import imgPlaceholderImage1 from "@/assets/IMG_8814.webp";
import imgPlaceholderImage2 from "@/assets/IMG_8818.webp";
import imgPlaceholderImage3 from "@/assets/IMG_8848.webp";
import imgPlaceholderImage4 from "@/assets/IMG_8841.webp";
import imgPlaceholderImage5 from "@/assets/IMG_8839.webp";
import imgPlaceholderImage6 from "@/assets/IMG_8820.webp";

export interface ProductData extends Product {
  cookingType: string;
  usage: string[];
  longDescription: string;
}

export const products: ProductData[] = [
  // Festkochend
  {
    id: "annabelle",
    name: "Annabelle",
    category: "Festkochend",
    cookingType: "Festkochende Salatkartoffeln",
    description: "Die Königin der Frühkartoffeln. Fein, gelb & fest.",
    longDescription: "Die Annabelle ist die Königin der Frühkartoffeln. Sie besticht durch ihre langovale Form, eine sehr glatte Schale und ein herrlich gelbes Fleisch. Ihr feiner, leicht süßlicher Geschmack macht sie zur ersten Wahl für Genießer.",
    usage: ["Klassischer Kartoffelsalat", "Feine Pellkartoffeln", "Spargelbeilage"],
    price: "12,50 €",
    image: imgPlaceholderImage1,
  },
  {
    id: "vindika",
    name: "Vindika",
    category: "Festkochend",
    cookingType: "Festkochende Salatkartoffeln",
    description: "Tiefgelb, aromatisch und extrem formstabil.",
    longDescription: "Eine robuste Sorte mit tiefgelber Fleischfarbe. Die Vindika überzeugt durch ein sehr intensives Aroma und bleibt auch bei längerer Lagerung extrem formstabil.",
    usage: ["Mediterrane Kartoffelsalate", "Bratkartoffeln", "Ofengemüse"],
    price: "12,50 €",
    image: imgPlaceholderImage2,
  },
  {
    id: "goldmarie",
    name: "Goldmarie",
    category: "Festkochend",
    cookingType: "Festkochende Salatkartoffeln",
    description: "Goldgelb, edel und besonders cremig.",
    longDescription: "Der Name ist Programm: Goldgelbes Fleisch und ein edles Erscheinungsbild. Die Goldmarie hat einen besonders cremigen Biss trotz ihrer Festigkeit und ein sehr harmonisches Aroma.",
    usage: ["Elegante Gourmet-Salate", "Schnittkartoffeln", "Salzkartoffeln"],
    price: "12,50 €",
    image: imgPlaceholderImage3,
  },
  {
    id: "simonetta",
    name: "Simonetta",
    category: "Festkochend",
    cookingType: "Festkochende Salatkartoffeln",
    description: "Geschmackssieger und extrem lagerfähig.",
    longDescription: "Simonetta gilt als eine der geschmacklich besten Sorten auf dem Markt. Sie ist extrem lagerfähig und behält ihre Premium-Qualität über viele Monate hinweg.",
    usage: ["Premium-Kartoffelsalat", "Kartoffelgratin", "Salzkartoffeln"],
    price: "12,50 €",
    image: imgPlaceholderImage4,
  },

  // Vorwiegend festkochend
  {
    id: "colomba",
    name: "Colomba",
    category: "Vorwiegend festkochend",
    cookingType: "Vorwiegend festkochende Allrounder",
    description: "Sehr früh, hell und wunderbar mild.",
    longDescription: "Eine sehr frühe Sorte mit extrem heller, sauberer Schale. Die Colomba ist sehr mild im Geschmack und hat eine wunderbar gleichmäßige Textur.",
    usage: ["Schnelle Salzkartoffeln", "Leichte Eintöpfe", "Pellkartoffeln mit Quark"],
    price: "12,50 €",
    image: imgPlaceholderImage5,
  },
  {
    id: "larissa",
    name: "Larissa",
    category: "Vorwiegend festkochend",
    cookingType: "Vorwiegend festkochende Allrounder",
    description: "Gleichmäßig, saugfähig und ideal für Soßen.",
    longDescription: "Larissa zeichnet sich durch einen hohen Ertrag und eine sehr gleichmäßige Form aus. Sie nimmt Soßen besonders gut auf, ohne dabei zu zerfallen.",
    usage: ["Kartoffelpfannen", "Eintöpfe", "Klassische Beilagen"],
    price: "12,50 €",
    image: imgPlaceholderImage6,
  },
  {
    id: "otolia",
    name: "Otolia",
    category: "Vorwiegend festkochend",
    cookingType: "Vorwiegend festkochende Allrounder",
    description: "Kräftig gelb mit echtem Kartoffelgeschmack.",
    longDescription: "Die Otolia ist bekannt für ihre kräftig gelbe Farbe und ihre hohe Widerstandsfähigkeit. Sie hat einen sehr ausgeprägten, echten Kartoffelgeschmack.",
    usage: ["Selbstgemachte Pommes", "Wedges", "Goldbraune Bratkartoffeln"],
    price: "12,50 €",
    image: imgPlaceholderImage1,
  },
  {
    id: "laura",
    name: "Laura",
    category: "Vorwiegend festkochend",
    cookingType: "Vorwiegend festkochende Allrounder",
    description: "Rote Schale, tiefgelbes Fleisch, nussig.",
    longDescription: "Die Rote im Sortiment. Mit ihrer auffälligen roten Schale und dem tiefgelben Fleisch ist sie ein optisches Highlight. Geschmacklich ist sie cremig und leicht nussig.",
    usage: ["Ofenkartoffeln", "Bunte Kartoffelpfannen", "Hausgemachte Pommes"],
    price: "12,50 €",
    image: imgPlaceholderImage2,
  },

  // Mehlig
  {
    id: "lilly",
    name: "Lilly",
    category: "Mehlig",
    cookingType: "Mehligkochende Kartoffeln",
    description: "Weich, trocken und ideal für Püree.",
    longDescription: "Lilly ist eine moderne mehligkochende Sorte, die durch ihr sehr gelbes Fleisch und einen fantastischen Geschmack punktet. Sie zerfällt beim Kochen gleichmäßig und lässt sich wunderbar verarbeiten.",
    usage: ["Cremiges Kartoffel-Püree", "Fluffige Gnocchi", "Klöße & Suppen"],
    price: "12,50 €",
    image: imgPlaceholderImage3,
  },
];
