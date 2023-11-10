import { gql } from "@apollo/client";
// import { gql } from "../__generated__/gql"; // It is throwing unknown document error

export const LIST_ZELLER_CUSTOMERS = gql(/* GraphQL */ `
  query ListZellerCustomers($filter: TableZellerCustomerFilterInput) {
    listZellerCustomers(filter: $filter) {
      items {
        id
        name
        role
        email
      }
    }
  }
`);
