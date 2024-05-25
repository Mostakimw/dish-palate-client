import {
  Box,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Container from "../../UI/Container/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

interface THamburgerMenuProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

const menuItems = (
  <>
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
  </>
);

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          {menuItems}
        </Stack>

        <Hidden lgUp>
          <HamburgerMenu open={open} handleDrawerOpen={handleDrawerOpen} />
        </Hidden>
      </Stack>
      {/* Drawer for Hamburger Menu */}
      <Hidden lgUp>
        <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
          <List>
            <ListItem sx={{ width: 300 }}>
              <Stack
                direction="column"
                gap={2}
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
                {/* menu items */}
                {menuItems}
              </Stack>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </Container>
  );
};

export default Navbar;

// Hamburger Menu
const HamburgerMenu = ({ handleDrawerOpen }: THamburgerMenuProps) => {
  return (
    <IconButton
      sx={{ display: { md: "block", lg: "none" } }}
      onClick={handleDrawerOpen}
    >
      <MenuIcon />
    </IconButton>
  );
};
