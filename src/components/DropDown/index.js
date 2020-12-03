import React, { useRef } from 'react';
import T from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import iconDictionary from '../../utils/iconDictionary';
import ConditionalRender from '../_base-ui/ConditionalRender';

import { StyledMenuItem, StyledSelect } from './styledComponents';
import { useMenuStyles } from './helpers';

const CheckMarkIcon = iconDictionary('checkMark', { style: 'checkMark' });

const ArrowDownIcon = (props) =>
  iconDictionary('arrowDown', { style: 'arrowDownDropDown', ...props });

const OutlinedInputElement = (
  <OutlinedInput
    classes={{ focused: 'focused', notchedOutline: 'notchedOutline' }}
  />
);

const DropDown = ({ labelId, menuItems, onChange, selected, ...restProps }) => {
  const { current: selectId } = useRef(uniqueId('dropdown_'));

  const menuStyles = useMenuStyles();

  const menuProps = {
    anchorOrigin: {
      horizontal: 'center',
      vertical: 'bottom',
    },
    classes: { list: menuStyles.list },
    getContentAnchorEl: null,
    PaperProps: {
      elevation: 0,
      square: true,
    },
    transformOrigin: {
      horizontal: 'center',
      vertical: 1,
    },
  };

  return (
    <StyledSelect
      classes={{ iconOpen: 'select-icon-open', select: 'select' }}
      IconComponent={ArrowDownIcon}
      id={selectId}
      input={OutlinedInputElement}
      labelId={labelId || null}
      MenuProps={menuProps}
      onChange={(e) => onChange(e.target.value)}
      SelectDisplayProps={{ 'aria-expanded': false }}
      value={selected}
      variant="outlined"
      {...restProps}
    >
      {menuItems.map(({ display, value }) => (
        <StyledMenuItem key={value} value={value}>
          {display}
          <ConditionalRender
            Component={CheckMarkIcon}
            shouldRender={value === selected}
          />
        </StyledMenuItem>
      ))}
    </StyledSelect>
  );
};

DropDown.propTypes = {
  labelId: T.string,
  menuItems: T.arrayOf(
    T.shape({
      display: T.string.isRequired,
      value: T.oneOfType([T.string, T.number]).isRequired,
    }),
  ).isRequired,
  onChange: T.func.isRequired,
  selected: T.oneOfType([T.string, T.number]).isRequired,
};

export default DropDown;
