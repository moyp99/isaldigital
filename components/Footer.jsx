import React from "react";
import { useTranslation } from 'next-i18next'

const Footer = () => {

  const { t } = useTranslation('common')

  return (
    <div className="footer">
      <p>
        <b>{t('p-sucursales-b')}</b>
      {t('p-sucursales')}
      </p>
      <div className="gm-sec footer-div">
        <p>{t('p-hecho-con')}</p>
      </div>
    </div>
  );
};

export default Footer;
