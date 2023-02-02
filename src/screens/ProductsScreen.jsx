import { Button, StyleSheet, Text, View, FlatList } from "react-native"
import React, { useEffect } from "react"
import ProductsItem from "../components/ProductsItem"
import { PRODUCTS } from "../data/products"

const ProductsScreen = ({ navigation, route }) => {
  const newProducts = PRODUCTS.filter(
    product => product.category === route.params.categoryId
  )

  const handleSelectedProduct = item => {
    navigation.navigate("Details", {
      name: item.name,
    })
  }

  const renderProductItem = ({ item }) => (
    <ProductsItem item={item} onSelected={handleSelectedProduct} />
  )

  return (
    <FlatList
      data={newProducts}
      renderItem={renderProductItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productsContainer: {
    height: 150,
    width: 150,
  },
})
