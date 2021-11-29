import React from "react";
import styles from "./Share.module.scss";
import Image from "next/image";
import Link from "next/link";
import useMedia from "../../../hook/use-media";
const Share = () => {
  const isMobile = useMedia("(max-width: 768px)");
  return (
    <div className={`d-flex align-items-center ${styles.container}`}>
      <p>Chia sẻ:</p>
      <Link href="/" passHref={true}>
        <a>
          <Image
            src={"/fb-blue-icon.svg"}
            width={!isMobile ? "32px" : "21px"}
            height={!isMobile ? "32px" : "21px"}
            alt=""
          />
        </a>
      </Link>
      <Link href="/" passHref={true}>
        <a>
          <Image
            src={"/tw-blue-icon.svg"}
            width={!isMobile ? "32px" : "21px"}
            height={!isMobile ? "32px" : "21px"}
            alt=""
          />
        </a>
      </Link>
      <Link href={"/"} passHref={true}>
        <a>
          <Image
            src={"/Noron.png"}
            width={!isMobile ? "48px" : "30px"}
            height={!isMobile ? "48px" : "30px"}
            alt=""
          />
        </a>
      </Link>
    </div>
  );
};

export default Share;
