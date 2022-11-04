import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StartupContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import { NativeBaseProvider } from "native-base"
import { LoginContainer,BindPhoneContainer} from "@/Containers/Users"

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
      <NativeBaseProvider style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
           <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen name="Login" component={LoginContainer} />
          <Stack.Screen name="Startup" component={StartupContainer} />
          <Stack.Screen name="BindPhone" component={BindPhoneContainer} />
       
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default ApplicationNavigator
