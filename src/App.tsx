import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
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
      }}
    />
  );
};

export default App;
