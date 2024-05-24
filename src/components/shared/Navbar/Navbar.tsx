import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Container from "../../UI/Container/Container";

const Navbar = () => {
  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        <Typography variant="h4" fontWeight={600}>
          <Box fontWeight={700} component="span" color="#FF5722">
            Dish
          </Box>
          <Box fontWeight={700} component="span" color="#9E9E9E">
            Palate
          </Box>
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          gap={4}
          sx={{
            "& a": {
              color: "#FF5722",
              textDecoration: "none",
              "&:hover": {
                color: "#9E9E9E",
                transition: "ease-in-out 1s",
              },
              "&.active": {
                color: "#9E9E9E",
              },
            },
          }}
        >
          <Typography component={NavLink} to="/">
            Home
          </Typography>
          <Typography component={NavLink} to="/recipes">
            Recipes
          </Typography>
          <Typography component={NavLink} to="/add-recipes">
            Add Recipes
          </Typography>
          <Typography component={NavLink} to="/coins">
            Coins
          </Typography>
          <Typography component={NavLink} to="/login">
            Login
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
