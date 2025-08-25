import { router } from 'expo-router';
import { useContext, useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';
import { supabase } from '../../supabase';

export default function LoginScreen() {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const { data: { user }, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return setError(error.message);
    if (!user) return setError('Login failed');

    let { data: userInfo, error: userInfoError } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();

    if (userInfoError) return setError(userInfoError.message);

    if (!userInfo) {
      const { data: newUser, error: insertError } = await supabase
        .from('users')
        .insert([{ id: user.id, email: user.email }])
        .select()
        .maybeSingle();
      if (insertError) return setError(insertError.message);
      userInfo = newUser;
    }

    setUser({ ...user, ...userInfo });
    router.replace('/home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <Button mode="contained" onPress={handleLogin} style={{ marginTop: 10 }}>Login</Button>
      <Button mode="outlined" onPress={() => router.push('/signup')} style={{ marginTop: 10 }}>Sign Up</Button>
    </View>
  );
}
