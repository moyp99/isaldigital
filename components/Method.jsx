import React from "react";
import { motion } from "framer-motion";
import useScroll from "../utils/useScroll";
import { methodSteps, methodContainer } from "../utils/animations";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from 'next-i18next';

const Method = () => {
  const [element, control] = useScroll();
  const { t } = useTranslation('common');
  
  return (
    <motion.div
      ref={element}
      animate={control}
      variants={methodContainer}
      className="home-3 pt-5"
    >
      <div className="home-3-div">
        <div className="">
          <h2 className=" text-1 gradient-text">
          {t('h2-metodologia')}
          </h2>
          <p>
          {t('p-metodologia')}
          </p>
          <div>
            <motion.div
              variants={methodSteps}
              className="pt-2"
            >
              <img
                width={100}
                height={100}
                alt="ISAL Digital 2021 Logo"
                src="https://res.cloudinary.com/dcemx7jg0/image/upload/v1614649099/isaldigital/icons/play_allvb8.svg"
              ></img>
              <p>{t('p-metodologia-1')}</p>
            </motion.div>
            <motion.div
              variants={methodSteps}
              className="pt-2"
            >
              <img
                width={100}
                height={100}
                alt="ISAL Digital 2021 Logo"
                src="https://res.cloudinary.com/dcemx7jg0/image/upload/v1614650625/isaldigital/icons/search_dyrsu0.svg"
              ></img>
              <p>{t('p-metodologia-2')}</p>
            </motion.div>
            <motion.div
              variants={methodSteps}
              className="pt-2"
            >
              <img
                width={100}
                height={100}
                alt="ISAL Digital 2021 Logo"
                src="https://res.cloudinary.com/dcemx7jg0/image/upload/v1614650625/isaldigital/icons/customer-service_nz5zme.svg"
              ></img>
              <p>{t('p-metodologia-3')}</p>
            </motion.div>
            <motion.div
              variants={methodSteps}
              className="pt-2"
            >
              <img
                width={100}
                height={100}
                alt="ISAL Digital 2021 Logo"
                src="https://res.cloudinary.com/dcemx7jg0/image/upload/v1614650625/isaldigital/icons/people-network_rhbjvg.svg"
              ></img>
              <p>{t('p-metodologia-4')}</p>
            </motion.div>
            <motion.div
              variants={methodSteps}
              className="pt-2"
            >
              <img
                width={100}
                height={100}
                alt="ISAL Digital 2021 Logo"
                src="https://res.cloudinary.com/dcemx7jg0/image/upload/v1614650625/isaldigital/icons/vr-glasses_v4rsh8.svg"
              ></img>
              <p>
              {t('p-metodologia-5')}
              </p>
            </motion.div>
            <motion.div
              variants={methodSteps}
              className="pt-2"
            >
              <img
                width={100}
                height={100}
                alt="ISAL Digital 2021 Logo"
                src="https://res.cloudinary.com/dcemx7jg0/image/upload/v1614650625/isaldigital/icons/sword_dou2sl.svg"
              ></img>
              <p>
              {t('p-metodologia-6')}
              </p>
            </motion.div>
          </div>

          <div className="pt-1 group-btns">
            <a href="#asesoria-gratuita" className="btn gm-sec">
            {t('btn-asesoria')}
            </a>
            <a href="#Contacto" className="btn gm-sec">
            {t('btn-contactenos')}
            </a>
          </div>
        </div>
      </div>
      <div className="home-3-div">
        <div className="gm-sec gm-div">
        <LazyLoadImage
              src="https://res.cloudinary.com/dcemx7jg0/image/upload/c_scale,f_auto,h_920,q_auto:low/v1614548529/isaldigital/isal2021_home3_vl0qgg.png"
              width={1139}
              height={920}
              alt="Agencia de transformacion digital en Queretaro"
            />
       
        </div>
      </div>
    </motion.div>
  );
};

export default Method;
