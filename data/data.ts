import { ICardMenu, IFeedbackData } from "../types/types";
import ImagePrimaryFood from "../public/ImagePrimaryFood.png";
import ImageSecondaryFood from "../public/ImageSecondaryFood.png";
import PrimaryFeedback from "../public/PrimaryComentsImage.png";
import PrimaryHighlights from "../public/ImageFileGrelhado.png";
import SecondaryHighlights from "../public/ImageContraFile.png";
import TerceryHighlights from "../public/ImageFilas.png";
import quartyHighlights from "../public/ImageAlmodegas.png";
import ImageBiff from "../public/ImageBifeCavalo.png";
import ImageCalabresa from "../public/ImageCalabresa.png";
import ImageParmegiana from "../public/ImageParmegiana.png";
import ImageSpaghetti from "../public/ImageSpaghetti.png";
import ImageBiffFried from "../public/ImageBiff.png";
import ImageMerluza from "../public/ImageMerluza.png";
import ImageChicken from "../public/ImageChicken.png";

export const DataNav = [
  { value: "Inicio", href: "#Init" },
  { value: "Destaque", href: "#About" },
  { value: "Sobre Nós", href: "#Feature" },
  { value: "Cardápio", href: "#Menu" },
  { value: "Feedbacks", href: "#Feedback" },
  { value: "Contato", href: "#Contact" },
];

export const highlightsData: ICardMenu[] = [
  {
    image: PrimaryHighlights,
    title: "Arrumadinho Contra Filé Grelhado",
    content:
      "2 unidades de contra filé, 1 porção arroz, 1 porção feijão, 1 porção p batata frita, 1 porção salada",
    price: "R$ 85,00",
  },
  {
    image: SecondaryHighlights,
    title: "Contra File em Tiras Com Batata Frita",
    content: "Arroz e feijão contra file e batata frita",
    price: "R$ 34,90",
  },
  {
    image: TerceryHighlights,
    title: "Contra File em Tiras Executivo",
    content: "Arroz, feijao, contra file em tiras, guarnição e salada.",
    price: "R$ 30,90",
  },
  {
    image: quartyHighlights,
    title: "Almondegas ao Molho",
    content:
      "6 Unidades de Almondegas deliciosas acompanhadas com queijo e Um molho maravilhoso!",
    price: "R$ 26,90",
  },
];

export const MenuData: ICardMenu[] = [
  {
    image: PrimaryHighlights,
    title: "Arrumadinho Contra Filé Grelhado",
    content:
      "2 unidades de contra filé, 1 porção arroz, 1 porção feijão, 1 porção p batata frita, 1 porção salada",
    price: "R$ 85,00",
  },

  {
    image: TerceryHighlights,
    title: "Contra File em Tiras Executivo",
    content: "Arroz, feijao, contra file em tiras, guarnição e salada.",
    price: "R$ 30,90",
  },
  {
    image: quartyHighlights,
    title: "Almondegas ao Molho",
    content:
      "6 Unidades de Almondegas deliciosas acompanhadas com queijo e Um molho maravilhoso!",
    price: "R$ 26,90",
  },
  {
    image: ImageParmegiana,
    title: "Parmegiana de Frango Executivo",
    content: "Arroz feijao guarnição e salada.",
    price: "R$ 30,90",
  },
  {
    image: SecondaryHighlights,
    title: "Contra File em Tiras Com Batata Frita",
    content: "Arroz e feijão contra file e batata frita",
    price: "R$ 34,90",
  },
  {
    image: ImageBiff,
    title: "Bife à Cavalo Executivo",
    content: "Arroz, feijão, ovo frito, bife frito e salada de folhas.",
    price: "R$ 29,90",
  },
  {
    image: ImageCalabresa,
    title: "Calabresa Acebolada Executivo",
    content: "Arroz, feijao, calabresa acebolada, guarnição e salada",
    price: "R$ 29,90",
  },

  {
    image: ImageSpaghetti,
    title: "Spaghetti e Parmegiana de Carne + Bebida",
    content: "Bandeja de 800 ml ( aproximadamente 500 a 650g)",
    price: "R$ 32,90",
  },
  {
    image: ImageBiffFried,
    title: "Bife Frito",
    content: "Bandeja de 800 ml.",
    price: "R$ 27,90",
  },
  {
    image: ImageMerluza,
    title: "File de Merluza",
    content:
      "Delicie-se com o File de Merluza em nosso prato. Uma seleção exuberante.",
    price: "R$ 26,90",
  },
  {
    image: ImageChicken,
    title: "File de Frango Grelhado",
    content: "Arroz feijao e file de frango.",
    price: "R$ 24,90",
  },
  {
    image: ImageMerluza,
    title: "Frutos do Mar à Marinheira",
    content:
      "Delicie-se com o frescor do mar em nosso prato de frutos do mar à marinheira. Uma seleção exuberante de camarões suculentos, lulas tenras e mexilhões.",
    price: "R$ 65,90",
  },

  {
    image: ImageMerluza,
    title: "Frutos do Mar à Marinheira",
    content:
      "Delicie-se com o frescor do mar em nosso prato de frutos do mar à marinheira. Uma seleção exuberante de camarões suculentos, lulas tenras e mexilhões.",
    price: "R$ 65,90",
  },
];

export const FeedbackData: IFeedbackData[] = [
  {
    content:
      " Self-service com bastante opção, massas, comida japonesa, etc...Poderia melhorar a estrutura do local e banheiros.Poderia ter mais opções de sobremesas.O caldo também é bom.Resumindo é um Ótimo lugar pra almoçar com a família e amigos.",
    image: PrimaryFeedback,
    name: "Cintialelis rubio",
  },
  {
    content:
      " Self-service com bastante opção, massas, comida japonesa, etc...Poderia melhorar a estrutura do local e banheiros.Poderia ter mais opções de sobremesas.O caldo também é bom.Resumindo é um Ótimo lugar pra almoçar com a família e amigos.",
    image: PrimaryFeedback,
    name: "Cintialelis rubio",
  },
  {
    content:
      " Self-service com bastante opção, massas, comida japonesa, etc...Poderia melhorar a estrutura do local e banheiros.Poderia ter mais opções de sobremesas.O caldo também é bom.Resumindo é um Ótimo lugar pra almoçar com a família e amigos.",
    image: PrimaryFeedback,
    name: "Cintialelis rubio",
  },
];
