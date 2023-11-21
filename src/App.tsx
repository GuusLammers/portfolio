import { ThemeProvider } from '@mui/material/styles';
import { createMuiTheme } from './theme';
import { Helmet } from 'react-helmet';
import { Layout } from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Random } from './pages/Random';
import { Error404 } from './pages/Error404';

const App = () => {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Portfolio</title>~
      </Helmet>
      <Layout>
        <Routes>
          <Route index path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/experience" element={<Experience />} />
          <Route path="/portfolio/random" element={<Random />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/portfolio/projects/*" element={<Error404 />} />
          <Route path="/portfolio/experience/*" element={<Error404 />} />
          <Route path="/portfolio/random/*" element={<Error404 />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
