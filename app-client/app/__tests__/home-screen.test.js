import React from "react";
import { render } from "@testing-library/react-native";
import Home from "..";

describe("Home Screen", () => {
  test("Renders with empty screen correctly", () => {
    const { getByTestId } = render(<Home />);
    // Using a testID to check if an element exists
    const componentElement = getByTestId("empty-text");
    // Assert that the component or element exists
    expect(componentElement).toBeTruthy();
  });
});
