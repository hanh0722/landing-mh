import React from "react";
import { LayoutContainer, SwiperContainer, Image, Grid } from "../../container";
import styles from "./Partner.module.scss";
import { SwiperSlide } from "swiper/react";
import useMedia from "../../../hook/use-media";
const Partner = (props) => {
  const matchMobile = useMedia("(max-width: 375px)");
  const _renderSlider = (number) => {
    const array = [];
    // fake slider
    for (let i = 0; i < number; i++) {
      array.push(
        <SwiperSlide className="position-relative" key={i}>
          <Image layout="fill" src={"/partner.png"} alt="" />
        </SwiperSlide>
      );
    }
    return array;
  };
  return (
    <div className={`${styles["container-middle"]} ${props.className}`}>
      <h4>Đối tác</h4>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className={styles.background}
      >
        <LayoutContainer className={styles["container-bg"]}>
          {!matchMobile && (
            <SwiperContainer
              className={styles.swiper}
              navigation={matchMobile ? false : true}
              config={{
                left: styles.left,
                right: styles.right,
                breakpoints: {
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  576: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 42,
                  },
                },
              }}
              loop
            >
              {props.partners &&
                props.partners?.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <Image
                        className={`${styles.image} d-flex justify-content-center align-items-center`}
                        src={item.avatar}
                        alt=""
                      />
                    </SwiperSlide>
                  );
                })}
              {!props.partners && _renderSlider(5)}
            </SwiperContainer>
          )}
          {matchMobile && (
            <Grid className={styles["grid-partner"]}>
              {props.partners?.map((item, index) => {
                if (index < 5) {
                  return (
                    <Image
                      className={`${styles.image} ${styles["mobile-partner"]}`}
                      key={item.id}
                      alt=""
                      src={item?.avatar}
                    />
                  );
                }
              })}
            </Grid>
          )}
        </LayoutContainer>
      </div>
    </div>
  );
};

export default Partner;
