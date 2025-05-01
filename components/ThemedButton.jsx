import { Pressable } from 'react-native';
import { Colors } from '../constants/Colors';

function ThemedButton({ style, ...props }) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: Colors.primary,
          padding: 18,
          borderRadius: 6,
          marginVertical: 10,
        },
        pressed && { opacity: 0.5 },
        style,
      ]}
      {...props}
    />
  );
}

export default ThemedButton;
