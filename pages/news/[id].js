import React from "react";
import { useRouter } from "next/router";
import {
  BreadCrumb,
  LayoutContainer,
  Grid,
  BreadCrumbScript,
} from "../../components/container";
import { checkUserIsBot } from "../../util";
import styles from "../../components/DetailBlog/style/styles.module.scss";
import DetailBlog from "../../components/DetailBlog/DetailBlog";
import Share from "../../components/DetailBlog/Share/Share";
import OtherNews from "../../components/DetailBlog/OtherNews/OtherNews";
import axiosConfig from "../../service/base";
import { getNewById, getNewsApi } from "../../config/ApiNews";
import { getNews } from "../../service";
import Slide from "../../components/Home/News/Slide/Slide";
import useMedia from "../../hook/use-media";
const BlogDetail = ({ data, related_news, hot_news }) => {
  const isMobile = useMedia("(max-width: 768px)");
  const router = useRouter();
  return (
    <>
      <BreadCrumbScript
        title={`${data?.title} | MH - Solution`}
        dataElement={[
          ...related_news?.map((item) => {
            return {
              name: item?.title,
              href: `/news/${item.id}`,
            };
          }),
          ...hot_news.map((item) => {
            return {
              name: item?.title,
              href: `/news/${item.id}`,
            };
          }),
          {
            name: data?.title,
            href: `/news/${data?.id}`,
          },
        ]}
      />
      {/* <BannerPage
        classNameBox={styles.container}
        classNameBanner={styles.banner}
        style={{ background: `url('/Banner_detail.png')` }}
        title={data?.title}
      /> */}
      <LayoutContainer className={styles["container-detail"]}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <BreadCrumb
              isMobile={isMobile}
              paths={[
                {
                  name: "Tin Tức",
                  link: "/news",
                  color: true,
                },
                {
                  name: data.category?.title,
                  path: router.pathname,
                },
              ]}
              date={new Date(data?.created_at).toLocaleDateString("vi-vn")}
              className={styles["bread-crumb"]}
            />
            <h4 className={`text-start ${styles.title}`}>{data?.title}</h4>
            <DetailBlog data={data?.content} />
            <Share />
            <OtherNews data={related_news} />
          </div>
          <div className={styles.bg}>
          <h4 className="text-start">Tin tức nổi bật</h4>
            <Grid className={styles["grid-near"]}>
              {hot_news?.map((item) => {
                return (
                  <Slide
                    contentClassName={styles.text}
                    className={styles.news}
                    key={item.id}
                    src={item?.cover_url}
                    id={item?.id}
                    title={item?.title}
                    type={item?.category?.title}
                  />
                );
              })}
            </Grid>
          </div>
        </div>
      </LayoutContainer>
    </>
  );
};

export const getServerSideProps = async ({ req, query }) => {
  const userIsBot = checkUserIsBot(req);
  const { id } = query;
  const postDetail = await axiosConfig({
    url: getNewById(+id),
  });
  const postRelated = await getNews(0, 4, "", {
    filters: [
      {
        name: "category_new_id",
        operation: "eq",
        value: id,
      },
    ],
  });
  const getHotNews = await axiosConfig({
    url: getNewsApi,
    method: "POST",
    data: {
      page: 1,
      page_size: 3,
      sorts: [
        {
          property: "created_at",
          direction: "DESC",
        },
      ],
    },
  });
  if (
    postDetail.code >= 400 ||
    postRelated.code >= 400 ||
    getHotNews.code >= 400
  ) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: postDetail.result,
      related_news: postRelated?.result?.items,
      isDisabledAnimation: userIsBot,
      hot_news: getHotNews?.result?.items,
    },
  };
};
export default BlogDetail;
