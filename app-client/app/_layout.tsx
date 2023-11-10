import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import React, { useEffect } from "react";
import DrawerNavigation from "../components/drawer-navigation";
// this provides some helpful reset styles to ensure a more consistent look
// only import this from your web app, not native
import "@tamagui/core/reset.css";

import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:9002/graphql",
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <TamaguiProvider config={config}>
        <DrawerNavigation>
          <DrawerNavigation.Screen
            name="index"
            options={{
              drawerLabel: "Home",
              title: "Home",
            }}
          />
          <DrawerNavigation.Screen
            name="list-customer"
            options={{
              drawerLabel: "List Customers",
              title: "Customers",
            }}
          />
        </DrawerNavigation>
      </TamaguiProvider>
    </ApolloProvider>
  );
}
