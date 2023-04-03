import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Drawers, SyncScreens } from "../navigation/NavigationContainer";

export const useNavigationFromDrawer = () =>
  useNavigation<DrawerNavigationProp<Drawers>>();

export const useNavigatioFromSync = () =>
  useNavigation<NativeStackNavigationProp<SyncScreens>>();
