import { Box, CircularProgress } from "@mui/material";

type LoaderProps = {
  loading?: boolean;
  children: React.ReactNode;
};

const Loader: React.FC<LoaderProps> = ({ loading, children }) => {
  if (loading)
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  return <>{children}</>;
};

export default Loader;
