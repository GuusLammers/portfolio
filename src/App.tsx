import { ThemeProvider } from '@mui/material/styles';
import { createMuiTheme } from './theme';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layout/Layout';

const App = () => {
  const theme = createMuiTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
