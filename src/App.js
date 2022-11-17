import './App.css';
import HomePage from "./pages/HomePage";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import { Toolbar } from "./components/toolbar";
import {observer} from "mobx-react-lite";

const theme = createTheme({})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
          <Box sx={{flexGrow: 1, minHeight: 1}}>
            <Toolbar />
            <Box sx={{flexGrow: 1, minHeight: 1}}>
                <HomePage />
            </Box>
          </Box>
      </ThemeProvider>
    </div>
  );
}

export default observer(App);
