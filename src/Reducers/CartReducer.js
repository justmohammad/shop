const CartReducer = (state,action) => {
    let newCart = [];

    switch (action.type) {
        case 'ADD_TO_CART':
            newCart = [...state.carts, action.id]
            localStorage.setItem('Cart',JSON.stringify(newCart));
            return {
                ...state,
                carts: newCart
            }
        case 'REMOVE_FROM_CART':
            newCart = state.carts;
            newCart.splice(state.carts.findIndex((cartId) => cartId === action.id),1);
            localStorage.setItem('Cart',JSON.stringify(newCart));
            return {
                ...state,
                carts: newCart
            }
    }
}

export default CartReducer;