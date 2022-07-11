import React, { useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { Container } from '../../utils/styles';

import { controlOptions } from './atom';

const Control: React.FC = () => {
  const [controlState, setControlState] = useRecoilState(controlOptions);

  const onStart = useCallback(() => {
    setControlState({ ...controlState, isRunning: true });
  }, [controlState, setControlState]);

  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      setControlState((oldState: any) => {
        return { ...oldState, isRunning: false };
      });
    });
    return () => document.removeEventListener('visibilitychange', () => null);
  }, [setControlState]);

  useEffect(() => {
    onStart();
  }, [onStart]);

  return <Container className="control"></Container>;
};

export default React.memo(Control);
