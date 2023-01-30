import { Button, StyleSheet, Text, View } from "react-native"
import React from "react"

const ProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ProductsScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
        color="red"
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
