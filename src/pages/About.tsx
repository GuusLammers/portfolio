import { Box, Stack, IconButton } from '@mui/material';
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
        {/* <Typography
          sx={{
            width: '600px',
            textAlign: 'center',
          }}
        >
          I am a Intermediate Software Engineer based in Vancouver, Canada. I hold a BASc in
          Integrated Engineering from UBC and am a Certified ScrumMaster. Currently, I work at Ideon
          Technologies, where I develop full-stack features for cloud platforms and serve as
          ScrumMaster for a team of over 10 people.
        </Typography>
        <Typography
          sx={{
            width: '600px',
            paddingTop: 1,
            textAlign: 'center',
          }}
        >
          In my free time, I enjoy staying active through swimming, biking, running, and disc
          golfing. I also design TradingView indicators such as the GL Line Indicator and the GL
          Gann Swing Indicator for crypto trading. Feel free to connect with me on LinkedIn and
          explore my Portfolio and GitHub to see more of my work.
        </Typography> */}
      </Stack>
    </Box>
  );
};
