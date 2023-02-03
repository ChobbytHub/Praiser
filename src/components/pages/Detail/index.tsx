import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  );
}
