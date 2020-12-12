import React, { useState } from "react"
import { ThemeProvider } from "styled-components" 
import GlobalStyle from "./styles/GlobalStyle"
import SignupForm from "./components/SignupForm"
import light from "./styles/themes/light"
import dark from "./styles/themes/dark"
import Toggle from "./components/Toggle"

const App = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
      <ThemeProvider theme={theme}>
      <div className="theme-app">
        <GlobalStyle />        
        <SignupForm />               
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
