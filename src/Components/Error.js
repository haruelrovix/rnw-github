import React from 'react';
import { Text, View } from 'react-native';
import { compose } from 'redux';

import styles from './Shared.style';
import withBackHandler from '../HOCs/withBackHandler';
import { withRouter } from '../Utils/Routing';

const Error = ({ data, error }) => (
  <View style={styles.container}>
    <Text>{data.message || error.message || 'Something went wrong 🤔'}</Text>
  </View>
);

export default compose(
  withRouter,
  withBackHandler
)(Error);
