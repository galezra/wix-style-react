import * as React from 'react';

export interface AnimateProps {
  dataHook?: string;
  children: React.ReactNode;
  active?: boolean;
  onStart?(): void;
  onEnd?(): void;
  loop?: boolean;
  delay?: string | number;
}

export default class Animate extends React.PureComponent<AnimateProps> {}
