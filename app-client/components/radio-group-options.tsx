import React from "react";
import { RadioGroup, View, YStack } from "tamagui";
import RadioGroupItemWithLabel from "../components/radio-group-item-with-label";
import { RadioGroupOptions } from "../utils/types";

const RadioGroupOptions = ({ userType, setUserType }: RadioGroupOptions) => {
  const isManager = userType === "Manager";
  const isAdmin = userType === "Admin";
  return (
    <RadioGroup
      aria-labelledby="Select one item"
      defaultValue={userType}
      name="form"
      accentColor="#4169e1"
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
