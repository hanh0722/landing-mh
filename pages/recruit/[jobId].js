import React, { useEffect } from "react";
import {
  BannerPage,
  LayoutContainer,
  Button,
  BreadCrumbScript,
} from "../../components/container";
import { useDispatch } from "react-redux";
import { modelActions } from "../../store/slices/model-slice";
import Type from "../../components/Recruit/Positions/Position/Type/Type";
import styles from "../../components/JobDetail/styles.module.scss";
import Description from "../../components/JobDetail/Description/Description";
import Requiredment from "../../components/JobDetail/Requiredment/Requiredment";
import Overview from "../../components/JobDetail/Overview/Overview";
import RelatedWork from "../../components/JobDetail/RelatedWork/RelatedWork";
import FormCV from "../../components/JobDetail/FormCV/FormCV";
import { checkUserIsBot } from "../../util";
import axiosConfig from "../../service/base";
import { ApiJob } from "../../config/ApiJob";
import useFetch from "../../hook/use-fetch";
import useMedia from "../../hook/use-media";
import Share from "../../components/JobDetail/Share/Share";

const JobDetail = ({ data_job }) => {
  const matchMobile = useMedia("(max-width: 991px)");
  const dispatch = useDispatch();
  const {
    fetchDataFromServer,
    isLoading,
    error,
    data: dataRelated,
  } = useFetch();
  useEffect(() => {
    fetchDataFromServer({
      url: ApiJob,
      method: "POST",
      data: {
        page: 1,
        page_size: 2,
        keyword: "",
        sorts: [
          {
            property: "created_at",
            direction: "DESC",
          },
        ],
        filters: [
          {
            name: "career",
            operation: "eq",
            value: data_job?.career,
          },
        ],
      },
    });
  }, [fetchDataFromServer, data_job.career]);
  return (
    <>
      <BreadCrumbScript
        dataElement={[]}
        title={`Tuyển dụng - ${data_job.title.toUpperCase()} | MH - Solution`}
      />
      <BannerPage
        style={{ background: `url("/job_description.png")` }}
        classNameBanner={styles.banner}
        classNameBox={styles.box}
        title={data_job.title}
      >
        <div
          className={`d-flex justify-content-center align-items-center ${styles.types}`}
        >
          {[data_job?.level, data_job?.career].map((item, key) => {
            return <Type key={key}>{item}</Type>;
          })}
        </div>
      </BannerPage>
      <LayoutContainer className={styles.container}>
        <div className={`d-flex justify-content-between ${styles.grid}`}>
          <div className={styles["left-side"]}>
            <Description description={data_job.job_description} />
            <Requiredment
              requirement={data_job?.job_requirements || ""}
              title="Yêu cầu công việc"
            />
            <Requiredment
              requirement={data_job?.job_benefits || ""}
              title="Quyền lợi"
            />
            <Button
              options={{
                onClick: () => dispatch(modelActions.openModelHandler()),
              }}
              className={styles["submit-btn"]}
            >
              Nộp đơn ứng tuyển
            </Button>
          </div>
          <div className={styles["container-right"]}>
            <Overview overview={data_job} />
            {!matchMobile && <Share />}
          </div>
        </div>
        <RelatedWork relatedWork={dataRelated} isLoading={isLoading} />
      </LayoutContainer>
      <FormCV />
    </>
  );
};
export const getServerSideProps = async ({ params, req }) => {
  const { jobId } = params;
  const userIsBot = checkUserIsBot(req);
  const getJobById = await axiosConfig({
    url: ApiJob,
    params: {
      id: jobId,
    },
  });
  if (getJobById.code >= 400) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      isDisabledAnimation: userIsBot,
      data_job: getJobById.result,
    },
  };
};
export default JobDetail;
