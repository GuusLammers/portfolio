import { Box, Stack, IconButton, Typography } from '@mui/material';
import { GlitchText } from '../components/glitch-text/GlitchText';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const About = () => {
  const theme = useTheme();

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
      <Stack sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: '262px',
            height: '262px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            backgroundColor: theme.palette.primary.main,
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
        </Box>
        <GlitchText text="Guus Lammers" sizePX={100} />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton
            sx={{ paddingTop: 0, color: theme.palette.primary.main }}
            onClick={() => {
              window.open('https://github.com/guuslammers');
            }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            sx={{ paddingTop: 0, color: theme.palette.primary.main }}
            onClick={() => {
              window.open('https://www.linkedin.com/in/guuslammers/');
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Box>
        <Typography
          sx={{
            width: '600px',
            textAlign: 'center',
          }}
        >
          I am an Intermediate Software Engineer based in Vancouver, Canada, with a BASc in
          Integrated Engineering from UBC, majoring in Computer Engineering and minoring in
          Mechanical Engineering. I am also a Certified ScrumMaster. At Ideon Technologies, I
          develop full-stack features for cloud platforms and lead a team of over 10 people as
          ScrumMaster.
        </Typography>
      </Stack>
    </Box>
  );
};
