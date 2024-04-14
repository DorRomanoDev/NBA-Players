import React from 'react';
import { Grid, Input } from '@mui/material';

interface SearchProps {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({
  searchTerm,
  handleSearchChange,
}) => {
  const ariaLabel = { 'aria-label': 'description' };

  return (
    <Grid container alignItems="center">
      <Grid item xs={6}>
        <Input placeholder="Search Players"
          inputProps={ariaLabel}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Grid>
    </Grid>
  );
};

export default Search;
