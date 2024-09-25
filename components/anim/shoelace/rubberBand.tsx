import { useState } from 'react';
import SlAnimation from '@shoelace-style/shoelace/dist/react/animation';

interface RubberBandElementProps{
    children: React.ReactNode;
}

export const RubberBandElement = ({children}:RubberBandElementProps) => {
  const [play, setPlay] = useState(false);

  return (
    <div className="animation-form">
      <SlAnimation name="rubberBand" duration={1000} iterations={1} play={play} onSlFinish={() => setPlay(false)}>
        <div onClick={() => setPlay(true)}>
            {children}
        </div>
      </SlAnimation>
    </div>
  );
};
