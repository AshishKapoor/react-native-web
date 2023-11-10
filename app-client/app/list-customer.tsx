import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { RadioGroup, YStack } from "tamagui";
import RadioGroupItemWithLabel from "../components/RadioGroupItemWithLabel";

export default function CustomersScreen() {
  const [userType, setUserType] = useState("Admin");
  console.log('userType: ', userType);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Types</Text>
      <RadioGroup
        aria-labelledby="Select one item"
        defaultValue="3"
        name="form"
        onValueChange={(value: string) => setUserType(value)}
      >
        <YStack width={300} alignItems="center" space="$2">
          <RadioGroupItemWithLabel size="$3" value="Admin" label="Admin" />
          <RadioGroupItemWithLabel size="$3" value="Manager" label="Manager" />
        </YStack>
      </RadioGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
