import Navigation from "../components/Navigation/Navigation";
import App from "next/app";
import Footer from "../components/Footer/Footer";
import { Overlay, ButtonUpTop } from "../components/container";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import AOS from "aos";
import axiosConfig from "../service/base";
import { apiGetProducts } from "../config/ApiProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps, products }) {
  const { isDisabledAnimation } = pageProps;
  useEffect(() => {
    if (isDisabledAnimation) {
      AOS.init({
        disable: true,
      });
      return;
    }
    AOS.init({
      once: true,
      offset: 200,
      duration: 1000,
      delay: 200,
      anchorPlacement: "top-center",
    });
  }, [isDisabledAnimation]);
  return (
    <>
      <Provider store={store}>
        <Navigation products={products} />
        <ButtonUpTop />
        <Overlay />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
MyApp.getInitialProps = async function (ctx) {
  
  const products = await axiosConfig({
    url: apiGetProducts,
    method: "POST",
    data: {},
  });
  if (products.code >= 400) {
    return {
     
      products: [],
      // temporary for error, not having
    };
  }
  return {
  
    products: products?.result?.items,
  };
};
export default MyApp;
