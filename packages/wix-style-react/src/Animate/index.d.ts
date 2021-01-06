import * as React from 'react';

export interface AnimateProps {
  dataHook?: string;
  className?: string;
  children: React.ReactNode;
  onStart?(): void;
  onEnd?(): void;
  delay?: string | number;
}

declare const Animate: React.FC<AnimateProps>;
export default Animate;
