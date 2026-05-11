import { useEffect, useState } from 'react';

function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  const [trailPosition, setTrailPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY
      });

      setTimeout(() => {
        setTrailPosition({
          x: e.clientX,
          y: e.clientY
        });
      }, 80);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };

  }, []);

  return (
    <>
      <div
        className="cursor-ring"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`
        }}
      ></div>

      <div
        className="cursor-main"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      ></div>
    </>
  );
}

export default CustomCursor;