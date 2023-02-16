import React, { useEffect } from "react"
import { StyleSheet, FlatList } from "react-native"
import ProductsItem from "../components/ProductsItem"

import { useSelector, useDispatch } from "react-redux"
import {
  selectedProduct,
  filteredProduct,
} from "../store/actions/products.action"

const ProductsScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const categoryProducts = useSelector(state => state.products.filteredProduct)
  const category = useSelector(state => state.categories.selected)

  useEffect(() => {
    dispatch(filteredProduct(category.id))
  }, [])

  const handleSelectedProduct = item => {
    dispatch(selectedProduct(item.id))
    navigation.navigate("Details", {
      name: item.name,
    })
  }

  const renderProductItem = ({ item }) => (
    <ProductsItem item={item} onSelected={handleSelectedProduct} />
  )

  return (
    <FlatList
      data={categoryProducts}
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
