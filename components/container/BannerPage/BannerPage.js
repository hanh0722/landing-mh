import React from "react";
import { BoxLayout, ContainerBanner } from "..";

const BannerPage = ({
  classNameBanner,
  title,
  introduction,
  classNameBox,
  style,
  children
}) => {
  return (
    <>
      <ContainerBanner className={classNameBanner} style={{...style}} />
      <BoxLayout className={classNameBox}>
        {title && <h4>{title}</h4>}
        {introduction && <p>{introduction}</p>}
        {children}
      </BoxLayout>
    </>
  );
};

export default BannerPage;
