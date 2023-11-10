import React from "react";
import { Spinner, YStack } from "tamagui";

export default function LoadingSpinner() {
  return (
    <YStack padding="$3" space="$4" alignItems="center">
      <Spinner size="large" color="$blue10" />
    </YStack>
  );
}
