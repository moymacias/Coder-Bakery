import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OrdersScren from "../screens/OrdersScren"

const Stack = createNativeStackNavigator()

export default OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Orders"
        component={OrdersScren}
        options={{
          title: "Ordenes",
        }}
      />
    </Stack.Navigator>
  )
}
