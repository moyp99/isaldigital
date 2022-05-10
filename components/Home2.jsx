import React from "react";
import { motion } from "framer-motion";
import useScroll from "../utils/useScroll";
import { scaleUp, scaleUpContainer } from "../utils/animations";
import { useTranslation } from "next-i18next";

const Home2 = () => {
  const { t } = useTranslation("common");
  const [element, control] = useScroll();
  return (
    <motion.div
      ref={element}
      variants={scaleUpContainer}
      initial="hidden"
      animate={control}
      className="home-2"
    >
      <motion.h2 variants={scaleUp} className="gradient-text">
        {t("h2-digitalizar-tu-negocio")}
      </motion.h2>
      <motion.h3 variants={scaleUp} className="gradient-text">
        {t("h3-la-digitalizacion")}
      </motion.h3>
      <motion.h4 variants={scaleUp} className="gradient-text" ref={element}>
        {t("h4-en-isal-queremos")}
      </motion.h4>
    </motion.div>
  );
};

export default Home2;
