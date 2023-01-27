import React from "react";
import { ThemeProvider } from "styled-components";
import QRcard from "./components/qrcard/QRcard";
import theme from "./styles/theme/AppTheme";



const App = () => {
    return(
        <ThemeProvider theme={theme}>
        <QRcard />
        </ThemeProvider>
    );
};

export default App;