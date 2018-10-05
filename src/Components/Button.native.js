import React from 'react';
import { Button as RNEButton } from 'react-native-elements';

import styles from './Shared.style';

const Button = (props) => {
  const { button } = styles;

  return (
    <RNEButton
      buttonStyle={button.buttonStyle}
      containerStyle={button.containerStyle}
      icon={props.children}
      iconRight
      onPress={props.onPress}
      title={props.title}
    />
  );
};

export default Button;
