import React from 'react';
import { List } from '@mui/material';
import CustomListItem from '../ListItem/CustomListItem';
import { Player } from '../../interfaces/Player';

interface CustomListProps {
    players: Player[];
    isFavorite: (playerId: number) => boolean;
    handleFavorite: (playerId: number) => void;
}

const CustomList: React.FC<CustomListProps> = ({ players, isFavorite, handleFavorite }) => {
    return (
        <List>
            {players?.map((player) => (
                <CustomListItem
                    key={player.id}
                    player={player}
                    isFavorite={isFavorite}
                    handleFavorite={handleFavorite}
                />
            ))}
        </List>
    );
};

export default CustomList;
