import { Typography } from "@mui/material";

interface ErrorProps {
    error: string
}

const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <Typography variant="body1" color="error">
            {error}
        </Typography>
    );
};

export default Error