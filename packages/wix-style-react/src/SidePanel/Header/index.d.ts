import * as React from 'react';
import { TooltipCommonProps } from '../../common';

export interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
  infoTooltipProps?: TooltipCommonProps;
  infoTooltipContent?: string;
  showDivider?: boolean;
}
export default class Header extends React.PureComponent<HeaderProps> {}
