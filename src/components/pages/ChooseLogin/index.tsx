import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { SIGN_IN, SIGN_UP } from '../../../constants/path';
import { StackNavigationProp } from '@react-navigation/stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Home() {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <Text>Choose Login</Text>
      <TouchableOpacity onPress={() => navigate(SIGN_IN)}>
        <Text>go to Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(SIGN_UP)}>
        <Text>go to Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
