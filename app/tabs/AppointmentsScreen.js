// screens/AppointmentsScreen.js
import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { ActivityIndicator, Card, Text } from 'react-native-paper';
import { supabase } from '../../supabase';
export default function AppointmentsScreen({ user }) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('client_id', user.id);

    if (!error) setAppointments(data);
    setLoading(false);
  };

  if (loading) return <ActivityIndicator style={{ marginTop: 50 }} />;

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card style={{ marginVertical: 5 }}>
            <Card.Content>
              <Text>Stylist: {item.stylist}</Text>
              <Text>Time: {item.time}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}
