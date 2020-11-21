import React from 'react';
import T from 'prop-types';

import ConditionalRender from '../_base-ui/ConditionalRender';
import DisplayText from '../_base-ui/DisplayText';

import {
  ErrorMessage,
  InputContainer,
  StyledBaseTextField,
  StyledInputGroup,
  StyledLabel,
  StyledUnderlineTextField,
} from './styledComponents';

const BaseTextField = ({
  disabled,
  error,
  label,
  onChange,
  outline,
  placeholder,
  value,
  ...restProps
}) => {
  const variant = outline ? 'outlined' : 'standard';
  const placeholderLabel = !outline && !error && label;
  const ADAErrorLabel = `${label.replace(/\s/g, '')}-error-msg`;
  const inputProps = {
    disabled,
    error: !!error,
    InputLabelProps: {
      'aria-hidden': true,
      classes: {
        disabled: 'disabled',
        root: 'label',
        shrink: 'shrink',
      },
    },
    InputProps: {
      classes: {
        disabled: 'disabled',
        error: 'error',
        focused: 'focused',
        input: 'input',
        root: 'base-input',
      },
    },
    inputProps: {
      'aria-describedby': ADAErrorLabel,
      'aria-label': label,
    },
    label: placeholderLabel,
    onChange: (e) => onChange(e.target.value),
    placeholder,
    value,
    variant,
    ...restProps,
  };

  if (variant === 'outlined') {
    inputProps.InputProps.classes.notchedOutline = 'outline';
  } else {
    inputProps.InputProps.disableUnderline = true;
  }

  return (
    <StyledInputGroup>
      <ConditionalRender
        Component={DisplayText}
        propsToPassDown={{
          'aria-hidden': true,
          Component: StyledLabel,
          text: label,
        }}
        shouldRender={!!outline}
      />
      <InputContainer $outline={outline}>
        <ConditionalRender
          Component={DisplayText}
          propsToPassDown={{
            $outline: outline,
            'aria-hidden': true,
            Component: ErrorMessage,
            id: ADAErrorLabel,
            text: error,
          }}
          shouldRender={!!error}
        />
        <ConditionalRender
          Component={StyledBaseTextField}
          FallbackComponent={StyledUnderlineTextField}
          propsToPassDown={inputProps}
          shouldRender={!!outline}
        />
      </InputContainer>
    </StyledInputGroup>
  );
};

BaseTextField.defaultProps = {
  disabled: false,
  outline: true,
};

BaseTextField.propTypes = {
  disabled: T.bool,
  error: T.string,
  label: T.string.isRequired,
  onChange: T.func.isRequired,
  outline: T.bool,
  placeholder: T.string,
  value: T.string.isRequired,
};

export default BaseTextField;
