import { ParticlesBackground } from './components/particles/ParticlesBackground';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AppBar, Toolbar, Typography, Grid, Button } from '@mui/material';
import { createMuiTheme } from './theme';
import { Helmet } from 'react-helmet';

const App = () => {
  const theme = createMuiTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Grid container>
        <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: '1000' }}>
          {isMobile ? (
            <Grid item xs={12}>
              Desktop
            </Grid>
          ) : (
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center', paddingLeft: 0, paddingRight: 0 }}
            >
              <AppBar
                position="static"
                sx={{
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                }}
              >
                <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Grid container sx={{ width: 'auto' }}>
                    <Button
                      href="/"
                      sx={{
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.common.black,
                        },
                        borderTopWidth: '2px',
                        borderLeftWidth: '2px',
                        borderBottomWidth: '2px',
                        borderTopStyle: 'solid',
                        borderLeftStyle: 'solid',
                        borderBottomStyle: 'solid',
                        borderTopColor: theme.palette.primary.main,
                        borderLeftColor: theme.palette.primary.main,
                        borderBottomColor: theme.palette.primary.main,
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 0,
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 0,
                      }}
                    >
                      <Typography variant="h5" sx={{ paddingLeft: 1 }}>
                        Projects
                      </Typography>
                    </Button>
                    <Button
                      href="/about"
                      sx={{
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.common.black,
                        },
                        borderTopWidth: '2px',
                        borderLeftWidth: '2px',
                        borderBottomWidth: '2px',
                        borderTopStyle: 'solid',
                        borderBottomStyle: 'solid',
                        borderTopColor: theme.palette.primary.main,
                        borderBottomColor: theme.palette.primary.main,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                    >
                      <Typography variant="h5">Experience</Typography>
                    </Button>
                    <Button
                      href="/services"
                      sx={{
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.common.black,
                        },
                        borderTopWidth: '2px',
                        borderRightWidth: '2px',
                        borderBottomWidth: '2px',
                        borderTopStyle: 'solid',
                        borderRightStyle: 'solid',
                        borderBottomStyle: 'solid',
                        borderTopColor: theme.palette.primary.main,
                        borderRightColor: theme.palette.primary.main,
                        borderBottomColor: theme.palette.primary.main,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 25,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 25,
                      }}
                    >
                      <Typography variant="h5" sx={{ paddingRight: 1 }}>
                        Random
                      </Typography>
                    </Button>
                  </Grid>
                </Toolbar>
              </AppBar>
            </Grid>
          )}
        </div>
        <ParticlesBackground />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
