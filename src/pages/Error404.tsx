import { Box } from '@mui/material';
import { GlitchText } from '../components/glitch-text/GlitchText';

export const Error404 = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100vh - 216px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <GlitchText text="404" sizePX={200} />
    </Box>
  );
};
