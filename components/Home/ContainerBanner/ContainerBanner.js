import {
  Line,
  LayoutContainer,
  ContainerBanner as Container,
} from "../../container";
import styles from "./ContainerBanner.module.scss";

const ContainerBanner = ({ banner }) => {
  const { result: data } = banner;
  return (
    <Container className={`${styles.banner} d-flex justify-content-start align-items-end`} style={{background: `url('${data.src_image}')`}}>
      <LayoutContainer className={styles.container}>
        <div data-aos="fade-up" className={styles.content}>
          <h3 className={styles.title}>{data.title}</h3>
          <Line className={styles.line} />
          <p className={styles.text}>
            {data.content}
          </p>
        </div>
      </LayoutContainer>
    </Container>
  );
};

export default ContainerBanner;
