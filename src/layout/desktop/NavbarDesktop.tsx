import { AppBar, Toolbar, Typography, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const NavBarDesktop = () => {
  const theme = useTheme();
  const location = useLocation();

  const isProjectsPath = location.pathname.includes('projects');
  const isExperiencePath = location.pathname.includes('experience');
  const isRandomPath = location.pathname.includes('random');

  return (
    <Grid
      item
      xs={12}
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 0,
        paddingRight: 0,
      }}
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
            <Link to="/portfolio/projects" style={{ textDecoration: 'none' }}>
              <Button
                component="div"
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
                  backgroundColor: isProjectsPath ? theme.palette.primary.main : 'transparent',
                  color: isProjectsPath ? theme.palette.common.black : theme.palette.primary.main,
                }}
              >
                <Typography variant="h5" sx={{ paddingLeft: 1 }}>
                  Projects
                </Typography>
              </Button>
            </Link>
            <Link to="/portfolio/experience" style={{ textDecoration: 'none' }}>
              <Button
                component="div"
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
                  backgroundColor: isExperiencePath ? theme.palette.primary.main : 'transparent',
                  color: isExperiencePath ? theme.palette.common.black : theme.palette.primary.main,
                }}
              >
                <Typography variant="h5">Experience</Typography>
              </Button>
            </Link>
            <Link to="/portfolio/random" style={{ textDecoration: 'none' }}>
              <Button
                component="div"
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
                  backgroundColor: isRandomPath ? theme.palette.primary.main : 'transparent',
                  color: isRandomPath ? theme.palette.common.black : theme.palette.primary.main,
                }}
              >
                <Typography variant="h5" sx={{ paddingRight: 1 }}>
                  Random
                </Typography>
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
