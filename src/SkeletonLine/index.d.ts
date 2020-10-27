import * as React from 'react';

export interface SkeletonLineProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class SkeletonLine extends React.PureComponent<SkeletonLineProps>{}
