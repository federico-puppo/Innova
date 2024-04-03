import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import { CarouselDefault } from "../components/carousel";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>INNOVA Solutions</title>
        <meta
          name="description"
          content="Soluciones Tecnológicas & Marketing Digital"
          title="INNOVA Solutions"
          description="Soluciones Tecnológicas & Marketing Digital"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      {/* <SectionTitle pretitle="Servicios" title=" ¿Por qué elegirnos? ">
        Porque en Innova Solutions, entendemos que el verdadero éxito viene de
        la colaboración, la innovación continua y el compromiso inquebrantable
        con la excelencia. Nuestra estrategia se centra en entender
        profundamente las metas de su negocio y transformar esa visión en
        resultados tangibles, utilizando las últimas tecnologías y estrategias
        en marketing digital. Con nosotros, su empresa no solo estará preparada
        para el futuro; estará definiendo el futuro.
      </SectionTitle> */}
      <div id="2">
        <Benefits data={benefitOne} />
      </div>
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <Benefits data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      {/* <PopupWidget /> */}
    </div>
  );
};

export default Home;
