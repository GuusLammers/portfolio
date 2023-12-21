import { Box } from '@mui/material';
import { CustomTimeline } from '../components/CustomTimeline';
import { PROJECTS } from '../database/projects';

export const Projects = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        color: 'white',
      }}
    >
      <CustomTimeline timelineData={PROJECTS} />
    </Box>
  );
};
