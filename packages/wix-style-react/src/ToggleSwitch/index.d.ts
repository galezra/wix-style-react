import * as React from 'react';

export interface ToggleSwitchProps {
  dataHook?: string;
  skin?: ToggleSwitchSkin;
  size?: ToggleSwitchSize;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  tabIndex?: number;
}

export default class ToggleSwitch extends React.Component<ToggleSwitchProps> {}

export type ToggleSwitchSkin = 'standard' | 'success' | 'error';
export type ToggleSwitchSize = 'small' | 'medium' | 'large';
