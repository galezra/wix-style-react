import * as React from 'react';

export interface SkeletonCircleProps {
  dataHook?: string;
  className?: string;
  diameter?: React.CSSProperties['width'];
  margin?: React.CSSProperties['margin'];
  marginTop?: React.CSSProperties['marginTop'];
  marginRight?: React.CSSProperties['marginRight'];
  marginBottom?: React.CSSProperties['marginBottom'];
  marginLeft?: React.CSSProperties['marginLeft'];
}

export default class SkeletonCircle extends React.PureComponent<
  SkeletonCircleProps
> {}
