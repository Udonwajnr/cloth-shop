const initialState = {
    products:[],
    cart:[],
}


export const productReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'SET_PRODUCT':
            return {...state, products:action.payload}

        case 'ADD_TO_CART':
            // create item Data from product array
            const item = state.products.find(
                (product)=>product.id===action.payload.id);

            // check if the item is in cart already
            const inCart = state.cart.find(
                (item)=>item.id===action.payload.id?true:false
                ); 


                
             return{
                    ...state,
                    cart:inCart
                    ?state.cart.map((item)=>item.id===action.payload.id
                    ?{...item, qty:action.payload.qty===0?null:action.payload.qty, size:action.payload.size?action.payload.size:item?.sizes[0], color:action.payload.color?action.payload.color:item.imageProducts[0].imageColor,}
                    : item
                    )
                    :
                    [...state.cart, {...item, qty:action.payload.qty, size:action.payload.size===null?item?.sizes[0]:action.payload.size , color:action.payload.color===null?item.imageProducts[0].imageColor:action.payload.color }],
                };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item)=>item.id !== action.payload.id )
            };

        case "ADJUST_ITEM_QTY":
            return {
                ...state,
                cart:state.cart.map((item)=>
                item.id===action.payload.id
                ? {...item, qty:+action.payload.qty}
                : item
                ),
            };
        
        default:
          return state
    }
}