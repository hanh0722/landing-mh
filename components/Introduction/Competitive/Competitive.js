import React from "react";
import { CardContent, Grid, ContainerSmall } from "../../container";
import styles from "./Competitive.module.scss";

const iconImage = ['/project_icon.png', '/analyst-icon.svg', '/people-icon.svg'];
const Competitive = ({ data }) => {
  return (
    <ContainerSmall className={styles.container}>
      <h4>Thế mạnh cạnh tranh</h4>
      <Grid
        config={{
          "data-aos": "fade-up",
          "data-aos-offset": 300,
        }}
        className={styles.grid}
      >
        {data ? (
          data?.map((item, index) => {
            return (
              <CardContent
                key={index}
                className="text-center"
                iconSrc={item?.src || iconImage[index]}
                lineClassName={styles.line}
                title={item?.title || "không có tiêu đề"}
                content={item?.content || "Không có tiêu đề"}
              />
            );
          })
        ) : (
          <p className="pt-5 text-center">Không có dữ liệu</p>
        )}
      </Grid>
    </ContainerSmall>
  );
};

export default Competitive;
