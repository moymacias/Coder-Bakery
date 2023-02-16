import { URL_API } from "../../constants/Database"

export const GET_ORDERS = "GET_ORDERS"

export const getOrders = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}/ordenes.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const result = await response.json()
      const orders = Object.keys(result).map(key => ({
        ...result[key],
        id: key,
      }))
      console.log(orders)
      dispatch({ type: GET_ORDERS, payload: orders })
    } catch (error) {
      console.log(error)
    }
  }
}
