import React, { useEffect } from "react";
import useScrollLoadExternal from "../utils/useScrollLoadExternal";
import { motion } from "framer-motion";
import { servicesContainer } from "../utils/animations";
import { useTranslation } from 'next-i18next'

const Calendly = () => {

  const element = useScrollLoadExternal();
  const { t } = useTranslation('common')
  return (
    <div ref={element}>
      <div id="asesoria-gratuita">
        <h2 className="gradient-text h2-calendly">
        {t('h2-agenda')} <br></br> {t('h2-agenda-br')}
        </h2>
        <div id="schedule_form" className='div-de-calendly'>
          <p className='wait-calendly'>{t('p-agenda-cargando')}</p>
          <div
            className="calendly-inline-widget diary-widget"
            data-url="https://calendly.com/isaldigital/digital-advisory"
          />
        </div>
      </div>
    </div>
  );
};

export default Calendly;

// import React, { Component } from "react";

// class Calendly extends Component {

//   componentDidMount() {
//     const head = document.querySelector("head");
//     const script = document.createElement("script");
//     script.setAttribute(
//       "src",
//       "https://assets.calendly.com/assets/external/widget.js"
//     );
//     head.appendChild(script);
//   }
//   componentWillUnmount() {
//     // whatever you need to cleanup the widgets code
//   }
//   render() {
//     return (
//       <div id='asesoria-gratuita'>
//           <h2 className='gradient-text h2-calendly'>Agenda tu asesoría <br></br> digital gratuita</h2>
//         <div id="schedule_form">
//           <div
//             className="calendly-inline-widget diary-widget"
//             data-url="https://calendly.com/isaldigital/asesoria-digital-gratuita"
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Calendly
