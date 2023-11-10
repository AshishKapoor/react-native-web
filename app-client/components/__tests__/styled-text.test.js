import "react-native";
import React from "react";
import { InterText } from "../styled-text";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<InterText>Snapshot test!</InterText>).toJSON();

  expect(tree).toMatchSnapshot();
});
