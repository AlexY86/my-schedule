import { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function AddAppointmentScreen({ navigation }) {
  const [client, setClient] = useState('');
  const [time, setTime] = useState('');

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        label="Client Name"
        value={client}
        onChangeText={setClient}
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Time"
        value={time}
        onChangeText={setTime}
        style={{ marginBottom: 16 }}
      />
      <Button
        mode="contained"
        onPress={() => {
          // Save logic goes here
          navigation.goBack();
        }}
      >
        Save Appointment
      </Button>
    </View>
  );
}