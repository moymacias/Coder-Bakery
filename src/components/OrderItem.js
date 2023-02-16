import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

const formatDay = time => {
  const date = new Date(time)
  return date.toLocaleDateString()
}

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.order}>
      <View>
        <Text style={styles.date}>{formatDay(item.date)}</Text>
        <Text style={styles.total}>total</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => onDelete()}>
          <Ionicons name="md-trash" color={"red"} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  order: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
  },
  date: {
    fontSize: 18,
  },
  total: {
    fontSize: 18,
  },
})
