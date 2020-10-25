import * as React from 'react';

export interface SkeletonRectangleProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class SkeletonRectangle extends React.PureComponent<SkeletonRectangleProps>{}
