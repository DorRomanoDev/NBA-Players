import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Player } from './interfaces/Player';
import Players from './components/Players/Players';
import FavoritePlayers from './components/FavoritePlayers/FavoritePlayers';
import usePlayerData from './hooks/usePlayerData';
import { PlayerListContainer, CustomTableContainer } from './App.style';



const App: React.FC = () => {

  const { players, isLoadingPlayers, error, searchTerm: searchTerm, handlePageChange, pagination, handleSearch } = usePlayerData();
  const [favoritePlayers, setFavoritePlayers] = useState<Player[]>([]);


  const isFavorite = (playerId: number) => favoritePlayers.some(player => player.id === playerId);

  const handleRemovePlayer = (playerId: number) => {
    const updatedFavoritePlayers = favoritePlayers.filter(player => player.id !== playerId);
    setFavoritePlayers(updatedFavoritePlayers);
  };

  const handleFavorite = async (playerId: number) => {
    if (isFavorite(playerId)) {
      handleRemovePlayer(playerId);
    } else {
      const playerData = players.filter(player => player.id === playerId);
      if (playerData) {
        setFavoritePlayers(prevPlayerStats => [...prevPlayerStats, ...playerData]);
      }
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3} >
        <PlayerListContainer>
          <Players
            players={players}
            isFavorite={isFavorite}
            handleFavorite={handleFavorite}
            handlePageChange={handlePageChange}
            searchTerm={searchTerm}
            pagination={pagination}
            isLoadingPlayers={isLoadingPlayers}
            error={error}
            handleSearch={handleSearch}
          />
        </PlayerListContainer>

      </Grid>
      <Grid item xs={12} sm={9}>
        <CustomTableContainer>
          <FavoritePlayers favoritePlayers={favoritePlayers} handleFavorite={handleFavorite} />
        </CustomTableContainer>
      </Grid>
    </Grid >
  );
};

export default App;
