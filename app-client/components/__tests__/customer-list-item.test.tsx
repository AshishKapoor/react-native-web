import React from "react";
import renderer, { ReactTestRendererJSON, create } from "react-test-renderer";
import CustomerListItem from "../customer-list-item";

import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";

const customer = {
  __typename: "ZellerCustomer",
  id: 8,
  name: "Harry Potter",
  role: "Admin",
  email: "test8@test.com",
};

describe("Components/CustomerListItem", () => {
  const CustomerListItemComponent = (
    <TamaguiProvider config={config}>
      <CustomerListItem customer={customer} />
    </TamaguiProvider>
  );

  it("renders correctly", () => {
    const customerListItem = create(
      CustomerListItemComponent
    ).toJSON() as ReactTestRendererJSON;
    expect(customerListItem?.type).toBe("View");
  });

  it("matches snapshot", () => {
    const tree = renderer
      .create(<CustomerListItem customer={customer} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
