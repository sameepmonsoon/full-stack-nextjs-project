import { useMemo } from "react";

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount * 2 + 1;

    if (totalPages <= totalPageNumbers) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const startPage =
      currentPage <= siblingCount ? 1 : currentPage - siblingCount;

    const endPage =
      currentPage + siblingCount >= totalPages
        ? totalPages
        : currentPage + siblingCount;

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return {
    totalPages,
    currentPage,
    paginationRange,
    showPrev: currentPage > 1,
    showNext: currentPage < totalPages,
  };
};
