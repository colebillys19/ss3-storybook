import React from 'react';
import Card from '@material-ui/core/Card';

const BaseCard = (props) => (
  <Card
    classes={{ root: 'card-root' }}
    elevation={0}
    {...props}
  />
);

export default BaseCard;
