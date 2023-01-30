import { Button, StyleSheet, Text, View } from "react-native"
import React from "react"

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <Button title="Go to categories" onPress={() => navigation.popToTop()} />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
