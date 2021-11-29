import { Swiper } from "swiper/react";
import React, { useRef } from "react";
import styles from "./Swiper-Container.module.scss";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { ArrowLeft } from "../../../public/Icon";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const SwiperContainer = ({
  children,
  className,
  slidesPerView,
  loop,
  delay,
  navigation,
  pagination,
  config,
  aos,
  classNameNormalBullet,
  classNameActiveBullet,
  classActiveCurrent,
  containerPagination,
  spaceBetween,
  isPost
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Swiper
      data-aos={aos}
      slidesPerView={slidesPerView || "auto"}
      spaceBetween={spaceBetween || 0}
      onInit={
        navigation
          ? (swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          : () => {}
      }
      pagination={
        pagination
          ? {
              clickable: true,
              bulletClass: `swiper-pagination-bullet ${classNameNormalBullet}`,
              bulletActiveClass: `swiper-pagination-bullet-active ${classNameActiveBullet}`,
              clickableClass: `.swiper-pagination-clickable ${containerPagination}`,
            }
          : false
      }
      className={`${styles.swiper} ${className}`}
      loop={loop ? true : false}
      autoplay={ delay ? {
        delay: delay,
      } : false}
      {...config}
    >
      {children}
      {navigation && (
        <>
          <div
            className={`${config && config.left ? config.left : ""} ${
              styles.left
            }`}
            ref={prevRef}
          >
            <ArrowLeft />
          </div>
          <div
            className={`${config && config.right ? config.right : ""} ${
              styles.right
            }`}
            ref={nextRef}
          >
            <ArrowLeft />
          </div>
        </>
      )}
    </Swiper>
  );
};

export default SwiperContainer;
