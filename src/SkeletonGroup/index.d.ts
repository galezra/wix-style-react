import * as React from 'react';

export interface SkeletonGroupProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class SkeletonGroup extends React.PureComponent<SkeletonGroupProps>{}
