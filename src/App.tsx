import { ThemeProvider } from '@mui/material/styles';
import { createMuiTheme } from './theme';
import { Helmet } from 'react-helmet';
import { Layout } from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { Experience } from './pages/Experience';
import { Random } from './pages/Random';
import { Error404 } from './pages/Error404';
import { About } from './pages/About';

const App = () => {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Portfolio</title>~
      </Helmet>
      <Layout>
        <Routes>
          <Route path="/portfolio">
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="random" element={<Random />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
