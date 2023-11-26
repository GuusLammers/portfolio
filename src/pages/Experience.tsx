import { Box } from '@mui/material';
import { CustomTimeline } from '../components/CustomTimeline';
import { EXPERIENCE } from '../database/experience';

export const Experience = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        color: 'white',
      }}
    >
      <CustomTimeline timelineData={EXPERIENCE} />
    </Box>
  );
};
