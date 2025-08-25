import { Redirect, Tabs } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function TabsLayout() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs screenOptions={{ headerShown: false }} />
  );
}
