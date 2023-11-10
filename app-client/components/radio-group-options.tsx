import { RadioGroup, YStack } from "tamagui";
import RadioGroupItemWithLabel from "../components/radio-group-item-with-label";
import React from "react";

interface RadioGroupOptions {
  userType: string;
  setUserType: (value: string) => void;
}

const RadioGroupOptions = ({ userType, setUserType }: RadioGroupOptions) => (
  <RadioGroup
    aria-labelledby="Select one item"
    defaultValue={userType}
    name="form"
    onValueChange={(value: string) => setUserType(value)}
  >
    <YStack width={300} alignItems="center" space="$2">
      <RadioGroupItemWithLabel size="$3" value="Admin" label="Admin" />
      <RadioGroupItemWithLabel size="$3" value="Manager" label="Manager" />
    </YStack>
  </RadioGroup>
);

export default RadioGroupOptions;
