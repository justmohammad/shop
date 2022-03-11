import React, {useReducer} from 'react';
import ContentShop from "../ContentShop/ContentShop";
import Blog from "../Blog/Blog";
import CartContext from "../../Contexts/CartContext";
import CartReducer from "../../Reducers/CartReducer";

const PageShop = () => {

    const [state,dispatch] = useReducer(CartReducer,{
        carts: JSON.parse(localStorage.getItem('Cart')) || []
    })

    return (
        <CartContext.Provider value={{
            carts: state.carts,
            dispatchCart: dispatch
        }}>
            <div>
                <ContentShop/>
                <Blog/>
            </div>
        </CartContext.Provider>
    );
};

export default PageShop;