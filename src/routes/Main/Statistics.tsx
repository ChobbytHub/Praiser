import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DETAIL, STATISTICS } from '../../constants/path';
import { Detail, Statistics } from '../../components/pages';
import { HeaderLeft, headerStyle, headerTintColor } from '../Header';
import { COLOR } from '../../constants/theme';

const Stack = createStackNavigator();
const cardStyle = {
  backgroundColor: COLOR.MAIN,
};
const headerLeft = () => <HeaderLeft />;

function StatisticsNavigator() {
  return (
    <Stack.Navigator initialRouteName={STATISTICS} screenOptions={{ cardStyle, headerTintColor, headerStyle }}>
      <Stack.Screen
        name={STATISTICS}
        component={Statistics}
        options={{
          title: 'Statistics',
          headerLeft: headerLeft,
        }}
      />
      <Stack.Screen name={DETAIL} component={Detail} options={{ title: 'Detail' }} />
    </Stack.Navigator>
  );
}

export default StatisticsNavigator;
