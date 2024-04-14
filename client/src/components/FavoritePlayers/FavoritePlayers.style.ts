
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';

export const TitleContainer = styled(`div`)(() => ({
  height: '7%'
}));

export const RemoveIcon = styled(DeleteIcon)(() => ({
  color: 'red'
}));