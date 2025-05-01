import React from 'react';
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

const Books = () => {
  return (
    <ThemedView
    safe={true}
    style={{
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  }}
>
      <Spacer />
      <ThemedText
        title={true}
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center',
        }}
      >
        Your Reading List
      </ThemedText>
    </ThemedView>
  );
};

export default Books;
