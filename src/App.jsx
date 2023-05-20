
import * as React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorModeContext } from './ColorModeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/About Us/AboutUs';
import { ContactUs } from './Components/Contact Us/ContactUs';


function App() {

  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(() => ({
    toggleColorMode: (props) => {
      setMode(props === false ? 'dark' : 'light');
    },
  }), [],);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home mode={mode} />} />
              <Route path="/aboutus" element={<AboutUs mode={mode} />} />
              <Route path="/contactus" element={<ContactUs mode={mode} />} />
            </Routes>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  );
}

export default App;
