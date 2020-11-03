import { NavigationContainer, DefaultTheme, DarkTheme, useRoute } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Image } from 'react-native';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactScreen from '../screens/ContactScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  
  return (
    <Stack.Navigator screenOptions={
      {
        headerStyle:{
          backgroundColor: "#151212",
        
        },
        headerTintColor: "#b30404",
        headerTitleAlign: "center"
      }
    }>
      <Stack.Screen name="Root" component={
        BottomTabNavigator
        }
        options={
          {
            title: "Xenon"
          
          }
        }
         
      />
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen}
        options= {({route})=> (
          {title: route.params.name}
        )} 
      />
      <Stack.Screen 
        name="Contact" 
        component={ContactScreen}
        options= {{title:"Contact"}}
      />
    </Stack.Navigator>
  );
}
