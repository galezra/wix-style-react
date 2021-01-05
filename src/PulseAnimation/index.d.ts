import * as React from 'react';

export interface PulseAnimationProps {
  dataHook?: string;
  children: React.ReactNode;
  active?: boolean;
  onStart?: (event: React.AnimationEvent<HTMLDivElement>) => void;
  onEnd?: (event: React.AnimationEvent<HTMLDivElement>) => void;
  loop?: boolean;
  delay?: string | number;
}

export default class PulseAnimation extends React.PureComponent<PulseAnimationProps>{}
