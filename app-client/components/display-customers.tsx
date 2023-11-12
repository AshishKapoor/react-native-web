import React from "react";
import { View } from "react-native";
import { type Customer } from "../utils/types";
import CustomerListItem from "./customer-list-item";

export default function DisplayCustomers(props: { customers: [Customer] }) {
  const { customers } = props;

  return (
    <>
      {customers?.map((customer: Customer) => {
        console.log('customer: ', customer);
        return (
        
        <View key={customer.id}>
          <CustomerListItem customer={customer} />
        </View>
      )})}
    </>
  );
}
