import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => (
  <View style={styles.container}>
    <Text testID="empty-text" style={styles.title}>
      Empty Screen
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;
