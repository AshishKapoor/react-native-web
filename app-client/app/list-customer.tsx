import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { RadioGroup, Separator, YStack } from "tamagui";
import RadioGroupItemWithLabel from "../components/radio-group-item-with-label";
import { useQuery, gql } from "@apollo/client";
import DisplayCustomers from "../components/display-customers";
import { LIST_ZELLER_CUSTOMERS } from "../query-services/list-customers";

export default function CustomersScreen() {
  const [userType, setUserType] = useState("Admin");

  const { data, loading, refetch } = useQuery(LIST_ZELLER_CUSTOMERS, {
    variables: {
      filter: {
        role: {
          eq: userType,
        },
      },
    },
  });

  const filteredCustomers = data?.listZellerCustomers?.items;

  if (loading) return <Text>Loading</Text>;

  return (
    <View style={styles.container}>
      <YStack
        width="100%"
        maxWidth={300}
        marginHorizontal={30}
        marginVertical={20}
      >
        <Text style={styles.title}>User Types</Text>
        <RadioGroup
          aria-labelledby="Select one item"
          defaultValue={userType}
          name="form"
          onValueChange={(value: string) => setUserType(value)}
        >
          <YStack width={300} alignItems="center" space="$2">
            <RadioGroupItemWithLabel size="$3" value="Admin" label="Admin" />
            <RadioGroupItemWithLabel
              size="$3"
              value="Manager"
              label="Manager"
            />
          </YStack>
        </RadioGroup>
        <Separator marginVertical={20} />
        <Text style={styles.title}>{userType} Types</Text>
        <DisplayCustomers customers={filteredCustomers} />
        <Separator marginVertical={1} />
      </YStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
