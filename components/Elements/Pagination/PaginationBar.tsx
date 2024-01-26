"use client";
import { usePagination } from "@/Hooks/usePagination";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { AnyExpression } from "mongoose";

export function PaginationBar({
  totalCount,
  pageSize,
  siblingCount,
  currentPage,
  handlePagination,
}: {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
  handlePagination: any;
}) {
  const { totalPages, paginationRange, showPrev, showNext } = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  const renderPaginationLinks = () => {
    return paginationRange.map((page) => (
      <PaginationItem key={page}>
        <PaginationLink
          href="#"
          isActive={page === currentPage}
          onClick={() => {
            handlePagination(page);
          }}
        >
          {page}
        </PaginationLink>
      </PaginationItem>
    ));
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          onClick={() => {
            if (showPrev) handlePagination(currentPage - 1);
          }}
        >
          <Button variant={"ghost"} disabled={!showPrev}>
            <ChevronLeft className="h-4 w-4" />
            Prev
          </Button>
        </PaginationItem>

        {renderPaginationLinks()}

        <PaginationItem
          onClick={() => {
            if (showNext) handlePagination(currentPage + 1);
          }}
        >
          <Button variant={"ghost"} disabled={!showNext}>
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
