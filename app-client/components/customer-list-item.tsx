import React from "react";
import { Text, Square, XStack, YStack } from "tamagui";
import { type Customer } from "../utils/types";

export default function CustomerListItem(props: { customer: Customer }) {
  return (
    <XStack alignItems="center" space="$4" marginBottom="$6">
      <Square size="$4" backgroundColor={"$color.blue3Light"} radiused>
        <Text>{props?.customer?.name?.split("")[0]}</Text>
      </Square>
      <YStack>
        <Text>{props?.customer?.name}</Text>
        <Text style={{ color: "grey" }}>{props?.customer?.role}</Text>
      </YStack>
    </XStack>
  );
}
