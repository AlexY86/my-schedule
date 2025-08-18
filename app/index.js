import { router } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { supabase } from '../supabase';

export default function AuthScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleSignUp = async () => {
  //   const { data: { user }, error } = await supabase.auth.signUp({ email, password });
  //   if (error) setError(error.message);
  //   else onLogin(user);
  // };

  const handleLogin = async () => {
  const { data: { user }, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    setError(error.message);
    return;
  }
  // Fetch user info from users table
  const { data: userInfo, error: userInfoError } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single();
  if (userInfoError) {
    setError(userInfoError.message);
    return;
  }
  onLogin({ ...user, ...userInfo });
};

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <Button onPress={handleLogin} mode="contained" style={{ marginTop: 10 }}>Login</Button>
      <Button onPress={() => router.push('/signup')} mode="outlined" style={{ marginTop: 10 }}>Sign Up</Button>
    </View>
  );
}