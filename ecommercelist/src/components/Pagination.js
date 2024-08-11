// components/Pagination.js
import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginations = ({ productsPerPage, totalProducts, currentPage, handlePageChange }) => {
  const pages = Math.ceil(totalProducts / productsPerPage);
  const paginationItems = [];

  for (let i = 1; i <= pages; i++) {
    paginationItems.push(
      <PaginationItem key={i} active={i === currentPage}>
        <PaginationLink onClick={() => handlePageChange(i)}>
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <Pagination>
      {paginationItems}
    </Pagination>
  );
};

export default Paginations;