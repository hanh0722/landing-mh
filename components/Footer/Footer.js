import React from "react";
import { LayoutContainer, Grid, Image, Input, Button } from "../container";
import styles from "./Footer.module.scss";
import Link from "next/link";
import paths from "../Navigation/path";
import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  return (
    <>
      <footer className={styles.footer}>
        <LayoutContainer className={styles["container-footer"]}>
          <div className={styles.grid}>
            <div className={styles["logo-box"]}>
              <Image src={"/logo-footer.png"} alt="" className={styles.logo} />
              <div className={`d-flex align-items-center ${styles.copyright}`}>
                <Image src="/copy-right.svg" alt="" />
                <span>Copyright 2020</span>
              </div>
            </div>
            <ul className={`${styles.list} ${styles["paths-list"]}`}>
              <div className={styles.paths}>
                {paths.map((item, index) => {
                  if (index < paths.length / 2) {
                    return (
                      <li
                        key={item.name}
                        className={
                          router.asPath === item.path ? styles.active : ""
                        }
                      >
                        <Link href={item.path}>{item.name}</Link>
                      </li>
                    );
                  }
                })}
              </div>
              <div className={styles.paths}>
                {paths.map((item, index) => {
                  if (index > paths.length / 2 - 1) {
                    return (
                      <li
                        className={
                          router.asPath === item.path ? styles.active : ""
                        }
                        key={item.name}
                      >
                        <Link href={item.path}>{item.name}</Link>
                      </li>
                    );
                  }
                })}
              </div>
            </ul>
            <ul className={styles["list-contact"]}>
              <li>Thông tin liên hệ</li>
              <li data-aos-delay={200}>
                <span>Văn phòng Số 24, ngõ 224 Trung Kính, Hà Nội</span>
              </li>
              <li data-aos-delay={400}>
                <span>Email: contact@mhsolution.vn</span>
              </li>
              <li data-aos-delay={600}>
                <span>Điện thoại: 0975718168</span>
              </li>
            </ul>
            <ul className={`${styles.list} ${styles.email}`}>
              <li>Đăng ký email</li>
              <li className={styles.middle}>
                Đăng ký email để nhận tin tức và dịch vụ mới nhất từ chúng tôi
              </li>
              <div className={`d-flex justify-content-between ${styles.box}`}>
                <Input
                  input={{
                    type: "email",
                    placeholder: "Địa chỉ Email",
                  }}
                  className={styles.input}
                />
                <Button>Đăng ký</Button>
              </div>
              <li
                className={`d-flex align-items-center ${styles["list-media"]}`}
              >
                <Image
                  className={`d-flex justify-content-center align-items-center rounded-circle ${styles.brand}`}
                  src={"/fb-icon-footer.svg"}
                  alt=""
                />
                <Image
                  className={`d-flex justify-content-center align-items-center rounded-circle ${styles.brand}`}
                  src={"/linkedln-icon-footer.svg"}
                  alt=""
                />
                <Image
                  className={`d-flex justify-content-center align-items-center rounded-circle ${styles.brand}`}
                  src={"/noron-icon-footer.svg"}
                  alt=""
                />
              </li>
            </ul>
          </div>
        </LayoutContainer>
      </footer>
    </>
  );
};

export default Footer;
