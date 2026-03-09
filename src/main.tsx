import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import DataProvider from "./contexts/DataProvider.tsx";
import MapDataProvider from "./contexts/MapDataProvider.tsx";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataProvider>
      <MapDataProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
          <App/>
        </ThemeProvider>
      </MapDataProvider>
    </DataProvider>
  </StrictMode>,
)
