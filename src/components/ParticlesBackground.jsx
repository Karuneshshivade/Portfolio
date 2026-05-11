import Particles from 'react-tsparticles';

function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: '#0f172a'
          }
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60
          },
          color: {
            value: '#00d9ff'
          },
          links: {
            enable: true,
            color: '#00d9ff'
          },
          move: {
            enable: true,
            speed: 2
          }
        }
      }}
      className="particles"
    />
  );
}
export default ParticlesBackground;