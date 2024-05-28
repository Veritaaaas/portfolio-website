import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const MyParticles = () => {
    const [ init, setInit ] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
      <>
          {init && <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={{
                  fpsLimit: 120,
                  interactivity: {
                      events: {
                          onClick: {
                              enable: true,
                              mode: "push",
                          },
                          onHover: {
                              enable: true,
                              mode: "repulse",
                          },
                          resize: true,
                      },
                      modes: {
                          push: {
                              quantity: 4,
                          },
                          repulse: {
                              distance: 200,
                              duration: 0.4,
                          },
                      },
                  },
                  particles: {
                      color: {
                          value: "2E2F3D",
                      },
                      links: {
                          color: "2E2F3D",
                          distance: 150,
                          enable: true,
                          opacity: 0.7,
                          width: 1,
                      },
                      move: {
                          direction: "none",
                          enable: true,
                          outModes: {
                              default: "bounce",
                          },
                          random: false,
                          speed: 2,
                          straight: false,
                      },
                      number: {
                          density: {
                              enable: true,
                              area: 800,
                          },
                          value: 80,
                      },
                      opacity: {
                          value: 0.5,
                      },
                      shape: {
                          type: "circle",
                      },
                      size: {
                          value: { min: 1, max: 5 },
                      },
                  },
                  detectRetina: true,
                  style: {
                      position: "absolute",
                  },
                  fullScreen: { enable: true },
              }}
          />}
      </>
  );
};

export default MyParticles;