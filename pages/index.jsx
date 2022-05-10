import React from 'react'
import Background from "../components/Background";
import Contact from "../components/Contact";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeIn, circleToRectangle, titleAnim } from "../utils/animations";
import Home2 from "../components/Home2";
import Services from "../components/Services";
// import Calendly from "../components/Calendly";
import CustomACForm from "../components/CustomACForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dynamic from "next/dynamic";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Method = dynamic(() => import("../components/Method"));
const Portfolio = dynamic(() => import("../components/Portfolio"));
const Calendly = dynamic(() => import("../components/Calendly"), {
  loading: () => <div>Cargando componente...</div>,
  ssr: false 
});

export default function Home() {

  const { t } = useTranslation('common')

  return (
    <Container>
      <Background />

      <div id="Inicio" className="home-1">
        <div className="home-1-div">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className=""
          >
            <h5>{t('h5-desarrollo-de-software')}</h5>
            <motion.h1 variants={titleAnim} className=" text-1 gradient-text">
              {t('h1-soluciones')}
            </motion.h1>
            <p>
            {t('p-en-isal')}
            </p>
            <div className="pt-1 group-btns">
              <a href="#asesoria-gratuita" className="btn gm-sec">
              {t('btn-asesoria')}
              </a>
              <a href="#Contacto" className="btn gm-sec">
              {t('btn-contactenos')}
              </a>
            </div>
          </motion.div>
        </div>
        <div className="home-1-div">
          <motion.div
            variants={circleToRectangle}
            initial="hidden"
            animate="show"
            className="gm-sec gm-div"
          >
            <LazyLoadImage
              src="https://res.cloudinary.com/dcemx7jg0/image/upload/c_scale,f_auto,h_920,q_auto:low/v1614538082/isaldigital/isal2021_home2_ty4vi7.png"
              width={1139}
              height={920}
              alt="Agencia de transformacion digital en Queretaro"
            />
          </motion.div>
        </div>
        <div className="scroll-container">
          <div className="chevron" />
          <div className="chevron" />
          <div className="chevron" />
          <span className="text">{t("p-sigue-bajando")}</span>
        </div>
      </div>

      <Home2 />
      <CustomACForm/>
      <Services />
      <Method />
      <Portfolio />
      <Calendly />
      <Contact />
      
      <Footer />
    </Container>
  );
}

export const getStaticProps = async ({locale}) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  }
})


