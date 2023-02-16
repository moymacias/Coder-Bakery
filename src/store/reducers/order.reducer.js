import { GET_ORDERS } from "../actions/order.action"

const initialState = {
  list: [],
}

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state
  }
}

export default OrderReducer
