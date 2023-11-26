import { FC } from 'react';
import { TimelineObject } from '../types/timeline';
import { ListItem, ListItemIcon, Card } from '@mui/material';
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

interface CustomeTimelineProps {
  timelineData: TimelineObject[];
}

export const CustomTimeline: FC<CustomeTimelineProps> = ({ timelineData }) => {
  const theme = useTheme();

  return (
    <Timeline position="alternate">
      {timelineData.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent sx={{ py: '46px', px: 2 }} variant="body1">
            {item.timeRange}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <a
                href={item.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '80px', height: '80px' }}
              >
                <img
                  src={`/portfolio/${item.image}`}
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
              <Typography variant="h5" sx={{ textAlign: 'left' }}>
                {item.title}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: 'left' }}>
                {item.jobTitle}
              </Typography>
              <ListItem disableGutters sx={{ p: 0 }}>
                <ListItemIcon
                  sx={{ minWidth: 20, pl: 0, mr: 0.25, color: theme.palette.primary.main }}
                >
                  <LocationOnIcon sx={{ fontSize: 24 }} />
                </ListItemIcon>
                <Typography variant="body1" sx={{ textAlign: 'left' }}>
                  {item.location}
                </Typography>
              </ListItem>

              <Typography variant="body2" sx={{ textAlign: 'left' }}>
                Because you need strength
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'left' }}>
                Because you need strength
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'left' }}>
                Because you need strength
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'left' }}>
                Because you need strength
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'left' }}>
                Because you need strength
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'left' }}>
                Because you need strength
              </Typography>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}

      <TimelineItem>
        <TimelineOppositeContent />
        <TimelineSeparator>
          <TimelineDot color="primary" sx={{ width: 10, height: 10 }} />
        </TimelineSeparator>
        <TimelineContent />
      </TimelineItem>
    </Timeline>
  );
};
