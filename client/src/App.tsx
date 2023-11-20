import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./Globalstyles";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </GlobalStyle>
      </ThemeProvider>
    </>
  );
}

export default App;
