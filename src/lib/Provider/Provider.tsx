import { ThemeProvider } from "@mui/material";
import { theme } from "../Theme/Theme";
import AuthProviders from "./AuthProviders";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProviders>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthProviders>
  );
};

export default Providers;
