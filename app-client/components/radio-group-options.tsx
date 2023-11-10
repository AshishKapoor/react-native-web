import { RadioGroup, View, YStack } from "tamagui";
import RadioGroupItemWithLabel from "../components/radio-group-item-with-label";
import React from "react";
import { Platform } from "react-native";

interface RadioGroupOptions {
  userType: string;
  setUserType: (value: string) => void;
}

const RadioGroupOptions = ({ userType, setUserType }: RadioGroupOptions) => {
  const isManager = Platform.OS === "ios" && userType === "Manager";
  const isAdmin = Platform.OS === "ios" && userType === "Admin";
  return (
    <RadioGroup
      aria-labelledby="Select one item"
      defaultValue={userType}
      name="form"
      accentColor="#4169e1"
      native
      onValueChange={(value: string) => setUserType(value)}
    >
      <YStack width={300} alignItems="center" space="$2">
        <View
          backgroundColor={isAdmin ? "$blue4Light" : undefined}
          padding="$2"
          borderRadius="$4"
        >
          <RadioGroupItemWithLabel size="$3" value="Admin" label="Admin" />
        </View>
        <View
          backgroundColor={isManager ? "$blue4Light" : undefined}
          padding="$2"
          borderRadius="$4"
        >
          <RadioGroupItemWithLabel size="$3" value="Manager" label="Manager" />
        </View>
      </YStack>
    </RadioGroup>
  );
};

export default RadioGroupOptions;
