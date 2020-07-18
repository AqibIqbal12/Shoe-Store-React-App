export default (state, action) => {

    switch (action.type) {

        case 'ADD_TO_CART': {
            return { cart: [action.payload, ...state.cart] };
        }

        case 'DECREASE_QTY': {
            let cart = [];
            if (state.cart.some((prod) => prod.id === action.payload)) {
                cart = state.cart.map((item) => {
                    //console.log(item)
                    if (item.id === action.payload) {
                        item.qty === 1 ? item.qty = 1 : item.qty--;
                        item.subTotal === item.price ? item.itemLeft += 0  : item.itemLeft++;
                        //item.itemLeft++;
                        item.subTotal = item.price * item.qty;
                    }
                    return item;
                });

            }
            return { cart: cart };
        }

        case 'INCREASE_QTY': {
            let cart = [];
            if (state.cart.some((prod) => prod.id === action.payload)) {

                cart = state.cart.map((item) => {
                    // console.log(item)
                    if (item.id === action.payload) {
                        item.qty++;
                        item.itemLeft--;
                        item.subTotal = item.price * item.qty;
                    }
                    return item;
                });

            }
            return { cart: cart };

        }



        case 'DELETE_CART_ITEM': {
            return { cart: state.cart.filter(item => item.id !== action.payload) }
        }

        default:
            return state;
    }
}
