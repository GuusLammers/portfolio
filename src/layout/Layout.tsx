import { Grid } from '@mui/material';
import { ParticlesBackground } from '../components/particles/ParticlesBackground';
import { NavBarDesktop } from './desktop/NavbarDesktop';
import { PageContainer } from './PageContainer';
import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
      }}
    >
      <div
        style={{
          width: '1000px',
          height: '100%',
          margin: 0,
          zIndex: '1000',
        }}
      >
        <Grid
          item
          sx={{
            flex: '0 0 auto',
            height: '100px',
          }}
        >
          <NavBarDesktop />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            flex: 1,
            overflowY: 'auto',
            height: 'calc(100vh - 108px)',
          }}
        >
          <PageContainer>{children}</PageContainer>
        </Grid>
      </div>
      <ParticlesBackground />
    </Grid>
  );
};
