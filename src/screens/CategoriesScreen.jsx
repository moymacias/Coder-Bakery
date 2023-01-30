import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
