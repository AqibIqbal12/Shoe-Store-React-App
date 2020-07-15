export default (state, action) => {

    switch (action.type) {

        case 'ADD_TO_CART': {
            //return { cart: [action.payload, ...state.cart]}
            let cart = [];
            if (state.cart.some((prod) => prod.id === action.payload.id)) {
                cart = state.cart.map((item) => {
                    //console.log(item)
                    if (item.id === action.payload.id) {
                        item.qty++;
                        item.subTotal = item.price * item.qty;
                    }
                    return item;
                });

            } else {
                cart = [action.payload, ...state.cart];
            }
            return { cart };
        }

        case 'DELETE_CART_ITEM': {
            return { cart: state.cart.filter(item => item.id !== action.payload) }
        }

        default:
            return state;
    }
}
