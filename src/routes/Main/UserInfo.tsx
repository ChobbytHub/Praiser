import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { USER_INFO } from '../../constants/path';
import { UserInfo } from '../../components/pages';
import { HeaderLeft, headerStyle, headerTintColor } from '../Header';
import { COLOR } from '../../constants/theme';

const Stack = createStackNavigator();
const cardStyle = {
  backgroundColor: COLOR.MAIN,
};

function UserInfoNavigator() {
  return (
    <Stack.Navigator initialRouteName={USER_INFO} screenOptions={{ cardStyle, headerTintColor, headerStyle }}>
      <Stack.Screen
        name={USER_INFO}
        component={UserInfo}
        options={{
          title: 'User info',
          headerLeft: () => <HeaderLeft />,
        }}
      />
    </Stack.Navigator>
  );
}

export default UserInfoNavigator;
