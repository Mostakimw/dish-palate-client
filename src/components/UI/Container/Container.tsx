import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type TContainerProps = {
  children: React.ReactNode;
  sx?: SxProps;
};

const Container = ({ children, sx }: TContainerProps) => {
  return (
    <Box
      sx={{ maxWidth: "1320px", margin: "0 auto", padding: "0 16px", ...sx }}
    >
      {children}
    </Box>
  );
};

export default Container;
