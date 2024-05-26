import { Typography, Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={10}>
        <Typography variant="h1" color="error">
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          Oops! Page not found
        </Typography>
        <Typography variant="body1" paragraph>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;
