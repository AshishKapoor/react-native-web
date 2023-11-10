import { gql } from "@apollo/client";
// import { gql } from "../gen/__generated__/gql";

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
