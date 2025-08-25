// app/splash.js
import { useRouter } from 'expo-router';
import { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';

export default function SplashScreen() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate based on login state
      if (user) {
        router.replace('/tabs/home'); // Or your authenticated route
      } else {
        router.replace('/login');
      }
    }, 2000); // Wait 2 seconds for splash screen effect

    return () => clearTimeout(timer);
  }, [user]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 16 }}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
