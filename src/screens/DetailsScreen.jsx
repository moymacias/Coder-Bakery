import { Button, StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react"

const DetailsScreen = ({ navigation, route }) => {
  useEffect(() => {
    console.log(route.params)
  }, [])

  return (
    <View style={styles.container}>
      <Text>{route.params.name}</Text>
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
