import React from "react";
import { Label, Square, XStack, YStack } from "tamagui";
import { type Customer } from "../utils/types";

const CustomerListItem = (props: { customer: Customer }) => (
  <XStack alignItems="center" space="$4" marginBottom="$6">
    <Square size="$4" backgroundColor={"$color.blue3Light"} radiused>
      <Label style={{ color: "#4169e1" }}>{props?.customer?.name?.split("")[0]}</Label>
    </Square>
    <YStack>
      <Label>{props?.customer?.name}</Label>
      <Label style={{ color: "grey" }}>{props?.customer?.role}</Label>
    </YStack>
  </XStack>
);

export default CustomerListItem;
