import * as React from 'react';

export interface SkeletonRectangleProps {
  dataHook?: string;
  className?: string;
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
  margin?: React.CSSProperties['margin'];
  marginTop?: React.CSSProperties['marginTop'];
  marginRight?: React.CSSProperties['marginRight'];
  marginBottom?: React.CSSProperties['marginBottom'];
  marginLeft?: React.CSSProperties['marginLeft'];
}

export default class SkeletonRectangle extends React.PureComponent<
  SkeletonRectangleProps
> {}
