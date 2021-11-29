import React, { useCallback, useEffect } from "react";
import { Grid } from "../../container";
import styles from "./New.module.scss";
import RenderNew from "./RenderNew/RenderNew";
const New = ({ news, isLoading, turnLoadingToArray, matchMedia }) => {
  const filterPostByCategory = useCallback(() => {}, []);
  useEffect(() => {
    filterPostByCategory();
  }, [filterPostByCategory]);
  return (
    <div className={styles.container}>
      {!matchMedia && <h5>Tin gần đây</h5>}
      {news.length === 0 && (
        <p className="text-center pt-3">Không có dữ liệu</p>
      )}
      <Grid className={styles.grid}>
        {isLoading && turnLoadingToArray}
        {!isLoading &&
          news &&
          news.map((post) => {
            return (
              <RenderNew
                key={post.id}
                date={post.created_at}
                name={post.title}
                type={post?.category?.title}
                url_cover={post.cover_url}
                category_id={post.category_new_id}
                id={post.id}
              />
            );
          })}
      </Grid>
    </div>
  );
};

export default New;
