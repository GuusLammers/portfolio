import { ISourceOptions } from 'tsparticles-engine';
import { useTheme } from '@mui/material/styles';

const ParticleOptions = () => {
  const theme = useTheme();

  const options: ISourceOptions = {
    background: {
      color: {
        value: theme.palette.background.default,
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ['grab', 'bubble'],
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.6,
          },
        },
        bubble: {
          distance: 200,
          duration: 2,
          opacity: 0.8,
          size: 20,
        },
      },
    },
    particles: {
      //   color: {
      //     value: theme.palette.primary.main,
      //   },
      links: {
        color: theme.palette.primary.main,
        distance: 125,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        speed: 6,
        straight: false,
        bounce: true,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 75,
      },
      //   opacity: {
      //     value: {
      //       min: 1,
      //       max: 1,
      //     },
      //     animation: {
      //       enable: true,
      //       speed: 5,
      //       sync: false,
      //     },
      //   },
      shape: {
        options: {
          image: [
            {
              name: 'zero',
            },
            {
              name: 'one',
            },
          ],
        },
        type: 'image',
      },
      size: {
        value: { min: 5, max: 8 },
      },
    },
    preload: [
      {
        name: 'zero',
        src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzIwYzIwZSIgY2xhc3M9ImJpIGJpLTAtY2lyY2xlIiB2aWV3Qm94PSIwIDAgMTYgMTYiPg0KICA8cGF0aCBkPSJNNy45ODggMTIuMTU4Yy0xLjg1MSAwLTIuOTQxLTEuNTctMi45NDEtMy45OVY3Ljg0YzAtMi40MDggMS4xMDEtMy45OTYgMi45NjUtMy45OTYgMS44NTcgMCAyLjkzNSAxLjU3IDIuOTM1IDMuOTk2di4zMjhjMCAyLjQwOC0xLjEwMSAzLjk5LTIuOTU5IDMuOTlaTTggNC45NTFjLTEuMDA4IDAtMS42MjkgMS4wOS0xLjYyOSAyLjg5NXYuMzFjMCAxLjgxLjYyNyAyLjg5NSAxLjYyOSAyLjg5NXMxLjYyMy0xLjA5IDEuNjIzLTIuODk1di0uMzFjMC0xLjgtLjYyMS0yLjg5NS0xLjYyMy0yLjg5NVoiLz4NCiAgPHBhdGggZD0iTTE2IDhBOCA4IDAgMSAxIDAgOGE4IDggMCAwIDEgMTYgMFpNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDhaIi8+DQo8L3N2Zz4=',
        width: 16,
        height: 16,
      },
      {
        name: 'one',
        src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzIwYzIwZSIgY2xhc3M9ImJpIGJpLTEtY2lyY2xlIiB2aWV3Qm94PSIwIDAgMTYgMTYiPg0KICA8cGF0aCBkPSJNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDhabTE1IDBBOCA4IDAgMSAxIDAgOGE4IDggMCAwIDEgMTYgMFpNOS4yODMgNC4wMDJWMTJINy45NzFWNS4zMzhoLS4wNjVMNi4wNzIgNi42NTZWNS4zODVsMS44OTktMS4zODNoMS4zMTJaIi8+DQo8L3N2Zz4=',
        width: 32,
        height: 32,
      },
    ],
    detectRetina: true,
  };

  return options;
};

export default ParticleOptions;
