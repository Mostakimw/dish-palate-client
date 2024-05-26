import {
  Avatar,
  Box,
  Button,
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
import { useContext, useState } from "react";
import { AuthContext } from "../../../lib/Provider/AuthProviders";
import { useCreateUserMutation } from "../../../redux/api/allApi";

interface THamburgerMenuProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

const Navbar = () => {
  // const userInfo = getUserInfo();
  const { user, googleLogin, logoutUser } = useContext(AuthContext);
  // const [user, setUser] = useState<User | null>(null);
  const [createUser] = useCreateUserMutation(undefined);
  // const [loginUser] = useLoginUserMutation(undefined);
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogin = async () => {
    googleLogin().then(async (result) => {
      console.log("login success");
      const userInfo = {
        displayName: result.user.displayName,
        photoUrl: result.user.photoURL,
        email: result.user.email,
        coin: 50,
      };
      try {
        const res = await createUser(userInfo);
        console.log(res);
      } catch (err: any) {
        console.error(err.message);
      }
    });
  };

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch(() => {});
  };

  const menuItems = (
    <>
      <Typography component={NavLink} to="/">
        Home
      </Typography>
      <Typography component={NavLink} to="/recipes">
        Recipes
      </Typography>
      {user && (
        <>
          <Typography component={NavLink} to="/add-recipe">
            Add Recipe
          </Typography>
          <Typography component={NavLink} to="/purchase-coin">
            Coins
          </Typography>
          {"photoURL" in user && user.photoURL && (
            <Avatar alt="Profile Image" src={user.photoURL} />
          )}
        </>
      )}
      <Box>
        {user?.displayName ? (
          <Typography component={Button} onClick={handleLogout}>
            Logout
          </Typography>
        ) : (
          <Typography component={Button} onClick={handleLogin}>
            Login
          </Typography>
        )}
      </Box>
    </>
  );

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
          alignItems="center"
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
                justifyContent="center"
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
