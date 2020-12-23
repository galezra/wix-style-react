import * as React from 'react';

export interface GooglePreviewProps {
  dataHook?: string;
  title?: string;
  previewUrl?: string;
  description?: string;
}

export default class GooglePreview extends React.PureComponent<
  GooglePreviewProps
> {}
