// import { router } from 'expo-router';
// import { useState } from 'react';
// import { View } from 'react-native';
// import { Button, Text, TextInput } from 'react-native-paper';

// export default function LoginScreen() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Add authentication logic here
//     // For now, just navigate to the home tab
//     router.replace('/tabs');
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
//       <Text variant="titleLarge" style={{ marginBottom: 24 }}>Login</Text>
//       <TextInput
//         label="Username"
//         value={username}
//         onChangeText={setUsername}
//         style={{ marginBottom: 16 }}
//       />
//       <TextInput
//         label="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={{ marginBottom: 16 }}
//       />
//       <Button mode="contained" onPress={handleLogin}>
//         Log In
//       </Button>
//     </View>
//   );
// }