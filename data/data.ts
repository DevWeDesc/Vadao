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
import ImageComent2 from "../public/ImageCintia.png";
import ImageComent3 from "../public/ImageFeedbackDani.png";
import ImageComent4 from "../public/ImageFeedbackJaque.png";
import { title } from "process";

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
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=b17b1b09-d873-4246-9e85-759b5c1228a4",
  },
  {
    image: SecondaryHighlights,
    title: "Contra File em Tiras Com Batata Frita",
    content: "Arroz e feijão contra file e batata frita",
    price: "R$ 34,90",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=5b3287d2-bb11-4a79-a429-fc47c50e007e",
  },
  {
    image: TerceryHighlights,
    title: "Contra File em Tiras Executivo",
    content: "Arroz, feijao, contra file em tiras, guarnição e salada.",
    price: "R$ 30,90",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=163b2af4-a3f4-402f-abe8-aa2c411788d8",
  },
  {
    image: TerceryHighlights,
    title: "Contra File em Tiras Executivo",
    content: "Arroz, feijao, contra file em tiras, guarnição e salada.",
    price: "R$ 30,90",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=163b2af4-a3f4-402f-abe8-aa2c411788d8",
  },
  // {
  //   image: quartyHighlights,
  //   title: "Almondegas ao Molho",
  //   content:
  //     "6 Unidades de Almondegas deliciosas acompanhadas com queijo e Um molho maravilhoso!",
  //   price: "R$ 26,90",
  //   href: "",
  // },
];

export const MenuData: ICardMenu[] = [
  {
    image: PrimaryHighlights,
    title: "Arrumadinho Contra Filé Grelhado",
    content:
      "2 unidades de contra filé, 1 porção arroz, 1 porção feijão, 1 porção p batata frita, 1 porção salada",
    price: "R$ 85,00",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=b17b1b09-d873-4246-9e85-759b5c1228a4",
  },

  {
    image: TerceryHighlights,
    title: "Contra File em Tiras Executivo",
    content: "Arroz, feijao, contra file em tiras, guarnição e salada.",
    price: "R$ 30,90",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=163b2af4-a3f4-402f-abe8-aa2c411788d8",
  },
  {
    image: quartyHighlights,
    title: "Almondegas ao Molho",
    content:
      "6 Unidades de Almondegas deliciosas acompanhadas com queijo e Um molho maravilhoso!",
    price: "R$ 26,90",
    href: "",
  },
  {
    image: ImageParmegiana,
    title: "Parmegiana de Frango Executivo",
    content: "Arroz feijao guarnição e salada.",
    price: "R$ 30,90",
    href: "",
  },
  {
    image: SecondaryHighlights,
    title: "Contra File em Tiras Com Batata Frita",
    content: "Arroz e feijão contra file e batata frita",
    price: "R$ 34,90",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=728859a4-deba-4cd8-98ac-66efe725988c",
  },
  {
    image: ImageBiff,
    title: "Bife à Cavalo Executivo",
    content: "Arroz, feijão, ovo frito, bife frito e salada de folhas.",
    price: "R$ 29,90",
    href: "",
  },
  {
    image: ImageCalabresa,
    title: "Calabresa Acebolada Executivo",
    content: "Arroz, feijao, calabresa acebolada, guarnição e salada",
    price: "R$ 29,90",
    href: "",
  },

  {
    image: ImageSpaghetti,
    title: "Spaghetti e Parmegiana de Carne + Bebida",
    content: "Bandeja de 800 ml ( aproximadamente 500 a 650g)",
    price: "R$ 32,90",
    href: "",
  },
  {
    image: ImageBiffFried,
    title: "Bife Frito",
    content: "Bandeja de 800 ml.",
    price: "R$ 27,90",
    href: "",
  },
  {
    image: ImageMerluza,
    title: "File de Merluza",
    content:
      "Delicie-se com o File de Merluza em nosso prato. Uma seleção exuberante.",
    price: "R$ 26,90",
    href: "",
  },
  {
    image: ImageChicken,
    title: "File de Frango Grelhado",
    content: "Arroz feijao e file de frango.",
    price: "R$ 24,90",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=663bf63a-37e8-4cbb-8ecf-e14cbadfe993",
  },
  {
    image: ImageOmelete,
    title: "Omelete de Queijo",
    content: "Arroz feijao bandeja de 800 ml e 1100 ml",
    price: "R$ 24,90",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=5d101198-96e4-46ad-bc9f-655f62a7cbed",
  },
  {
    image: ImageCalabresaAcebolada,
    title: "Clabresa Acebolada",
    content: "Arroz e feijao e acompanhamento",
    price: "R$ 25,90",
    href: "",
  },
  {
    image: ImageBife,
    title: "Bife a Milanesa",
    content: "Arroz e feijao e acompanhamentos.",
    price: "R$ 28,90",
    href: "",
  },
  {
    image: SaladaFrango,
    title: "Slada com Frango Grelhado + Suco Natural de Laranja",
    content:
      "Salada de couve flor cenoura e vagem Com frango grelhado Sem arroz e feijao bandeja de 800 ml",
    price: "R$ 29,90",
    href: "",
  },
  {
    image: ImageParmegianaCarne,
    title: "Parmegiana de Carne + Bebida",
    content:
      "Arroz feijao, parmegiana e acompanhamento Bandeja de 800 ml ( aprox 570 a 700g)",
    price: "R$ 34,90",
    href: "",
  },
  {
    image: ImageArrumadinhoCalaresa,
    title: "Arrumadinho Calabresa Acebolada",
    content:
      "1 porção de arroz, 1 porção de feijão, 1 porção de batata frita, 1 porção de salada",
    price: "R$ 75,00",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=3c101ec8-2519-4d07-91dd-81c03d2bb873",
  },
  {
    image: ImageAbacaxi,
    title: "Abacaxi, Couve, Gengibre e Hortelã",
    content: "Suco detox 500ml",
    price: "R$ 9,90",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=5e1291f8-cc2b-44f8-8eeb-8dbff194356d",
  },
  {
    image: ImageH2OH,
    title: "H2O 500ML",
    content: "Limão, limoneto",
    price: "R$ 6,50",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=ebc2491b-2ccb-4d01-8b18-a610ac992b9f",
  },
  {
    image: ImageRefri,
    title: "Refrigerante em Lata",
    content: "Soda, coca cola, Guaraná Antarctica , Fanta uva e água Tônica",
    price: "R$ 6,50",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=4a3ba214-2512-44eb-9ad6-65f26132e1cd",
  },
  {
    image: ImageSuco,
    title: "Suco",
    content: "",
    price: "R$ 6,50",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=03ddc9a3-6cf9-45fd-b808-d3b648adad4b",
  },
  {
    image: ImageSucoDetox,
    title: "Suco Detox",
    content: "Maçã, cenoura , beterraba e gengibre 500ml",
    price: "R$ 9,90",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=0db79792-8ddb-4734-8a20-a0883dede87b",
  },
  {
    image: ImageAgua,
    title: "Água Mineral Sem Gás 500ML",
    content: "",
    price: "R$ 3,00",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=0ce1293b-6034-4f70-abdd-3b909d2e6aaf",
  },
  {
    image: ImageH2O15,
    title: "H20 1,5 LITROS",
    content: "",
    price: "R$ 10,00",
    href: "https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158?prato=cdb26bb1-55ba-4406-9564-e6eb41d2e699",
  },
];

export const FeedbackData: IFeedbackData[] = [
  {
    content:
      " Self-service com bastante opção, massas, comida japonesa, etc...Poderia melhorar a estrutura do local e banheiros.Poderia ter mais opções de sobremesas.O caldo também é bom.Resumindo é um Ótimo lugar pra almoçar com a família e amigos.",
    image: ImageComent2,
    name: "Cintialelis rubio",
  },
  {
    content:
      " Local de refeição super agradável, conta com um buffet de opções variadas e preço fixo facilitando que todos experimentem tudo o que desejam! Fui em Fantasia e tive uma ótima experiência!",
    image: ImageComent3,
    name: "Dani Almeida",
  },
  {
    content:
      " Rodízio de Camarão é excelente, várias opções de pratos feito com camarão, tbm tem opções com peixes, e alguns itens de comida japonesa. Comemos mto, fomos mto bem atendidos e com certeza voltaremos mais vezes.",
    image: ImageComent4,
    name: "Jaque Garcia",
  },
];
