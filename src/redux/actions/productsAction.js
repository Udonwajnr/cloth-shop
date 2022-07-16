export const setProduct=(products)=>{
    return{
        type:'SET_PRODUCT',
        payload:products
    }
}

export const setProductCategory=(products)=>{
    return{
        type:"SET_PRODUCT_CATEGORY",
        payload:products
    }
}

export const increment = (nr)=>{
    return{
        type:'INCREMENT',
        payload:nr
    }
}

export const decrement = (nr)=>{
    return{
        type:'DECREMENT',
        payload:nr
    }
}

export const changeImage=(product)=>{
    return {
        type:'FIRST_IMAGE',
        payload:product
    }
}

export const addToCat =(itemID,qty,size,color,slug)=>{
    return {
        type:'ADD_TO_CART',
        payload:{id:itemID,
                qty,
                size,
                color,
                slug
        }
    }
}

export const removeFromCart=(itemID)=>{
    return{
        type:'REMOVE_FROM_CART',
        payload:{
            id:itemID,}
    }
}

export const adjustItemQty=(itemID,qty)=>{
    return{
        type:"ADJUST_ITEM_QTY",
        payload:{
            id:itemID,
            qty
        }
    }
}

