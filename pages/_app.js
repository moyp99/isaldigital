import "../styles/Global.sass";
import "../styles/CustomACForm.scss";
import "../styles/Gracias.sass";
import "../styles/Home.sass";
// import "../styles/loader.css";
import "../styles/Navbar.sass";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { appWithTranslation } from "next-i18next";
// import '../utils/i18n'
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp)
