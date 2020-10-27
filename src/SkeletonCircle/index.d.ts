import * as React from 'react';

export interface SkeletonCircleProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class SkeletonCircle extends React.PureComponent<SkeletonCircleProps>{}
