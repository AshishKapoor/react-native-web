import React from "react";
import { View } from "react-native";
import CustomerListItem from "./customer-list-item";
import { type Customer } from "../utils/types";

export default function DisplayCustomers(props: { customers: [Customer] }) {
  const { customers } = props;

  return (
    <>
      {customers?.map((customer: Customer) => (
        <View key={customer.id}>
          <CustomerListItem customer={customer} />
        </View>
      ))}
    </>
  );
}
