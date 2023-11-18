import { ParticlesBackground } from './components/particles/ParticlesBackground';
import { ThemeProvider } from '@mui/material/styles';
import { createMuiTheme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={createMuiTheme()}>
      <ParticlesBackground />
    </ThemeProvider>
  );
};

export default App;
