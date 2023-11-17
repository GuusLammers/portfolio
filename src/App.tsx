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
                opacity: 0.5,
              },
            },
            // bubble: {
            //   distance: 400,
            //   size: 10,
            //   duration: 2,
            //   opacity: {
            //     value: {
            //       min: 0.5,
            //       max: 1,
            //     },
            //     animation: {
            //       enable: true,
            //       speed: 1,
            //       sync: false,
            //     },
            //   },
            // },
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
          opacity: {
            value: {
              min: 1,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
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
            value: { min: 5, max: 10 },
          },
        },
        preload: [
          {
            name: 'one',
            src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzIwYzIwZSIgY2xhc3M9ImJpIGJpLTEtY2lyY2xlIiB2aWV3Qm94PSIwIDAgMTYgMTYiPg0KICA8cGF0aCBkPSJNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDhabTE1IDBBOCA4IDAgMSAxIDAgOGE4IDggMCAwIDEgMTYgMFpNOS4yODMgNC4wMDJWMTJINy45NzFWNS4zMzhoLS4wNjVMNi4wNzIgNi42NTZWNS4zODVsMS44OTktMS4zODNoMS4zMTJaIi8+DQo8L3N2Zz4=',
            width: 32,
            height: 32,
          },
          // {
          //   name: 'one',
          //   src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzIwYzIwZSIgY2xhc3M9ImJpIGJpLTEtY2lyY2xlLWZpbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiI+DQogIDxwYXRoIGQ9Ik0xNiA4QTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDBaTTkuMjgzIDQuMDAySDcuOTcxTDYuMDcyIDUuMzg1djEuMjcxbDEuODM0LTEuMzE4aC4wNjVWMTJoMS4zMTJWNC4wMDJaIi8+DQo8L3N2Zz4=',
          //   width: 32,
          //   height: 32,
          // },
          {
            name: 'zero',
            src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzIwYzIwZSIgY2xhc3M9ImJpIGJpLTAtY2lyY2xlIiB2aWV3Qm94PSIwIDAgMTYgMTYiPg0KICA8cGF0aCBkPSJNNy45ODggMTIuMTU4Yy0xLjg1MSAwLTIuOTQxLTEuNTctMi45NDEtMy45OVY3Ljg0YzAtMi40MDggMS4xMDEtMy45OTYgMi45NjUtMy45OTYgMS44NTcgMCAyLjkzNSAxLjU3IDIuOTM1IDMuOTk2di4zMjhjMCAyLjQwOC0xLjEwMSAzLjk5LTIuOTU5IDMuOTlaTTggNC45NTFjLTEuMDA4IDAtMS42MjkgMS4wOS0xLjYyOSAyLjg5NXYuMzFjMCAxLjgxLjYyNyAyLjg5NSAxLjYyOSAyLjg5NXMxLjYyMy0xLjA5IDEuNjIzLTIuODk1di0uMzFjMC0xLjgtLjYyMS0yLjg5NS0xLjYyMy0yLjg5NVoiLz4NCiAgPHBhdGggZD0iTTE2IDhBOCA4IDAgMSAxIDAgOGE4IDggMCAwIDEgMTYgMFpNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDhaIi8+DQo8L3N2Zz4=',
            width: 16,
            height: 16,
          },
          // {
          //   name: 'zero',
          //   src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzIwYzIwZSIgY2xhc3M9ImJpIGJpLTAtY2lyY2xlLWZpbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiI+DQogIDxwYXRoIGQ9Ik04IDQuOTUxYy0xLjAwOCAwLTEuNjI5IDEuMDktMS42MjkgMi44OTV2LjMxYzAgMS44MS42MjcgMi44OTUgMS42MjkgMi44OTVzMS42MjMtMS4wOSAxLjYyMy0yLjg5NXYtLjMxYzAtMS44LS42MjEtMi44OTUtMS42MjMtMi44OTVaIi8+DQogIDxwYXRoIGQ9Ik0xNiA4QTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDBabS04LjAxMiA0LjE1OGMxLjg1OCAwIDIuOTYtMS41ODIgMi45Ni0zLjk5VjcuODRjMC0yLjQyNi0xLjA3OS0zLjk5Ni0yLjkzNi0zLjk5Ni0xLjg2NCAwLTIuOTY1IDEuNTg4LTIuOTY1IDMuOTk2di4zMjhjMCAyLjQyIDEuMDkgMy45OSAyLjk0MSAzLjk5WiIvPg0KPC9zdmc+',
          //   width: 16,
          //   height: 16,
          // },
        ],
        detectRetina: true,
      }}
    />
  );
};

export default App;
