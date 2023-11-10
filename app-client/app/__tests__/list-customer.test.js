import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { LIST_ZELLER_CUSTOMERS } from "../../query-services/list-customers";
import CustomersScreen from "../list-customer";

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

it.skip("renders a list of Zeller customers", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CustomersScreen />
    </MockedProvider>
  );

  await waitFor(() => {
    expect(screen.getByText("TestCustomer2")).toBeInTheDocument();
  });
});
