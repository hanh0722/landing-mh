import React from "react";
import styles from "./RelatedWork.module.scss";
import Position from "../../Recruit/Positions/Position/Position";
import { Grid } from "../../container";
import { SkeletonLoading } from "../../container";
const RelatedWork = ({ relatedWork, isLoading }) => {
  return (
    <div className={styles.container}>
      <h4>Công việc liên quan</h4>
      <Grid className={styles.grid}>
        {isLoading &&
          Array.from(Array(2).keys()).map((item) => {
            return (
              <SkeletonLoading
                imageClassName={styles.image}
                key={item}
                times={3}
                containerSkeleton={styles["loading-skeleton"]}
                src
                classContainer={`d-flex justify-content-between align-items-center ${styles["container-loading"]}`}
              />
            );
          })}
          {!isLoading && relatedWork?.result?.items?.length === 0 && <p className="text-center">Không có dữ liệu</p>}
        {!isLoading && relatedWork?.result?.items?.length > 0 && relatedWork?.result?.items?.map((work, index) => {
          return (
            <Position
              key={index}
              url={work.infos[0] ? work.infos[0]?.src : "/static_recruit.png"}
              title={work?.title}
              date={new Date(work?.created_at).toLocaleDateString("vi-vn")}
              place={work?.work_address}
              salary={work?.salary}
              types={[work?.work_type, work?.level, work?.career]}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default RelatedWork;
