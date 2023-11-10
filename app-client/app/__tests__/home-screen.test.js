import React from "react";
import { render } from "@testing-library/react-native";

import App from "../index";

it("renders the app initial home screen", () => {
  render(<App />);
});
