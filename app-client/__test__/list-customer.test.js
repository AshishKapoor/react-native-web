import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { LIST_ZELLER_CUSTOMERS } from "../query-services/list-customers";
import CustomersScreen from "../app/list-customer";

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

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CustomersScreen />
    </MockedProvider>
  );
});
