import * as React from 'react';

export interface SkeletonLineProps {
  dataHook?: string;
  className?: string;
  width?: React.CSSProperties['width'];
  margin?: React.CSSProperties['margin'];
  marginTop?: React.CSSProperties['marginTop'];
  marginRight?: React.CSSProperties['marginRight'];
  marginBottom?: React.CSSProperties['marginBottom'];
  marginLeft?: React.CSSProperties['marginLeft'];
}

export default class SkeletonLine extends React.PureComponent<
  SkeletonLineProps
> {}
