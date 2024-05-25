import { ThemeProvider } from "@mui/material";
import { theme } from "../Theme/Theme";
import AuthProviders from "./AuthProviders";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AuthProviders>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AuthProviders>
    </Provider>
  );
};

export default Providers;
