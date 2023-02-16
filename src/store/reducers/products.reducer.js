import { PRODUCTS } from "../../data/products"
import { SELECTED_PRODUCT, FILTERED_PRODUCT } from "../actions/products.action"

const initialState = {
  products: PRODUCTS,
  filteredProduct: [],
  selected: null,
}

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        selected: state.products.find(
          product => product.id === action.productId
        ),
      }
    case FILTERED_PRODUCT:
      return {
        ...state,
        filteredProduct: state.products.filter(
          product => product.category === action.categoryId
        ),
      }
    default:
      return state
  }
}

export default ProductReducer
