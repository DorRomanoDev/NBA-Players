import React from 'react';
import Pagination from '../Pagination/Pagination';
import { Player } from '../../interfaces/Player';
import Search from '../Search/Search';
import { PlayerSearchContainer, ListContainer, ErrorContainer, PaginationContainer } from './Players.style';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import CustomList from '../List/CustomList';

interface PlayersProps {
  isFavorite: (playerId: number) => boolean;
  handleFavorite: (playerId: number) => void;
  handlePageChange: (page: number) => void;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  players: Player[];
  searchTerm: string;
  pagination: { perPage: number; cursor: number };
  isLoadingPlayers: boolean;
  error: string | null;
}

const Players: React.FC<PlayersProps> = ({
  isFavorite,
  handleFavorite,
  handlePageChange,
  handleSearch,
  players,
  searchTerm,
  isLoadingPlayers,
  error,
}) => {
  return (
    <>
      <PlayerSearchContainer>
        <Search
          searchTerm={searchTerm}
          handleSearchChange={handleSearch}
        />
      </PlayerSearchContainer>
      <ListContainer>
        {isLoadingPlayers ? (
          <Loader />
        ) : error ? (
          <ErrorContainer>
            <Error error={error} />
          </ErrorContainer>
        ) : (
          <CustomList
            players={players}
            isFavorite={isFavorite}
            handleFavorite={handleFavorite}
          />
        )}
      </ListContainer>
      <PaginationContainer>
        <Pagination onPageChange={(page) => handlePageChange(page)} />
      </PaginationContainer>
    </>
  );
};

export default Players;
