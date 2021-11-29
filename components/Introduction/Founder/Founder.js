import React from "react";
import { ContainerSmall, SwiperContainer } from "../../container";
import { SwiperSlide } from "swiper/react";
import RenderSlide from "./RenderSlide/RenderSlide";
import styles from "./Founder.module.scss";
import useMedia from "../../../hook/use-media";
const Founder = ({ dataFounder }) => {
  const isMatchMobile = useMedia("(max-width: 768px)");
  return (
    <div className={styles.bg}>
      <ContainerSmall className={styles.container}>
        <h4>Sáng Lập - Cố Vấn</h4>
        <SwiperContainer
          config={{
            left: styles.left,
            right: styles.right,
            "data-aos-delay": 1000,
            "data-aos-offset": 300,
          }}
          aos="fade-up"
          className={styles.swiper}
          spaceBetween={isMatchMobile ? 16 : 24}
          navigation={(dataFounder.length > 1 && !isMatchMobile) ? true : false}
          pagination
          classNameNormalBullet={styles.bullet}
          classNameActiveBullet={styles['active-bullet']}
          clickable={true}
        >
          {dataFounder ? (
            dataFounder?.map((founder, index) => {
              return (
                <SwiperSlide className={styles.slide} key={index}>
                  <RenderSlide
                    name={founder.name}
                    introduction={founder.about || "Không có dữ liệu"}
                    url_cover={founder.avatar || "/Founder-2.png"}
                    socials={founder.socials}
                  />
                </SwiperSlide>
              );
            })
          ) : (
            <p className={"text-center pt-5"}>Không có dữ liệu</p>
          )}
        </SwiperContainer>
      </ContainerSmall>
    </div>
  );
};

export default Founder;
