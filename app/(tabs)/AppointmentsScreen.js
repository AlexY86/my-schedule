import { useContext, useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { ActivityIndicator, Card, Paragraph, Surface, Title } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';
import { getApiUrl } from '../../utils/getApiUrl';


export default function AppointmentsScreen() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(getApiUrl());
        const data = await response.json();
        setAppointments(data);
      } catch (err) {
        setError('Failed to load appointments');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  if (!user) {
    return <Text>Please log in to view appointments.</Text>;
  }

  if (loading) {
    return <ActivityIndicator animating={true} style={{ marginTop: 40 }} />;
  }

  return (
    <Surface style={{ flex: 1, padding: 16 }}>
      <Title style={{ marginBottom: 16 }}>Appointments</Title>
      {error && <Text style={{ color: 'red', marginBottom: 16 }}>{error}</Text>}
      
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 12 }}>
            <Card.Content>
              <Title>{item.client}</Title>
              <Paragraph>Stylist: {item.stylist}</Paragraph>
              <Paragraph>Time: {item.time}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </Surface>
  );
}
