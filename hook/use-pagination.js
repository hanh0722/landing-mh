import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

const usePagination = (perPage, currentPage, totalDocuments) => {
  const [page, setPage] = useState(currentPage);
  const router = useRouter();
  
  useEffect(() => {
    router.push(`?page=${page}`);
  }, [page]);

  const goToPrevPage = () => {
      if(page === 1){
          return;
      }
      setPage(prevState => prevState - 1);
  }
  const getTotalPagination = useMemo(() => {
    return Math.ceil(totalDocuments / perPage);
  }, [perPage, totalDocuments]);

  const goToNextPage = () => {
    if(page === getTotalPagination){
        return;
    }
    setPage(prevState => prevState + 1);
  }
  const changePageHandler = (page) => {
    setPage(+page);
  }
  return {
    goToPrevPage,
    goToNextPage,
    page,
    getTotalPagination,
    hasNextPage: page < getTotalPagination,
    hasPrevPage: page > 1,
    changePageHandler
  }
};

export default usePagination;
