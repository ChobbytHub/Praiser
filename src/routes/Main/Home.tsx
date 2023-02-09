import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DETAIL, HOME } from '../../constants/path';
import { Detail, Home } from '../../components/pages';
import { HeaderLeft, headerStyle, headerTintColor } from '../Header';
import { COLOR } from '../../constants/theme';

const Stack = createStackNavigator();
const cardStyle = {
  backgroundColor: COLOR.MAIN,
};

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName={HOME} screenOptions={{ cardStyle, headerTintColor, headerStyle }}>
      <Stack.Screen
        name={HOME}
        component={Home}
        options={{
          title: 'Home',
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <Stack.Screen name={DETAIL} component={Detail} options={{ title: 'Detail' }} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
