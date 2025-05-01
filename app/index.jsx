import React from 'react';
import { Link } from 'expo-router';
// themed components
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';
import ThemedLogo from '../components/ThemedLogo';

const Home = () => {
  return (
    <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={{ fontWeight: 'bold', fontSize: 18 }} title={true}>
        The Number 1
      </ThemedText>

      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />

      <Link href="/login" style={{ marginVertical: 10, borderBottomWidth: 1 }}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link href="/register" style={{ marginVertical: 10, borderBottomWidth: 1 }}>
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link href="/profile" style={{ marginVertical: 10, borderBottomWidth: 1 }}>
        <ThemedText>Profile Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;
