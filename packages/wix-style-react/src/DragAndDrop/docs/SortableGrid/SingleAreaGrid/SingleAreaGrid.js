import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { dndStyles as defaultDndStyles, SortableGrid } from 'wix-style-react';

import styles from './SingleAreaGrid.scss';

const generateId = () => Math.floor(Math.random() * 100000);

export default class SingleAreaGrid extends React.Component {
  static propTypes = { withHandle: PropTypes.bool };

  state = {
    items: [
      { id: generateId(), text: 'Item 1' },
      { id: generateId(), text: 'Item 2' },
      { id: generateId(), text: 'Item 3' },
      { id: generateId(), text: 'Item 4' },
      { id: generateId(), text: 'Item 5' },
      { id: generateId(), text: 'Item 6' },
      { id: generateId(), text: 'Item 7' },
      { id: generateId(), text: 'Item 8' },
      { id: generateId(), text: 'Item 9' },
    ],
  };

  handleDrop = () => {};

  renderHandle({ connectHandle, id, isPlaceholder }) {
    return connectHandle(
      <div
        className={styles.handle}
        style={{ opacity: isPlaceholder ? 0 : 1 }}
        data-hook={`card-${id}-handle`}
      >
        Drag Handle
      </div>,
    );
  }

  renderItem = ({
    isPlaceholder,
    isPreview,
    id,
    connectHandle,
    item,
    withStrip,
    isInitialPositionToDrop,
  }) => {
    const stripPositionClass = classNames({
      [defaultDndStyles.withGridItemStrip]: withStrip,
      [defaultDndStyles.withGridItemStripRight]: withStrip === 'right',
    });

    const classes = classNames(
      classNames(defaultDndStyles.item, styles.item, stripPositionClass),
      {
        [classNames(defaultDndStyles.gridItemPreview)]: isPreview,
        [classNames(defaultDndStyles.gridItemPlaceholder)]: isPlaceholder,
        [classNames(
          defaultDndStyles.isInitialPositionToDrop,
        )]: isInitialPositionToDrop,
      },
    );

    return (
      <div className={classes} data-hook={`item-${id}`}>
        {item.text}
        {this.props.withHandle
          ? this.renderHandle({
              connectHandle,
              id,
              isPlaceholder,
            })
          : null}
      </div>
    );
  };

  render() {
    return (
      <div className={styles.root}>
        <h3 className={styles.title}>Draggable Area</h3>
        <SortableGrid
          withHandle={this.props.withHandle}
          className={styles.sortableGrid}
          containerId="single-area-1"
          dataHook="grid-single-area"
          items={this.state.items}
          renderItem={this.renderItem}
          onDrop={this.handleDrop}
          startFixedElement={this.props.startFixedElement}
        />
      </div>
    );
  }
}
