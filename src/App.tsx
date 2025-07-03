import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { Main } from "./screens";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
