import { Redirect, Stack } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function AuthLayout() {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Redirect href="/AppointmentsScreen" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
