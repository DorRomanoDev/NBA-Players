import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Player } from '../../interfaces/Player';
import CustomTable from '../Table/CustomTable';
import { TitleContainer, RemoveIcon } from './FavoritePlayers.style';

interface FavoritePlayersProps {
  favoritePlayers: Player[];
  handleFavorite: (playerId: number) => void;
}


const FavoritePlayers: React.FC<FavoritePlayersProps> = ({ favoritePlayers, handleFavorite }) => {
  const columns: TableColumn[] = [
    { label: 'First Name', accessor: 'first_name' },
    { label: 'Last Name', accessor: 'last_name' },
    { label: 'Position', accessor: 'position' },
    { label: 'Height', accessor: 'height' },
    { label: 'Weight', accessor: 'weight' },
    { label: 'Jersey Number', accessor: 'jersey_number' },
    { label: 'College', accessor: 'college' },
    { label: 'Country', accessor: 'country' },
    { label: 'Draft Year', accessor: 'draft_year' },
    { label: 'Draft Round', accessor: 'draft_round' },
    { label: 'Draft Number', accessor: 'draft_number' },
    { label: 'Team', accessor: 'team.full_name' }
  ];

  const renderActionCell = (row: Player): JSX.Element => (
    <IconButton onClick={() => handleFavorite(row.id)}>
      <RemoveIcon />
    </IconButton>
  )

  return (
    <>
      <TitleContainer>
        <Typography variant="h5">Favorite Players</Typography>
      </TitleContainer >
      <CustomTable
        data={favoritePlayers}
        columns={columns}
        renderActionCell={renderActionCell}
      />
    </>
  );
};

export default FavoritePlayers;
