// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import AppointmentsScreen from './app/tabs/AppointmentsScreen';

// Stack navigator
const Stack = createStackNavigator();

// Linking config for web + mobile
const linking = {
  prefixes: ['http://localhost:19006', 'my-schedule://'],
  config: {
    screens: {
      Auth: '/', // URL for AuthScreen
      Appointments: '/appointments', // URL for AppointmentsScreen
    },
  },
};

export default function App() {
  // Track if user is logged in
  const [user, setUser] = useState(null);

  return (
    <PaperProvider>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          {!user ? (
            // AuthScreen shown if user not logged in
            <Stack.Screen name="Auth" options={{ headerShown: false }}>
              {props => <AuthScreen {...props} onLogin={setUser} />}
            </Stack.Screen>
          ) : (
            // AppointmentsScreen shown if user is logged in
            <Stack.Screen name="Appointments" options={{ headerShown: true }}>
              {props => <AppointmentsScreen {...props} user={user} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
