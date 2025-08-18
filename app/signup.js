import { router } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { supabase } from '../supabase';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
  const { data: { user }, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    setError(error.message);
    return;
  }
  // Insert into users table
  const { error: dbError } = await supabase
    .from('users')
    .insert([
      { id: user.id, email, expo_token: null }
    ]);
  if (dbError) {
    setError(dbError.message);
    return;
  }
  router.replace('/'); // Go to login or home
};

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <Button onPress={handleSignUp} mode="contained" style={{ marginTop: 10 }}>Sign Up</Button>
      <Button onPress={() => router.replace('/')} mode="outlined" style={{ marginTop: 10 }}>Back to Login</Button>
    </View>
  );
}