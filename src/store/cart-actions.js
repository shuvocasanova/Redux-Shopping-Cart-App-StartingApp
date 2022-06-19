import { cartActions } from "./cart-slice";
import { uiAction } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        `https://redux-http-shoppingcart-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json`
      );
      const data = await res.json();
      console.log(data);
      return data;
    };
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        uiAction.showNotification({
          open: true,
          message: "Sending request to fetch data failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        open: true,
        message: "Sending request",
        type: "warning",
      })
    );

    const sendRequest = async () => {
      // send state as sending request

      const res = await fetch(
        `https://redux-http-shoppingcart-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      // send state as request is succesfull
      dispatch(
        uiAction.showNotification({
          open: true,
          message: "Request is sent succesfully ",
          type: "success",
        })
      );
    };

    try {
      await sendRequest();
    } catch (err) {
      // send state as error
      dispatch(
        uiAction.showNotification({
          open: true,
          message: "Sending Request failed",
          type: "error",
        })
      );
    }
  };
};
