import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      fpsLimit: 60,
      particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: ["#ff6600", "#ff3300", "#cc3300", "#ff9933", "#cc6600"] },
        opacity: {
          value: 0.4,
          random: { enable: true, minimumValue: 0.2 },
          animation: { enable: true, speed: 0.5, minimumValue: 0.1, sync: false },
        },
        size: {
          value: { min: 2, max: 4 },
          random: { enable: true },
          animation: { enable: true, speed: 2, minimumValue: 0.5, sync: false },
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: MoveDirection.top,
          random: true,
          straight: false,
          outModes: { default: OutMode.out },
        },
        shape: { type: "circle" },
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
          // resize omitido, é opcional
        },
      },
      detectRetina: true,
    }
    ),
[],
  );

if (init) {
  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}

return <></>;
};