import React from "react";
import {
  ContainerBanner,
  BoxLayout,
  BreadCrumbScript,
} from "../../components/container";
import Form from "../../components/Contact/Form/Form";
import styles from "../../components/Contact/Form/Form.module.scss";
const Contact = ({ contact }) => {
  return (
    <>
      <BreadCrumbScript dataElement={[]} title="Liên hệ | MH - Solution" />
      <ContainerBanner style={{ background: "transparent" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.467018702984!2d105.79492111520663!3d21.01399149365754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab597644cd75%3A0x862d26fc13f09e77!2zUC4gVHJ1bmcgS2nMgW5oLCBUcnVuZyBIb8OgLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1635932050798!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: "0", position: "relative", zIndex: "10" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </ContainerBanner>
      <BoxLayout className={styles.box}>
        <h4>Liên hệ với chúng tôi</h4>
        <Form contact={contact} />
      </BoxLayout>
    </>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      contact: {
        address: "Văn phòng Số 24, ngõ 224 Trung Kính, Hà Nội",
        email: "Email: contact@mhsolution.vn",
        phone: "Điện thoại: 0975718168",
      },
    },
  };
};
export default Contact;
