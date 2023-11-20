import { AppBar, Toolbar, Typography, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const NavBarDesktop = () => {
  const theme = useTheme();

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
  );
};
