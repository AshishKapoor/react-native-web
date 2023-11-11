import React from "react";
import { RadioGroup, View, YStack } from "tamagui";
import RadioGroupItemWithLabel from "../components/radio-group-item-with-label";
import {
  RoleType,
  type RadioGroupOptionsProps,
  type RadioItemProps,
} from "../utils/types";

const RadioGroupOptions = ({
  userType,
  setUserType,
}: RadioGroupOptionsProps) => {
  const isManager = userType === "Manager";
  const isAdmin = userType === "Admin";

  const RadioGroupItem = ({ role, selected }: RadioItemProps) => (
    <View
      backgroundColor={selected ? "$blue4Light" : undefined}
      padding="$2"
      borderRadius="$4"
    >
      <RadioGroupItemWithLabel size="$3" value={role} label={role} />
    </View>
  );

  return (
    <RadioGroup
      aria-labelledby="Select one item"
      defaultValue={userType}
      name="form"
      accentColor="#4169e1"
      onValueChange={(value: RoleType) => setUserType(value)}
    >
      <YStack width={300} alignItems="center" space="$2">
        <RadioGroupItem selected={isAdmin} role="Admin" />
        <RadioGroupItem selected={isManager} role="Manager" />
      </YStack>
    </RadioGroup>
  );
};

export default RadioGroupOptions;
