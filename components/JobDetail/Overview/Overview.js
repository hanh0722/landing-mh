import React, { useEffect, useState } from "react";
import Box from "./Box/Box";
import styles from "./Overview.module.scss";
const Overview = ({ overview }) => {
  const [date, setDate] = useState();
  useEffect(() => {
    if (overview.end_time) {
      setDate(new Date(overview.end_time).toLocaleDateString("vi-vn"));
    }
  }, [overview.end_time]);
  return (
    <div className={styles.container}>
      <h5>Tổng quan về công việc</h5>
      <div className={styles.box}>
        <Box title="Mức lương" content={overview?.salary} />
        <Box title="Cấp bậc" content={overview?.level} />
        <Box title="Kinh nghiệm" content={overview?.work_experience} />
        <Box title="Hình thức làm việc" content={overview?.work_type} />
        <Box title="Số lượng cần tuyển" content={overview?.number_recruits} />
        <Box title="Địa chỉ làm việc" content={overview?.work_address} />
        <Box
          title="Hạn nộp hồ sơ"
          content={date ? date : "Không giới hạn thời gian"}
        />
      </div>
    </div>
  );
};

export default Overview;
