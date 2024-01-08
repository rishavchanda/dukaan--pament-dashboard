import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Payments from "./pages/Payments";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(true);

  //set the menuOpen state to false if the screen size is less than 768px
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 1110) {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          {menuOpen && <Sidebar setMenuOpen={setMenuOpen} />}
          <Wrapper>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path="/payments" element={<Payments />} />
            </Routes>
          </Wrapper>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
