import React from 'react';
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

const Create = () => {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemedText
        title={true}
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center',
        }}
      >
        Add a New Book
      </ThemedText>
      <Spacer />
    </ThemedView>
  );
};

export default Create;
