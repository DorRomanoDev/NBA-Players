import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Player } from '../../interfaces/Player';
import { StarIconColor } from './CustomListItem.style';

interface CustomListItemProps {
    player: Player;
    isFavorite: (playerId: number) => boolean;
    handleFavorite: (playerId: number) => void;
}

const CustomListItem: React.FC<CustomListItemProps> = ({ player, isFavorite, handleFavorite }) => {
    return (
        <ListItem key={player.id}>
            <ListItemText
                primary={`${player.first_name} ${player.last_name}`}
            />
            <IconButton onClick={() => handleFavorite(player.id)}>
                {isFavorite(player.id) ? <StarIconColor /> : <StarOutlineIcon />}
            </IconButton>
        </ListItem>
    );
};

export default CustomListItem;
