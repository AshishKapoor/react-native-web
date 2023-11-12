import React from "react";
import { create, type ReactTestRendererJSON } from "react-test-renderer";
import Home from "../index";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";

jest.mock("expo-router", () => ({ Drawer: { Screen: "Home" } }));

describe("Home screen", () => {
  const HomeComponent = (
    <TamaguiProvider config={config}>
      <Home />
    </TamaguiProvider>
  );

  it("renders home screen correctly", () => {
    const home = create(HomeComponent).toJSON() as ReactTestRendererJSON;
    const layout = home.children![0] as ReactTestRendererJSON;
    const screen = layout.children![0] as ReactTestRendererJSON;

    expect(home.type).toBe("View");
    expect(layout.type).toBe("Text");
    expect(layout?.props?.testID).toBe("empty-text");
    expect(screen).toBe("Empty Screen");
  });
});
