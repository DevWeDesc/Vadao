import { ICardMenu, IDataRestaurant, IFeedbackData } from "../types/types";
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
import ImageParmegianaCarne from "../public/ImageParmegianaCarne.png";
import SaladaFrango from "../public/SaladaFrango.png";
import ImageBife from "../public/ImageBife.png";
import ImageOmelete from "../public/ImageOmelete.png";
import ImageCalabresaAcebolada from "../public/ImageCalabresaAcebolada.png";
import ImageArrumadinhoCalaresa from "../public/ImageArrumadinhoCalaresa.png";
import ImageAbacaxi from "../public/ImageAbacaxi.png";
import ImageH2OH from "../public/ImageH2OH.png";
import ImageRefri from "../public/ImageRefri.png";
import ImageSuco from "../public/ImageSuco.png";
import ImageSucoDetox from "../public/ImageSucoDetox.png";
import ImageAgua from "../public/ImageAgua.png";
import ImageH2O15 from "../public/ImageH2O1,5.png";
import ImageRestaurant from "../public/ImageVadãoRestaurante.jpg";
import ImageRestaurant2 from "../public/ImgPratoVadão.png";
import ImageRestaurant3 from "../public/ImageVadão.png";

export const DataRestaurant: IDataRestaurant[] = [
  { photo: ImageRestaurant },
  { photo: ImageRestaurant2 },
  { photo: ImageRestaurant3 },
];

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
    image: ImageOmelete,
    title: "Omelete de Queijo",
    content: "Arroz feijao bandeja de 800 ml e 1100 ml",
    price: "R$ 24,90",
  },
  {
    image: ImageCalabresaAcebolada,
    title: "Clabresa Acebolada",
    content: "Arroz e feijao e acompanhamento",
    price: "R$ 25,90",
  },
  {
    image: ImageBife,
    title: "Bife a Milanesa",
    content: "Arroz e feijao e acompanhamentos.",
    price: "R$ 28,90",
  },
  {
    image: SaladaFrango,
    title: "Slada com Frango Grelhado + Suco Natural de Laranja",
    content:
      "Salada de couve flor cenoura e vagem Com frango grelhado Sem arroz e feijao bandeja de 800 ml",
    price: "R$ 29,90",
  },
  {
    image: ImageParmegianaCarne,
    title: "Parmegiana de Carne + Bebida",
    content:
      "Arroz feijao, parmegiana e acompanhamento Bandeja de 800 ml ( aprox 570 a 700g)",
    price: "R$ 34,90",
  },
  {
    image: ImageArrumadinhoCalaresa,
    title: "Arrumadinho Calabresa Acebolada",
    content:
      "1 porção de arroz, 1 porção de feijão, 1 porção de batata frita, 1 porção de salada",
    price: "R$ 75,00",
  },
  {
    image: ImageAbacaxi,
    title: "Abacaxi, Couve, Gengibre e Hortelã",
    content: "Suco detox 500ml",
    price: "R$ 9,90",
  },
  {
    image: ImageH2OH,
    title: "H2O 500ML",
    content: "Limão, limoneto",
    price: "R$ 6,50",
  },
  {
    image: ImageRefri,
    title: "Refrigerante em Lata",
    content: "Soda, coca cola, Guaraná Antarctica , Fanta uva e água Tônica",
    price: "R$ 6,50",
  },
  {
    image: ImageSuco,
    title: "Suco",
    content: "",
    price: "R$ 6,50",
  },
  {
    image: ImageSucoDetox,
    title: "Suco Detox",
    content: "Maçã, cenoura , beterraba e gengibre 500ml",
    price: "R$ 9,90",
  },
  {
    image: ImageAgua,
    title: "Água Mineral Sem Gás 500ML",
    content: "",
    price: "R$ 3,00",
  },
  {
    image: ImageH2O15,
    title: "H20 1,5 LITROS",
    content: "",
    price: "R$ 10,00",
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
