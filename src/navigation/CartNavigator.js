import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CartScreen from "../screens/CartScreen"

const Stack = createNativeStackNavigator()

export default CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Carrito",
        }}
      />
    </Stack.Navigator>
  )
}
