import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './app/WelcomePage';
import selectLanguage from './app/setUp/selectLanguage';
import setLocation from './app/setUp/setLocation';
import enableNotifications from './app/setUp/enableNotifications';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Welcome' component={WelcomePage} />
        <Stack.Screen name='selectLanguage' component={selectLanguage} />
        <Stack.Screen name='setLocation' component={setLocation} />
        <Stack.Screen name='enableNotifications' component={enableNotifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;