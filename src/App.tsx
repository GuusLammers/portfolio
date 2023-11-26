import { ThemeProvider } from '@mui/material/styles';
import { createMuiTheme } from './theme';
import { Helmet } from 'react-helmet';
import { Layout } from './layout/Layout';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Random } from './pages/Random';
import { Error404 } from './pages/Error404';
import { About } from './pages/About';
import { Suspense } from 'react';

const App = () => {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Portfolio</title>~
      </Helmet>
      <Layout>
        <Routes>
          <Route
            path="/portfolio"
            // element={
            //   <Suspense>
            //     <Outlet />
            //   </Suspense>
            // }
          >
            {/* Render the About page */}
            <Route index element={<About />} />
            {/* Nested routes for sub-pages */}
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="random" element={<Random />} />
            {/* Redirect to the About page if no sub-page is specified */}
          </Route>
          <Route path="*" element={<Error404 />} />
          {/* <Route path="/portfolio/projects/*" element={<Error404 />} />
          <Route path="/portfolio/experience/*" element={<Error404 />} />
          <Route path="/portfolio/random/*" element={<Error404 />} /> */}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
