import { Box } from '@mui/material';
import TimelineDot from '@mui/lab/TimelineDot';

export const About = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TimelineDot
        color="primary"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={`/portfolio/headshot.png`}
          alt="Food Icon"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </TimelineDot>
    </Box>
  );
};
