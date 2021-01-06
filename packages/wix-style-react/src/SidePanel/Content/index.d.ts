import * as React from 'react';

export interface ContentProps {
  children?: React.ReactNode;
  className?: string;
}

export default class Content extends React.PureComponent<ContentProps> {}
