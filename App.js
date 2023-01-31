import { useFonts } from "expo-font"
import ShopNavigator from "./src/navigation/ShopNavigator"

export default function App() {
  const [fontsLoaded] = useFonts({
    DancingSCript: require("./src/assets/fonts/DancingScript-Regular.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return <ShopNavigator />
}
