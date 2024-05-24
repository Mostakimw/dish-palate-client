import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";
import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "calc(100vh - 300px)",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default App;
