import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { RadioGroup, YStack } from "tamagui";
import RadioGroupItemWithLabel from "../components/RadioGroupItemWithLabel";
import { useQuery, gql } from "@apollo/client";

export default function CustomersScreen() {
  const [userType, setUserType] = useState("Admin");
  const LIST_ZELLER_CUSTOMERS = gql`
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
  `;
  const { data, loading, refetch } = useQuery(LIST_ZELLER_CUSTOMERS, {
    variables: {
      filter: {
        role: {
          eq: "Manager",
        },
      },
    },
  });
  const filteredCustomers = data?.listZellerCustomers?.items

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Types</Text>
      <RadioGroup
        aria-labelledby="Select one item"
        defaultValue="3"
        name="form"
        onValueChange={(value: string) => setUserType(value)}
      >
        <YStack width={300} alignItems="center" space="$2">
          <RadioGroupItemWithLabel size="$3" value="Admin" label="Admin" />
          <RadioGroupItemWithLabel size="$3" value="Manager" label="Manager" />
        </YStack>
      </RadioGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
