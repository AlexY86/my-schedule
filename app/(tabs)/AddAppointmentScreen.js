import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { View } from 'react-native';
import { Button, Snackbar, TextInput } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';
import { getApiUrl } from '../../utils/getApiUrl';

export default function AddAppointmentScreen() {
  const [client, setClient] = useState('');
  const [time, setTime] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const { user } = useContext(AuthContext);
  const navigation = useNavigation(); // ✅ Fix

  const handleSave = async () => {
    try {
      await fetch(getApiUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client,
          time,
          stylist: user?.name || 'Unknown',
        }),
      });

      setSnackbarVisible(true);

      // Delay before navigating back
      setTimeout(() => {
        setSnackbarVisible(false);
        navigation.goBack(); // ✅ Works now
      }, 1500);

    } catch (err) {
      console.error('Failed to save appointment:', err);
    }
  };

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
      <Button mode="contained" onPress={handleSave}>
        Save Appointment
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={1000}
      >
        Appointment added!
      </Snackbar>
    </View>
  );
}
