import React from "react";
import { create } from "react-test-renderer";
import LoadingSpinner from "../spinner";

import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";

jest.mock("expo-router", () => ({ Link: "Link" }));

describe("Components/Spinner", () => {
  const SpinnerComponent = (
    <TamaguiProvider config={config}>
      <LoadingSpinner />
    </TamaguiProvider>
  );

  it("renders correctly", () => {
    const spinner = create(SpinnerComponent).toJSON();
    const activityIndicator = spinner.children[0];
    expect(spinner.type).toBe("View");
    expect(activityIndicator?.children[0].type).toBe("ActivityIndicator");
    expect(activityIndicator?.props.testID).toBe("activity-indicator");
    expect(activityIndicator?.children[0].props.size).toBe("large");
  });
});
