import { Stack } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ 
        headerShown: true,
        title: 'CyLife Connect',
      }} />
    </Stack>
  );
}

