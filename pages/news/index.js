import React, { useEffect, useMemo, useState } from "react";
import SwiperBackground from "../../components/News/SwiperBackground/SwiperBackground";
import ListNews from "../../components/News/ListNews/ListNews";
import { checkUserIsBot } from "../../util";
import { getNewsApi } from "../../config/ApiNews";
import useFetch from "../../hook/use-fetch";
import { useRouter } from "next/router";
import getCategoriesCondition from "../../service/getCategories";
import getNewsByCondition from "../../service/getNews";
import { Pagination, BreadCrumbScript } from "../../components/container";
import { useSelector } from "react-redux";
const News = ({ categories, news, totalPage, heading }) => {
  const { isLoading, error, fetchDataFromServer, data: dataNews } = useFetch();
  const selectedPostByType = useSelector((state) => state.category.category);
  const [posts, setPosts] = useState(news);
  const [totalDocuments, setTotalDocuments] = useState(totalPage);
  const router = useRouter();
  const query = useMemo(() => {
    const page = +router.query.page || 1;
    return page;
  }, [router.query]);
  useEffect(() => {
    fetchDataFromServer({
      url: getNewsApi,
      method: "POST",
      data: {
        page: query,
        keyword: "",
        page_size: 8,
        filters:
          selectedPostByType === 0
            ? null
            : [
                {
                  name: "category_new_id",
                  operation: "eq",
                  value: selectedPostByType,
                },
              ],
      },
    });
  }, [query, fetchDataFromServer, selectedPostByType]);
  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!isLoading && dataNews) {
      const posts = dataNews.result.items;
      const transformPost = posts.map((item) => {
        return {
          ...item,
          created_at: new Date(item.created_at).toLocaleDateString("vi-VN"),
        };
      });
      setPosts(transformPost);
      const totalPage = dataNews.result.total;
      if (totalPage !== totalDocuments) {
        setTotalDocuments(totalPage);
      }
    }
  }, [isLoading, dataNews, news, totalDocuments]);
  return (
    <>
      <BreadCrumbScript
        title={`Tin tức | MH - Solution | Trang ${query}`}
        dataElement={news.map((item) => {
          return {
            name: item.title,
            href: `${router.pathname}/${item.id}`,
          };
        })}
      />
      <SwiperBackground posts={heading} />
      <ListNews
        categories={categories}
        news={posts}
        isLoading={isLoading}
        error={error}
        perPage={8}
      />
      {posts.length >= 8 && (
        <Pagination
          totalDocuments={totalDocuments}
          perPage={8}
          currentPage={query}
        />
      )}
    </>
  );
};

export const getServerSideProps = async ({ req, query }) => {
  const userIsBot = checkUserIsBot(req);
  const categories = await getCategoriesCondition(1, 10, "");
  const page = +query?.page || 1;
  const getNewsByPage = await getNewsByCondition(page, 8, "");
  const getHeadingSwiper = await getNewsByCondition(0, 5, "", {
    sorts: [
      {
        property: "created_at",
        direction: "DESC",
      },
    ],
  });
  if (
    categories.code >= 400 ||
    getNewsByPage.code >= 400 ||
    getHeadingSwiper.code >= 400
  ) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      isDisabledAnimation: userIsBot,
      categories: categories?.result?.items,
      news: getNewsByPage?.result?.items?.map((item) => {
        return {
          ...item,
          created_at: new Date(item.created_at).toLocaleDateString("vi-VN"),
        };
      }),
      totalPage: getNewsByPage.result?.total,
      heading: getHeadingSwiper.result?.items,
    },
  };
};
export default News;
