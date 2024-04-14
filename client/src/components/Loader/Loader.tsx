import { CircularProgress } from "@mui/material";
import { CircularProgressContainer } from './Loader.style';

const Loader: React.FC = () => {
  return (
    <CircularProgressContainer>
      <CircularProgress />
    </CircularProgressContainer>
  );
};

export default Loader