import { Stars } from '@react-three/drei';

const Starfield = ({
  radius = 100,
  depth = 80,
  count = 15000,
  factor = 4,
  saturation = 0,
  fade = true,
  speed = 2.5
}) => {
  return (
    <Stars
      radius={radius}
      depth={depth}
      count={count}
      factor={factor}
      saturation={saturation}
      fade={fade}
      speed={speed}
    />
  );
};

export default Starfield;
