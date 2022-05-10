import React, { useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
import { UilMultiply } from "@iconscout/react-unicons";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import LanguageSelector from "./LanguageSelector";
import Link from 'next/link'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation("common");

  function clickToggle(e) {
    e.preventDefault();
    setToggle(!toggle);
  }

  var icon;
  if (!toggle) {
    icon = <UilBars size="42" />;
  } else {
    icon = <UilMultiply size="42" />;
  }

  return (
    <AnimateSharedLayout>
      <motion.div
        layout
        className={`leftnav ${toggle === true ? " responsive" : ""}`}
      >
        <div className="navbar-logo">
          <Link href="/">
            <motion.img
              layout
              src="https://res.cloudinary.com/dcemx7jg0/image/upload/f_auto,q_auto:low/v1614200361/isaldigital/ISAL_2021_Logo_wwcygs.png"
              width={32}
              height={32}
              alt="ISAL Digital 2021 Logo"
            />
          </Link>

          <LanguageSelector />
        </div>

        <div className="navbar-items">
          <a href="#Inicio">{t("nav-inicio")}</a>
          <a href="#Servicios">{t("nav-servicios")}</a>
          <a href="#Portafolio">{t("nav-portafolio")}</a>
          <a href="#Contacto">{t("nav-contacto")}</a>
          {/* <a href='https://testdigitalizacion.isaldigital.com' rel="noopener" target='_blank'>Test Digitalización</a> */}

          <motion.button
            layout
            aria-label="toggle button"
            href=""
            className="icon"
            onClick={clickToggle}
          >
            {icon}
          </motion.button>
        </div>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Navbar;
