import React, { useState } from 'react';
import T from 'prop-types';

import Filter from '../Filter';
import { StyledButtonGroup } from './styledComponents';

const FilterGroup = ({
  filterList,
  selectedFilter,
  ...restProps
}) => {
  const [selected, setSelected] = useState(selectedFilter);
  const handleClick = ({ filterOnClickFunc, newSelected }) => {
    const selectedToDisplay = newSelected === selected ? '' : newSelected;
    setSelected(selectedToDisplay);
    filterOnClickFunc();
  };

  return (
    <StyledButtonGroup
      classes={{ groupedText: 'groupedText' }}
      variant="text"
      {...restProps}
    >
      {
        filterList.map(({
          label,
          onClick,
          ...restFilterProps
        }) => (
          <Filter
            key={label}
            label={label}
            onClick={() => handleClick({ filterOnClickFunc: onClick, newSelected: label })}
            selected={selected === label}
            {...restFilterProps}
          />
        ))
      }
    </StyledButtonGroup>
  );
};

FilterGroup.defaultProps = { selectedFilter: '' };

FilterGroup.propTypes = {
  filterList: T.arrayOf(T.object).isRequired,
  selectedFilter: T.string,
};

export default FilterGroup;
