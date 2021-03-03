import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ScreenA from './screen/ScreenA'
import ScreenB from './screen/ScreenB'
import ScreenC from './screen/ScreenC'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName ='body-outline' ;
              size = focused ? 40 : 30;
            } else if (route.name === 'Food') {
              iconName = 'fast-food-outline';
              size = focused ? 40 : 30;
            } else if (route.name === 'Meal') {
              iconName = 'calculator-outline';
              size = focused ? 40 : 30;
            } else if (route.name === 'Diary') {
              iconName = 'calendar-outline';
              size = focused ? 40 : 30;
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            height: 60,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: "#2c6fb2"          
          },
          activeTintColor: "white",
          inactiveTintColor: "white",
        }}
      >
        <Tab.Screen name="Home" component={ScreenA} options={{
                    headerTitle: "Thông tin cá nhân",
                    // headerStyle: { backgroundColor: "#2c6fb2" },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        textAlign: 'center',
                        alignItems: 'center'
                    },
                }}/>
        <Tab.Screen name="Food" component={ScreenB} />
        <Tab.Screen name="Meal" component={ScreenC} options={{
                    headerTitle: "Tính calo",
                    // headerStyle: { backgroundColor: "#2c6fb2" },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        textAlign: 'center',
                        alignItems: 'center'
                    },
                }}/>
        <Tab.Screen name="Diary" component={ScreenA} options={{
                    headerTitle: "Nhật ký",
                    // headerStyle: { backgroundColor: "#2c6fb2" },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        textAlign: 'center',
                        alignItems: 'center'
                    },
                }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

