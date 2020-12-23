import * as React from 'react';

export interface SocialPreviewProps {
  dataHook?: string;
  title?: string;
  description?: string;
  previewUrl?: string;
  media?: React.ReactNode;
}

export default class SocialPreview extends React.Component<
  SocialPreviewProps
> {}
