import { createDrawerNavigator } from "@react-navigation/drawer";
import { withLayoutContext } from "expo-router";

const { Navigator } = createDrawerNavigator();

const DrawerNavigation = withLayoutContext(Navigator);

export default DrawerNavigation;
