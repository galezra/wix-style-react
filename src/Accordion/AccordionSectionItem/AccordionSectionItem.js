import React from 'react';
import { st, classes } from './AccordionSectionItem.st.css';
import Text from '../../Text';

function accordionSectionItem({ title }) {
  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <Text skin="standard" weight="bold" size="small" ellipsis>
          {title}
        </Text>
      </div>
      <div className={classes.line} />
    </div>
  );
}

export default accordionSectionItem;
