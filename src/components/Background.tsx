import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import type { Engine } from 'tsparticles-engine';

export function Background() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: {
            value: "#0B1120",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            }
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.5
              }
            }
          }
        },
        particles: {
          color: {
            value: "#00ff9d",
          },
          links: {
            color: "#00ff9d",
            distance: 150,
            enable: true,
            opacity: 0.298,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            direction: "none",
            outModes: {
              default: "out",
            },
            random: true,
            speed: 4,
            straight: false,
          },
          number: {
            value: 140,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          }
        },
        detectRetina: true,
      }}
    />
  );
}