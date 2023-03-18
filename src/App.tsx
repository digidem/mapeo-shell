import { registerRootComponent } from "expo";
import { defineMessages } from "react-intl";

const m = defineMessages({
  firstMessage: {
    id: "app.firstMessage",
    defaultMessage: "This is a test",
    description: "Used as a tester",
  },
});

import { NavigationContainer } from "./navigation/NavigationContainer";
import "react-native-gesture-handler";

export default function App() {
  return <NavigationContainer />;
}

registerRootComponent(App);
