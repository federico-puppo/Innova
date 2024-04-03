import {
  ArrowTrendingUpIcon,
  FilmIcon,
  PaintBrushIcon,
  ChatBubbleBottomCenterTextIcon,
  PlayCircleIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  AcademicCapIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/services.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitZero = {
  bullets: [
    {
      //🚀
      title: "Te asesoramos para llegar al próximo nivel",
      desc: "",
      icon: <RocketLaunchIcon />,
    },
    {
      //🌐
      title: "Red de Profesionales",
      desc: "",
      icon: <GlobeAltIcon />,
    },
    {
      //🧑🏻‍💻 
      title: "Capacitaciones para tu empresa",
      desc: "",
      icon: <AcademicCapIcon />,
    },
  ],
};


const benefitOne = {
  title: "NUESTROS SERVICIOS",
  desc: "En Innova Solutions, no solo nos dedicamos al marketing digital; redefinimos los límites de lo posible. Con una pasión ardiente por la innovación y el éxito de nuestros clientes, somos más que una empresa: somos el catalizador que transformará su negocio para el mundo digital de mañana.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Marketing",
      desc: "Impulsamos su marca y su negocio a nuevos horizontes digitales a través de estrategias de marketing innovadoras y efectivas.",
      icon: <ArrowTrendingUpIcon />,
    },
    {
      title: "Audiovisual",
      desc: "Creamos contenido audiovisual cautivador que conecta con su audiencia y transmite su mensaje de manera impactante.",
      icon: <FilmIcon />,
    },
    {
      title: "Diseño Gráfico",
      desc: "Diseñamos elementos visuales únicos y atractivos que reflejan la identidad de su marca y cautivan a su audiencia.",
      icon: <PaintBrushIcon />,
    },
    {
      title: "Anuncios",
      desc: "Creamos campañas publicitarias efectivas y persuasivas que aumentan la visibilidad y el alcance de su marca.",
      icon: <PlayCircleIcon />,
    },
    {
      title: "Comunity Management",
      desc: "Gestionamos sus redes sociales de manera profesional y estratégica, construyendo una comunidad comprometida y fiel a su marca.",
      icon: <ChatBubbleBottomCenterTextIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <ArrowTrendingUpIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <ArrowTrendingUpIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <ArrowTrendingUpIcon />,
    },
  ],
};



export {benefitZero, benefitOne, benefitTwo};
