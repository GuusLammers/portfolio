{
    background: {
      color: {
        value: '#000000',
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
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 10,
          duration: 2,
          opacity: {
            value: {
              min: 0.5,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
        },
      },
    },
    particles: {
      color: {
        value: '#20c20e',
      },
      links: {
        color: '#20c20e',
        distance: 125,
        enable: true,
        opacity: 0.25,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 75,
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.5,
        },
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
      },
      shape: {
        type: ['circle', 'square', 'triangle'],
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }