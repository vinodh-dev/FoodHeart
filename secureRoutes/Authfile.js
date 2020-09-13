import React  from 'react';
import Login from '../Screens/Login/Login';
import ChangePassword from '../Screens/ChangePassword/Changepassword';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Authfile({navigation}) {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitleStyle: {
              fontFamily: 'Poppins-Medium',
              fontSize: 24,
            },
            headerStyle: {
              height: 65,
              elevation: 0, //for android
              shadowOpacity: 0, //for ios,
              borderBottomWidth: 1,
              borderColor: '#F1F1F1',
            },
            
          }}></Stack.Screen>

        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            headerStyle: {
              backgroundColor: '#EC456A',
              elevation: 0, //for android
              shadowOpacity: 0, //for ios,
              borderBottomWidth: 0,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff',
              fontSize: 25,
              fontFamily: 'Poppins-Medium',
            },
            headerTintColor: '#fff',
          }}></Stack.Screen>

      </Stack.Navigator>
    );
  }

  export default Authfile