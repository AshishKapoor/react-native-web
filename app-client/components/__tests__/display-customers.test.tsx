import React from "react";
import renderer, { ReactTestRendererJSON, create } from "react-test-renderer";
import DisplayCustomers from "../display-customers";

import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";

const customers = [
  {
    id: 1,
    name: "Matthew Salmon",
    email: "test1@test.com",
    role: "Manager",
    __typename: "ZellerCustomer",
  },
  {
    id: 2,
    name: "Adman Muller",
    email: "test2@test.com",
    role: "Admin",
    __typename: "ZellerCustomer",
  },
  {
    id: 3,
    name: "Ashish Kapoor",
    email: "test3@test.com",
    role: "Manager",
    __typename: "ZellerCustomer",
  },
];

describe("Components/DisplayCustomers", () => {
  const DisplayCustomersComponent = (
    <TamaguiProvider config={config}>
      <DisplayCustomers customers={[customers]} />
    </TamaguiProvider>
  );

  it("renders correctly", () => {
    const displayCustomers = create(
      DisplayCustomersComponent
    ).toJSON() as ReactTestRendererJSON;
    expect(displayCustomers?.type!).toBe("View");
  });

  it("matches snapshot", () => {
    const tree = renderer
      .create(<DisplayCustomers customers={[customers]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
