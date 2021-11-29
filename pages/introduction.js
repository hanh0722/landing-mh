import React from "react";
import { TextImage, BreadCrumbScript } from "../components/container";
import Banner from "../components/Introduction/Banner/Banner";
import styles from "../styles/styles.module.scss";
import RootValue from "../components/Introduction/RootValue/RootValue";
import Partner from "../components/Home/Partner/Partner";
import Competitive from "../components/Introduction/Competitive/Competitive";
import Founder from "../components/Introduction/Founder/Founder";
import axiosConfig from "../service/base";
import { apiIntroduction } from "../config/ApiIntroduction";
import { ApiFounder } from "../config/ApiFounder";
import { getPartnerCondition } from "../service";
import { checkUserIsBot } from "../util";
import useMedia from "../hook/use-media";
const Introduction = ({ dataIntroduction, founderData, partners }) => {
  const matchMedia = useMedia("(max-width: 768px)");

  return (
    <>
      <BreadCrumbScript
        title={"Giới thiệu"}
        dataElement={[
          {
            name: "Giới thiệu || MH - Solution",
            href: "/introduction",
          },
        ]}
      />
      <div className={styles.box}>
        <section>
          <Banner data={!matchMedia ? dataIntroduction : ""} />
          {matchMedia && (
            <div className={styles.introduction}>
              {dataIntroduction?.content}
            </div>
          )}
          {dataIntroduction && (
            <>
              {dataIntroduction?.visions?.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <TextImage
                      aos="fade-right"
                      title={item?.content || "Không có tiêu đề"}
                      mainTitle={item?.title || "Không có nội dung chi tiết"}
                      src={item?.src || "/Image (2).png"}
                      key={index}
                      className="flex-row-reverse"
                      aosImage="fade-left"
                      iconImage={"/icon.png"}
                    />
                  );
                }
                return (
                  <TextImage
                    aos="fade-left"
                    title={item?.content || "Không có tiêu đề"}
                    mainTitle={item?.title || "Không có nội dung chi tiết"}
                    src={item?.src || "/Image (2).png"}
                    key={index}
                    classText={styles.reverse}
                    iconImage={"/icon.png"}
                  />
                );
              })}
            </>
          )}
        </section>
        <RootValue data={dataIntroduction?.core_values} />
        <Competitive data={dataIntroduction?.competitives} />
        <Founder dataFounder={founderData} />
        <Partner partners={partners} className={styles.top} />
      </div>
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  const userIsBot = checkUserIsBot(req);
  const dataIntroduction = await axiosConfig({
    method: "POST",
    url: apiIntroduction,
    data: {},
  });
  const dataFounder = await axiosConfig({
    method: "POST",
    url: ApiFounder,
    data: {},
  });
  const partners = await getPartnerCondition();
  if (
    dataIntroduction.code >= 400 ||
    dataFounder.code >= 400 ||
    partners.code >= 400
  ) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      isDisabledAnimation: userIsBot,
      dataIntroduction: dataIntroduction.result?.items[0],
      founderData: dataFounder.result?.items,
      partners: partners.result.items,
    },
  };
};
export default Introduction;
