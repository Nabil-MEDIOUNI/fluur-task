import React from 'react';

import { useCallback, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { Container } from '../../utils/styles';
import Control from './Control';
import Dot from './Dot';

import { controlOptions, dotsState } from './atom';
import { SPAWN_INTERVAL } from './constants';
import { createDot } from './utils';

const RainingCircles: React.FC = () => {
  const [dots, updateDots] = useRecoilState(dotsState);
  const [controlState] = useRecoilState(controlOptions);
  const requestRef: any = useRef();
  const intervalRef: any = useRef();
  const fieldRef: any = useRef();

  const advanceStep = useCallback(() => {
    updateDots((oldDots): any => {
      const newDots = [];
      for (let i = 0; i < oldDots.length; i++) {
        const dot: any = oldDots[i];
        const newY = dot.y + (8 * controlState.speed) / 60;
        if (newY <= fieldRef.current.offsetHeight - dot.size / 2) {
          newDots.push({
            ...dot,
            y: newY,
          });
        }
      }
      return newDots;
    });
    requestRef.current = requestAnimationFrame(advanceStep);
  }, [controlState.speed, updateDots]);

  const spawnDot = useCallback(() => {
    updateDots((oldDots): any => [...oldDots, createDot()]);
  }, [updateDots]);

  useEffect(() => {
    const stop = () => {
      intervalRef.current && clearInterval(intervalRef.current);
      requestRef.current && cancelAnimationFrame(requestRef.current);
    };

    if (controlState.isRunning) {
      intervalRef.current = setInterval(spawnDot, SPAWN_INTERVAL);
      requestRef.current = requestAnimationFrame(advanceStep);
    } else {
      stop();
    }
    return () => stop();
  }, [controlState.isRunning, advanceStep, spawnDot]);

  return (
    <Container className="raining_circles">
      <Container className="panel">
        <Control />
      </Container>
      <Container className="field" ref={fieldRef}>
        {dots.map((dot: any, index: number) => {
          const x = ((fieldRef.current.offsetWidth - dot.size) * dot.x) / 100;
          return <Dot key={`dot-${index}`} {...dot} x={x} index={index} />;
        })}
      </Container>
    </Container>
  );
};

export default RainingCircles;
