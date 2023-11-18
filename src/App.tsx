import { ParticlesBackground } from './components/particles/ParticlesBackground';
import { ThemeProvider } from '@mui/material/styles';
import { createMuiTheme } from './theme';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <ThemeProvider theme={createMuiTheme()}>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <ParticlesBackground />
    </ThemeProvider>
  );
};

export default App;
