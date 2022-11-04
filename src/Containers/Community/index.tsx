import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CreateContainer from "./CreateContainer"


const Stack = createStackNavigator();

const CommunityStack = () => {

    return (
          <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={CreateContainer}
        options={{
          title: 'Awesome app',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={CreateContainer}
        options={{
          title: 'My profile',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={CreateContainer}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>

    )
}



export default CommunityStack;

