import React from "react";
import styles from "./Pagination.module.scss";
import Image from "next/image";
import usePagination from "../../../hook/use-pagination";
import { useRouter } from "next/router";
import Link from "next/link";
const Pagination = ({ className, perPage, totalDocuments, currentPage }) => {
  // fake pagination, not call api, just data for totally
  const {
    goToNextPage,
    goToPrevPage,
    getTotalPagination,
    page,
    changePageHandler,
  } = usePagination(perPage, currentPage, totalDocuments);
  const Router = useRouter();
  return (
    <>
      {totalDocuments === 0 && null}
      <ul
        className={`d-flex justify-content-center align-items-center ${styles.container} ${className}`}
      >
        {getTotalPagination !== 1 && (
          <li
            className={`${currentPage === 1 ? styles.disabled : ""} ${
              styles["btn--direction"]
            }`}
            onClick={goToPrevPage}
          >
            <Image
              src={"/Icon/arrow-left-orange-icon.svg"}
              alt=""
              height="14"
              width="7"
            />
          </li>
        )}
        {page !== 1 && (
          <Link
            href={`${Router.pathname}?page=${page - 1}`}
            passHref={true}
            scroll={false}
          >
            <a onClick={() => changePageHandler(page - 1)}>
              <li>{page - 1}</li>
            </a>
          </Link>
        )}
        <Link
          href={`${Router.pathname}?page=${page}`}
          passHref={true}
          scroll={false}
        >
          <a onClick={() => changePageHandler(+page)}>
            <li className={styles.active}>{page}</li>
          </a>
        </Link>
        {page !== getTotalPagination && (
          <Link
            href={`${Router.pathname}?page=${page + 1}`}
            passHref={true}
            scroll={false}
          >
            <a onClick={() => changePageHandler(page + 1)}>
              <li>{page + 1}</li>
            </a>
          </Link>
        )}
        {
          getTotalPagination !== 1 && 
          <li
            className={`${page === totalDocuments ? styles.disabled : ""} ${
              styles["btn--direction"]
            }`}
            onClick={goToNextPage}
          >
            <Image
              src={"/Icon/arrow-right-orange-icon.svg"}
              alt=""
              height="14"
              width="7"
            />
          </li>
        }
      </ul>
    </>
  );
};

export default Pagination;
