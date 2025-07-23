import styled, { ThemeProvider } from "styled-components";
import { createContext, useState } from "react";
import { AuthContextProvider, MyRoutes, Light, Dark } from './index'
import './App.css'

export const ThemeContext = createContext(null);


function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark"
  const themeStyle = theme === "light" ? Light : Dark

  return (
    <>
      {/* Todo dentro de ThemeProvider tomará el estilo que este en ese momento */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <Container>
              <section className="ContentSidebar">

              </section>
              <section className="ContentMenuambur">

              </section>
              <section className="ContentRoutes">

              </section>
              <MyRoutes />
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-colums: 1fr;
  background-color: ${({ theme }) => theme.bgtotal};

`;

export default App
