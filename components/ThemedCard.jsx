import { useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';
import React from 'react';

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      style={[
        {
          backgroundColor: theme.uiBackground,
          borderRadius: 5,
          padding: 20,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedCard;
