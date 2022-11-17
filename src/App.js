import './App.css';
import HomePage from "./pages/HomePage";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import {Toolbar} from "./components/toolbar";
import {observer} from "mobx-react-lite";
import {useMainStore} from "./store/MainStore";
import LoginPage from "./pages/LoginPage";

const theme = createTheme({})

function App() {
    const store = useMainStore();
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                {store.user ?
                    <Box sx={{flexGrow: 1, minHeight: 1}}>
                        <Toolbar/>
                        <Box sx={{flexGrow: 1, minHeight: 1}}>
                            <HomePage/>
                        </Box>
                    </Box>
                    :
                    <Box sx={{flexGrow: 1, minHeight: 1}}>
                        <Box sx={{flexGrow: 1, minHeight: 1}}>
                            <LoginPage/>
                        </Box>
                    </Box>
                }
            </ThemeProvider>
        </div>
    );
}

export default observer(App);
