import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{ activeTintColor: "#b30404" }}
      >
      <BottomTab.Screen
        name="Chats"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-chatbubbles" size={30} color= {color} />,
        }}
      />
      <BottomTab.Screen
        name="Contacts"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-contacts" size={30} color={color}/>,
        }}
      />

    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();
function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

