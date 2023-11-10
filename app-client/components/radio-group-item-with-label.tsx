import React from "react";
import { Label, RadioGroup, XStack } from "tamagui";
import { type RadioGroupItemWithLabelProps } from "../utils/types";

export default function RadioGroupItemWithLabel(
  props: RadioGroupItemWithLabelProps
) {
  const id = `radiogroup-${props.value}`;
  return (
    <XStack width={300} alignItems="center" space="$4">
      <RadioGroup.Item value={props.value} id={id} size={props.size}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label size={props.size} htmlFor={id}>
        {props.label}
      </Label>
    </XStack>
  );
}
