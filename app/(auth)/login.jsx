import React, { useState } from 'react';
import { Colors } from '../../constants/Colors';
import { Pressable, Text } from 'react-native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useUser } from '../../hooks/useUser';
import { Link } from 'expo-router';
// themed components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemedButton';
import Spacer from '../../components/Spacer';
import ThemedTextInput from "../../components/ThemedTextInput";

const Login = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const { login } = useUser()

  const handleSubmit = async () => {
    setError(null)

    try {
      await login(email, password)
    } catch (error) {
      setError(error.message)
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Spacer />
      <ThemedText title={true} style={{ textAlign: 'center', fontSize: 18, marginBottom: 30 }}>
        Login to Your Account
      </ThemedText>

      <ThemedTextInput 
      style={{ width: '80%', marginBottom: 20 }}
      placeholder="Email" 
      keyboardType="email-address"
      onChangeText={setEmail}
      value={email}
      />

      <ThemedTextInput 
      style={{ width: '80%', marginBottom: 20 }}
      placeholder="Password" 
      onChangeText={setPassword}
      value={password}
      secureTextEntry
      />

    <ThemedButton 
    onPress={handleSubmit} 
    style={{ width: '80%', alignItems: 'center' }}
    >
    <Text style={{ color: '#f2f2f2' }}>Login</Text>
    </ThemedButton>

    <Spacer />
    {error && <Text style={{ 
      color: Colors.warning,
      padding: 10,
      backgroundColor: '#f5c1c8',
      borderColor: Colors.warning,
      borderWidth: 1,
      borderRadius: 6,
      marginHorizontal: 10,
      }}>{error}</Text>}

      <Spacer height={100} />
      <Link href="/register">
        <ThemedText style={{ textAlign: 'center' }}>
          Click here to Register
        </ThemedText>
      </Link>
    </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
