import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { UserProvider } from '../contexts/UserContext';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserProvider>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        {/* Ensure the default route points to index */}
        <Stack.Screen name="index" options={{ title: 'Home' }} />

        {/* Ensure (auth) is available but not the default */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        {/* Ensure (dashboard) is available but not the default */}
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
};

export default RootLayout;
