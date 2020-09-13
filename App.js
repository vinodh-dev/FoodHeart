import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View} from 'react-native';
import MyProfile from './Screens/Profile/MyProfile';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Orders from './Screens/Orders/Orders';
import OrderSummary from './Screens/Orders/OrderSummary';
import {DrawerContent} from './Screens/DrawerContent/DrawerContent';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import History from './Screens/History/History';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import Authfile from './secureRoutes/Authfile';
import HistorySummary from './Screens/History/HistorySummary'


const Stack = createStackNavigator();



function Homepage({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FoodHeart Delivery"
        component={HomeTabs}
        options={{
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            fontSize: 24,
          },
          headerStyle: {
            height: 70,
            elevation: 0, //for android
            shadowOpacity: 0, //for ios,
            borderBottomWidth: 1,
            borderColor: '#F1F1F1',
          },

          headerLeft: () => (
            <Feather
              name="menu"
              color="#000"
              style={{paddingLeft: 20}}
              size={25}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}></Stack.Screen>



      <Stack.Screen name="Orders" component={Orders}></Stack.Screen>

      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
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

      <Stack.Screen name="History" component={History}></Stack.Screen>
      
      <Stack.Screen name="HistorySummary" component={HistorySummary}
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
        }}
      
      ></Stack.Screen>

    </Stack.Navigator>
  );
}



function ProfileStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Profile"
        component={MyProfile}
        options={{
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            fontSize: 25,
            textAlign: 'center',
            position: 'relative',
            left: -15,
            top: 4,
          },
          headerStyle: {
            height: 65,
            elevation: 0, //for android
            shadowOpacity: 0, //for ios,
          },

          headerLeft: () => (
            <MaterialIcons
              name="keyboard-arrow-left"
              color="#000"
              style={{paddingLeft: 20}}
              size={30}
              onPress={() => navigation.navigate('Homepage')}
            />
          ),
        }}></Stack.Screen>
    </Stack.Navigator>
  );
}













const Tab = createMaterialTopTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        labelStyle: {
          fontSize: 19,
          fontFamily: 'Poppins-Medium',
          textTransform: 'none',
        },
        indicatorStyle: {
          borderBottomColor: '#EE7444',
          borderBottomWidth: 2,
        },
        style: {
          padding: 7,
        },
        tabStyle: {
          padding: 0,
        },

        /// style: { backgroundColor: 'powderblue' },
      }}>
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  const loginState = useSelector((state) => state.loginDetails);
  const {errorb } = loginState;

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <NavigationContainer>
        {errorb === '' || errorb === 'Invalid driver_id or password.' ? 
                   <Authfile /> :<Drawer.Navigator
          initialRouteName="Homepage"
          drawerContent={(props) => <DrawerContent {...props} />}
          drawerStyle={{width: 320}}>
          <Drawer.Screen name="Homepage" component={Homepage} />
          <Drawer.Screen name="OrderSummary" component={OrderSummary} />
          <Drawer.Screen name="MyProfile" component={ProfileStack} />
          <Drawer.Screen name="HistorySummary" component={HistorySummary} />

        </Drawer.Navigator>
  
        
}
      </NavigationContainer>
    </View>
  );
}
