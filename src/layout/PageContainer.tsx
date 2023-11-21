import { Grid } from '@mui/material';
import { FC, ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <Grid container item xs={12}>
      {children}
    </Grid>
  );
};
