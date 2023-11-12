import React from "react";
import { ReactTestRendererJSON, create } from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import { LIST_ZELLER_CUSTOMERS } from "../../query-services/list-customers";
import CustomersScreen from "../list-customer";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";

const mocks = [
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS,
      variables: {
        filter: {
          role: {
            eq: "Admin",
          },
        },
      },
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [
            {
              id: "2",
              name: "TestCustomer2",
              role: "Admin",
              email: "test2@test.com",
            },
            {
              id: "4",
              name: "TestCustomer4",
              role: "Admin",
              email: "test4@test.com",
            },
          ],
        },
      },
    },
  },
];

describe("List Customer Screen", () => {
  const ListCustomersComponent = (
    <MockedProvider mocks={mocks} addTypename={false}>
      <TamaguiProvider config={config}>
        <CustomersScreen />
      </TamaguiProvider>
    </MockedProvider>
  );

  it("renders correctly", () => {
    const customerList = create(
      ListCustomersComponent
    ).toJSON() as ReactTestRendererJSON;
    expect(customerList?.type).toBe("View");
  });
});
