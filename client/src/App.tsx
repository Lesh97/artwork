import React, { useState } from "react";
import "./App.css";
import YeonJoo from "./routes/joo";
import JaeJung from "./routes/jung";
import Yena from "./routes/na";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./Globalstyles";
import NotFound from "./routes/notfound";
import Main from "./routes/main";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/joo" element={<YeonJoo />} />
            <Route path="/jung" element={<JaeJung />} />
            <Route path="/na" element={<Yena />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
