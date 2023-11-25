import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export const Experience = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        color: theme.palette.primary.main,
      }}
    >
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2">
            November 2022 - Current
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <img
                src="/portfolio/ideon-logo.png"
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
              Ideon Technologies
            </Typography>
            <Typography>Because you need strength</Typography>
            <Typography>Because you need strength</Typography>
            <Typography>Because you need strength</Typography>
            <Typography>Because you need strength</Typography>
            <Typography>Because you need strength</Typography>
            <Typography>Because you need strength</Typography>
            <Typography>Because you need strength</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
            Febuary 2022 - April 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <img
                src="/portfolio/tailored-tutors-logo.png"
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
              Tailored Tutors
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
            <Typography>Because it&apos;s awesome!</Typography>
            <Typography>Because it&apos;s awesome!</Typography>
            <Typography>Because it&apos;s awesome!</Typography>
            <Typography>Because it&apos;s awesome!</Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
            January 2021 - April 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
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
          <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
            September 2019 - April 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
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
      </Timeline>
    </Box>
  );
};
