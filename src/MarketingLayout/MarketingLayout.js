import React from 'react';
import PropTypes from 'prop-types';

import Content from './components/Content';
import { Layout, Cell } from '../Layout';
import Proportion from '../Proportion';
import { SIZES, DIRECTIONS } from './constants';
import { st, classes } from './MarketingLayout.st.css';
import { stVars as colorsStVars } from '../Foundation/stylable/colors.st.css';

const cellSpansBySize = {
  [SIZES.tiny]: {
    image: 3,
    spacer: 1,
    content: 8,
  },
  [SIZES.small]: {
    image: 2,
    spacer: 1,
    content: 9,
  },
  [SIZES.medium]: {
    image: 4,
    spacer: 1,
    content: 7,
  },
  [SIZES.large]: {
    image: 5,
    spacer: 1,
    content: 6,
  },
};

const imagePlaceholderAspectRatioBySize = {
  [SIZES.tiny]: 1,
  [SIZES.small]: 1,
  [SIZES.medium]: 282 / 188,
  [SIZES.large]: 360 / 240,
};

/** Marketing layout is a layout designed to promote new features or display first time visit.
 * Component has title, description, action and illustration areas. */
class MarketingLayout extends React.PureComponent {
  static displayName = 'MarketingLayout';

  static propTypes = {
    /** Hook for testing purposes. */
    dataHook: PropTypes.string,
    /** Image URL or custom element. */
    image: PropTypes.node,
    /** Image area background color. Can be a keyword from color palette or any supported CSS color value (Hex, RGB, etc.) */
    imageBackgroundColor: PropTypes.string,
    /** Size of the marketing layout. */
    size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
    /** Direction of the parts of the marketing layout (top to bottom or left to right). */
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Alignment of the content of the marketing layout. */
    alignItems: PropTypes.oneOf(['center', 'stretch']),
    /** Invert marketing layout (with image displayed on the left). */
    inverted: PropTypes.bool,
    /** Marketing layout actions. */
    actions: PropTypes.node,
    /** Title as a string or custom element. */
    title: PropTypes.node,
    /** Description as a string or custom element. */
    description: PropTypes.node,
    /** Add a badge to the layout. */
    badge: PropTypes.node,
    /** Show spacing of a badge in the layout. If a badge was given it will be hidden,
     * if no badge was given there will be spacing as if there is a hidden badge. */
    hiddenBadge: PropTypes.bool,
  };

  static defaultProps = {
    size: 'small',
    alignItems: 'center',
    inverted: false,
    direction: 'horizontal',
    hiddenBadge: false,
  };

  _renderSpacerCell = span => <Cell key="spacer" span={span} />;

  _renderImagePlaceholder = () => {
    const { size } = this.props;
    return (
      <Proportion aspectRatio={imagePlaceholderAspectRatioBySize[size]}>
        <div className={classes.imagePlaceholder} />
      </Proportion>
    );
  };

  _renderImageCell = span => {
    const { image, imageBackgroundColor } = this.props;
    return (
      <Cell key="image" span={span}>
        <div className={classes.imageWrapper}>
          {imageBackgroundColor && (
            <div
              className={classes.imageBackground}
              style={{
                backgroundColor:
                  colorsStVars[imageBackgroundColor] || imageBackgroundColor,
              }}
            />
          )}
          <div className={classes.imageContainer}>
            {typeof image === 'string' ? (
              <img src={image} width="100%" />
            ) : (
              image || this._renderImagePlaceholder()
            )}
          </div>
        </div>
      </Cell>
    );
  };

  _renderContentCell = span => {
    const {
      size,
      actions,
      title,
      description,
      badge,
      hiddenBadge,
    } = this.props;
    return (
      <Cell key="content" span={span}>
        {badge && !hiddenBadge && <div className={classes.badge}>{badge}</div>}
        <Content
          size={size}
          actions={actions}
          title={title}
          description={description}
          badge={badge}
        />
      </Cell>
    );
  };

  _renderSpacerRow = () => <div className={classes.spacerRow} />;

  _renderVerticalLayout = (contentCell, imageCell) => {
    const { inverted } = this.props;
    const spacerRow = this._renderSpacerRow();

    return (
      <div className={classes.verticalLayout}>
        {inverted ? (
          <div>
            {contentCell}
            {spacerRow}
            <Layout>{[imageCell]}</Layout>
          </div>
        ) : (
          <div>
            <Layout>{[imageCell]}</Layout>
            {spacerRow}
            {contentCell}
          </div>
        )}
      </div>
    );
  };

  _renderContent = () => {
    const { inverted, size, direction } = this.props;
    const cellSpans = cellSpansBySize[size];
    const spacerCell = this._renderSpacerCell(cellSpans.spacer);
    const imageCell = this._renderImageCell(cellSpans.image);
    const contentCell = this._renderContentCell(cellSpans.content);

    return direction === DIRECTIONS.vertical ? (
      this._renderVerticalLayout(contentCell, imageCell)
    ) : (
      <Layout>
        {inverted
          ? [imageCell, contentCell, spacerCell]
          : [contentCell, spacerCell, imageCell]}
      </Layout>
    );
  };

  render() {
    const {
      size,
      badge,
      hiddenBadge,
      alignItems,
      inverted,
      direction,
      actions,
      dataHook,
      imageBackgroundColor,
    } = this.props;

    return (
      <div
        className={st(classes.root, {
          size,
          badge: !!badge,
          hiddenBadge,
          alignItems,
          inverted,
          direction,
          withActions: !!actions,
          withImageBackground: !!imageBackgroundColor,
        })}
        data-hook={dataHook}
      >
        {this._renderContent()}
      </div>
    );
  }
}

export default MarketingLayout;
