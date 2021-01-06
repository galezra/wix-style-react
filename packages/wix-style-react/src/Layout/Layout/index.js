import React from 'react';
import PropTypes from 'prop-types';
import { classes } from './styles.st.css';

const Layout = ({
  children,
  gap,
  cols,
  justifyItems,
  alignItems,
  rowHeight,
  dataHook,
}) => (
  <div
    data-hook={dataHook}
    style={{
      gap,
      justifyItems,
      alignItems,
      gridAutoRows: rowHeight,
      gridTemplateColumns: cols ? `repeat(${cols}, minmax(0, 1fr))` : undefined,
    }}
    className={classes.root}
    children={children}
  />
);

Layout.displayName = 'Layout';

Layout.propTypes = {
  /** hook for testing purposes */
  dataHook: PropTypes.string,

  /** one or more Cell components. Other nodes are accepted although not recommended */
  children: PropTypes.node,

  /** distance between cells both vertically and horizontally */
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** set custom amount of columns to be rendered. Default is 12 which means at `<Cell span={12}/>` occupies all columns, in other words, full width */
  cols: PropTypes.number,

  /** is used to justify the grid items along the row axis */
  justifyItems: PropTypes.string,

  /** is used to aligns the grid items along the column axis */
  alignItems: PropTypes.string,

  /** Sets all rows to a given height. */
  rowHeight: PropTypes.string,
};

Layout.defaultProps = {
  gap: '30px',
  rowHeight: 'auto',
};

export default Layout;
