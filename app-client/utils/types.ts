import { SizeTokens } from "tamagui";

export interface Customer {
  name: string;
  id: number;
  role: string;
  email: string;
  __typename: string;
}

export interface RadioGroupItemWithLabelProps {
  size: SizeTokens;
  value: string;
  label: string;
}

export interface RadioGroupOptionsProps {
  userType: RoleType;
  setUserType: (value: RoleType) => void;
}

export type RoleType = "Manager" | "Admin" | string;
