import { useContext } from 'react';
import { ScrollView } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { AuthContext } from '../../context/AuthContext';

export default function HomeScreen() {
  const { user } = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Title>Welcome{user?.email ? `, ${user.email}` : ''}!</Title>

      <Card style={{ marginTop: 20 }}>
        <Card.Content>
          <Title>Today’s Appointments</Title>
          <Paragraph>You have 3 appointments scheduled today.</Paragraph>
        </Card.Content>
      </Card>

      <Card style={{ marginTop: 20 }}>
        <Card.Content>
          <Title>Notifications</Title>
          <Paragraph>No new notifications.</Paragraph>
        </Card.Content>
      </Card>

      <Card style={{ marginTop: 20 }}>
        <Card.Content>
          <Title>Quick Actions</Title>
          <Paragraph>Tap here to create a new appointment or view calendar.</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
