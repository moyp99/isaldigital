import React from "react";
import { motion } from "framer-motion";
import useScroll from "../utils/useScroll";
import {
  titleAnim,
  servicesContainer,
  appearFromRight,
} from "../utils/animations";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'next-i18next'

const Services = () => {
  const [element, control] = useScroll();
  const { t } = useTranslation('common');

  return (
    <motion.div
      ref={element}
      animate={control}
      variants={servicesContainer}
      id="Servicios"
      className="home-4 pt-5"
    >
      <motion.h2
        variants={titleAnim}
        
        className="gradient-text"
      >
        {t('h2-nuestros-servicios')}
      </motion.h2>
      <motion.div
      
        variants={appearFromRight}
        className="services-container "
      >
        
        <div className="service-container gm-sec">
          <div className="service-img pt-2">
            <LazyLoadImage
              src="https://res.cloudinary.com/dcemx7jg0/image/upload/f_auto,q_auto:low/v1614708544/isaldigital/isal2021_home_zjardz.png"
              width="1280"
              height="620"
              alt="Diseño y desarrollo web creativo y profesional en Quéretaro"
            ></LazyLoadImage>
          </div>

          <h3 className="">{t('h3-servicios-web')}</h3>
          <p>
          {t('p-servicios-web')}
          </p>
          <div className="pt-1 service-btns">
            <a href="#asesoria-gratuita" className="btn gm-sec">
            {t('btn-asesoria')}
            </a>
            <a href="#Contacto" className="btn gm-sec">
            {t('btn-contactenos')}
            </a>
          </div>
        </div>
        <div className="service-container gm-sec">
          <div className="service-img pt-2">
            <LazyLoadImage
              src="https://res.cloudinary.com/dcemx7jg0/image/upload/f_auto,q_auto:low/v1614711833/isaldigital/isal2021_home4_l1velw.png"
              width="1280"
              height="620"
              alt="Diseño y desarrollo de aplicaciones moviles en Quéretaro"
            ></LazyLoadImage>
          </div>

          <h3 className="">{t('h3-servicios-movil')}</h3>
          <p>
          {t('p-servicios-movil')}
          </p>
          <div className="pt-1 service-btns">
            <a href="#asesoria-gratuita" className="btn gm-sec">
            {t('btn-asesoria')}
            </a>
            <a href="#Contacto" className="btn gm-sec">
            {t('btn-contactenos')}
            </a>
          </div>
          
        </div>
        <div className="service-container gm-sec">
          <div className="service-img pt-2">
            <LazyLoadImage
              src="https://res.cloudinary.com/dcemx7jg0/image/upload/c_scale,f_auto,q_auto:low,w_1280/v1614711605/isaldigital/isal2021_home6_pllgrp.png"
              width="1280"
              height="620"
              alt="Agencia de Transformación digital en Querétaro"
            ></LazyLoadImage>
          </div>

          <h3 className="">{t('h3-servicios-transf')}</h3>
          <p>
          {t('p-servicios-transf')}
          </p>
          <div className="pt-1 service-btns">
            <a href="#asesoria-gratuita" className="btn gm-sec">
            {t('btn-asesoria')}
            </a>
            <a href="#Contacto" className="btn gm-sec">
            {t('btn-contactenos')}
            </a>
          </div>
        </div>
        <div className="service-container gm-sec">
          <div className="service-img pt-2">
            <LazyLoadImage
              src="https://res.cloudinary.com/dcemx7jg0/image/upload/c_scale,f_auto,q_auto:low,w_1280/v1614711604/isaldigital/isal2021_home5_nzqwia.png"
              width="1280"
              height="620"
              alt="Automatización de procesos empresariales y de negocios en Querétaro"
            ></LazyLoadImage>
          </div>

          <h3 className="">{t('h3-servicios-auto')}</h3>
          <p>
          {t('p-servicios-auto')}
          </p>
          <div className="pt-1 service-btns">
            <a href="#asesoria-gratuita" className="btn gm-sec">
            {t('btn-asesoria')}
            </a>
            <a href="#Contacto" className="btn gm-sec">
            {t('btn-contactenos')}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
