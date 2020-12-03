import React from 'react';
import T from 'prop-types';

import { FilterButton } from './styledComponents';

const Filter = ({ label, onClick, selected, ...restProps }) => (
  <FilterButton
    $selected={selected}
    label={label}
    onClick={onClick}
    {...restProps}
  />
);

Filter.propTypes = {
  label: T.string.isRequired,
  onClick: T.func.isRequired,
  selected: T.bool.isRequired,
};

export default Filter;
