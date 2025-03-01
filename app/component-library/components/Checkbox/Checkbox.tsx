/* eslint-disable react/prop-types */

// Third party dependencies.
import React from 'react';
import { TouchableOpacity } from 'react-native';

// External dependencies.
import Icon from '../Icons/Icon';
import { useStyles } from '../../hooks';

// Internal dependencies.
import { CheckboxProps } from './Checkbox.types';
import styleSheet from './Checkbox.styles';
import {
  CHECKBOX_ICON_TESTID,
  DEFAULT_CHECKBOX_ICONSIZE,
  DEFAULT_CHECKBOX_ISCHECKED_ICONNAME,
  DEFAULT_CHECKBOX_ISINDETERMINATE_ICONNAME,
} from './Checkbox.constants';

const Checkbox = ({
  style,
  isChecked = false,
  isIndeterminate = false,
  isDisabled = false,
  isReadOnly = false,
  ...props
}: CheckboxProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { hitSlop, ...iconProps } = props;
  const { styles } = useStyles(styleSheet, {
    style,
    isChecked,
    isIndeterminate,
    isDisabled,
    isReadOnly,
  });

  let iconName;
  if (isIndeterminate) {
    iconName = DEFAULT_CHECKBOX_ISINDETERMINATE_ICONNAME;
  } else if (isChecked) {
    iconName = DEFAULT_CHECKBOX_ISCHECKED_ICONNAME;
  }

  return (
    <TouchableOpacity
      style={styles.base}
      {...props}
      disabled={isDisabled || isReadOnly}
    >
      {iconName && (
        <Icon
          testID={CHECKBOX_ICON_TESTID}
          name={iconName}
          size={DEFAULT_CHECKBOX_ICONSIZE}
          color={styles.icon.color}
          {...iconProps}
        />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
