import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { PaginationContainer } from './Pagination.style'

interface PaginationProps {
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    onPageChange(nextPage);

  };

  const handlePrevPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 1) {
      setCurrentPage(prevPage);
      onPageChange(prevPage);
    }
  };

  return (
    <PaginationContainer>
      <IconButton onClick={handlePrevPage} disabled={currentPage === 1}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <span>{currentPage}</span>
      <IconButton onClick={handleNextPage} >
        <KeyboardArrowRightIcon />
      </IconButton>
    </PaginationContainer>
  );
};

export default Pagination;
