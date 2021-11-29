import React from "react";
import RenderNew from "../../News/New/RenderNew/RenderNew";
import { Grid } from "../../container";
import styles from "./OtherNews.module.scss";
const OtherNews = ({ data }) => {
  return (
    <div className={styles.news}>
      <h4>Tin tức khác</h4>
      <Grid className={styles.grid}>
        {data.map((item, index) => {
          return (
            <RenderNew
              routeClassName={styles.route}
              key={index}
              name={item.title}
              date={new Date(item.created_at).toLocaleDateString("vi-vn")}
              type={item?.category?.title}
              url_cover={item.cover_url}
              id={item?.id}
              image={{
                height: "166px",
                width: "297px",
              }}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default OtherNews;
