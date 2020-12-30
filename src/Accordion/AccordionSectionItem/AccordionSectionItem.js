import React from 'react';
import { st, classes } from './AccordionSectionItem.st.css';
import Text from '../../Text';

function accordionSectionItem({ title, size }) {
  return (
    <div className={st(classes.root, { size })}>
      <Text skin="standard" weight="bold" size="small">
        {title}
      </Text>
    </div>
  );
}

export default accordionSectionItem;
