import { Box, ListItem, ListItemIcon, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CustomTimeline } from '../components/CustomTimeline';
import { EXPERIENCE } from '../database/experience';

export const Experience = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        color: 'white',
      }}
    >
      <CustomTimeline timelineData={EXPERIENCE} />
      {/* <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '46px', px: 2 }} variant="body1">
            November 2022 - Current
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <a
                href="https://ideon.ai/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '80px', height: '80px' }}
              >
                <img
                  src="/portfolio/ideon-logo.png"
                  alt="Food Icon"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              </a>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Card
              sx={{
                backgroundColor: 'transparent',
                border: `1px solid ${theme.palette.primary.main}`,
                padding: 1,
                color: 'white',
              }}
            >
              <Typography variant="h5">Ideon Technologies</Typography>
              <ListItem disableGutters>
                <ListItemIcon
                  sx={{ minWidth: 24, marginRight: 0.25, color: theme.palette.primary.main }}
                >
                  <LocationOnIcon sx={{ fontSize: 24 }} />
                </ListItemIcon>
                <Typography variant="body1">Richmond BC, Hybrid</Typography>
              </ListItem>
              <Typography variant="body2">
                Because you need strength Because you need strength Because you need strength
              </Typography>
              <Typography variant="body2">Because you need strength</Typography>
              <Typography variant="body2">Because you need strength</Typography>
              <Typography variant="body2">Because you need strength</Typography>
              <Typography variant="body2">Because you need strength</Typography>
              <Typography variant="body2">Because you need strength</Typography>
              <Typography variant="body2">Because you need strength</Typography>
            </Card>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '46px', px: 2 }} variant="body2">
            Febuary 2022 - April 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <img
                src="/portfolio/tailored-tutors-logo.png"
                alt="Food Icon"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" sx={{ textAlign: 'left' }}>
              Tailored Tutors
            </Typography>
            <ListItem disableGutters>
              <ListItemIcon
                sx={{ minWidth: 24, marginRight: 0.25, color: theme.palette.primary.main }}
              >
                <LocationOnIcon sx={{ fontSize: 24 }} />
              </ListItemIcon>
              <Typography variant="body1">Remote</Typography>
            </ListItem>
            <Typography variant="body2" sx={{ textAlign: 'left' }}>
              Because you need strength Because
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'left' }}>
              Because you need strength Because
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'left' }}>
              Because you need strength Because baoeg afoeugb aojfabnoej jonaojdf
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '46px', px: 2 }} variant="body2">
            January 2021 - April 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <img
                src="/portfolio/selkirk-innovates-logo.png"
                alt="Food Icon"
                style={{
                  width: '75px',
                  height: '75px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Selkirk Innovates
            </Typography>
            <Typography>Because you need rest</Typography>
            <Typography>Because you need rest</Typography>
            <Typography>Because you need rest</Typography>
            <Typography>Because you need rest</Typography>
            <Typography>Because you need rest</Typography>
            <Typography>Because you need rest</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '46px', px: 2 }} variant="body2">
            September 2019 - April 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <img
                src="/portfolio/verathon-logo.png"
                alt="Food Icon"
                style={{
                  width: '75px',
                  height: '75px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Verathon Medical
            </Typography>
            <Typography>Because this is the life you love!</Typography>
            <Typography>Because this is the life you love!</Typography>
            <Typography>Because this is the life you love!</Typography>
            <Typography>Because this is the life you love!</Typography>
            <Typography>Because this is the life you love!</Typography>
            <Typography>Because this is the life you love!</Typography>
            <Typography>Because this is the life you love!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent />
          <TimelineSeparator>
            <TimelineDot color="primary" sx={{ width: 10, height: 10 }}>
              {/* <img
                src="/portfolio/verathon-logo.png"
                alt="Food Icon"
                style={{
                  width: '75px',
                  height: '75px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              /> 
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent />
        </TimelineItem>
      </Timeline> */}
    </Box>
  );
};
