import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './Shared.style';

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="small" color="#87ceeb" />
  </View>
);

export default Loader;
