import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { RefreshControl, StyleSheet, Text } from "react-native";
import { ScrollView, Separator, YStack } from "tamagui";
import DisplayCustomers from "../components/display-customers";
import RadioGroupOptions from "../components/radio-group-options";
import LoadingSpinner from "../components/spinner";
import { LIST_ZELLER_CUSTOMERS } from "../query-services/list-customers";

export default function CustomersScreen() {
  const [userType, setUserType] = useState<string>("Admin");
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

  if (loading) return <LoadingSpinner />;

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refetch} />
      }
    >
      <YStack
        width="100%"
        maxWidth={300}
        marginHorizontal={30}
        marginVertical={20}
      >
        <Text style={styles.title}>User Types</Text>
        <RadioGroupOptions userType={userType} setUserType={setUserType} />
        <Separator marginVertical={20} />
        <Text style={styles.title}>{userType} Users</Text>
        <DisplayCustomers customers={filteredCustomers} />
        <Separator marginVertical={1} />
      </YStack>
    </ScrollView>
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
});
