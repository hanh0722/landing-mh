import React from "react";
import { Container } from "react-bootstrap";
import styles from "./RootValue.module.scss";
import { Logo, Image } from "../../container";
import useMedia from "../../../hook/use-media";
const RootValue = ({ data }) => {
  const isMobile = useMedia("(max-width: 768px)");
  return (
    <div className={styles["container-bg"]}>
      <Container className={`text-center ${styles.container}`}>
        <h4 data-aos="fade-up" data-aos-offset={300}>
          Giá trị cốt lõi
        </h4>
        <p
          data-aos="fade-up"
          data-aos-offset={300}
          data-aos-delay={0}
          className={styles.intro}
        >
          Chúng tôi tập trung vào phát triển con người và văn hóa doanh nghiệp.
          Với 5 giá trị cốt lõi, nhân sự của chúng tôi luôn luôn phát triển và
          hoàn thiện với tinh thần{" "}
        </p>
        <h5 data-aos="fade-up" data-aos-offset={300} data-aos-delay={800}>
          “Sáng tạo, chủ động, phát huy tính đồng đội, trách nhiệm với bản thân,
          công ty và khách hàng.”
        </h5>
        {/* {data.length > 0 ? 
        <div
          data-aos="fade-up"
          data-aos-delay={800}
          data-aos-offset={300}
          className={`rounded-circle d-flex justify-content-center align-items-center position-relative ${styles["big-circle"]}`}
        >
          <div
            className={`rounded-circle d-flex justify-content-center align-items-center position-relative ${styles["small-circle"]}`}
          >
            <Logo />
          </div>
          {/* <div data-aos="fade-up" className={styles["container-circle"]}>
            {data.map((item, index) => {
              return (
                <CircleContainer
                  key={index}
                  index={index}
                  length={data.length}
                  shadow={item.shadow}
                  backgroundColor={item.backgroundColor}
                  title={item.title}
                />
              );
            })}
          </div> */}
        {/* </div> */}
        {/* // : <p className="text-center pt-5">Không có thông tin</p>} */}
        <div className={styles.image}>
          <Image
            src={!isMobile ? "/desktop-cr.png" : "/mobile-sr.png"}
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default RootValue;
