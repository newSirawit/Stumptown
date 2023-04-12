import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        // name: null,
        // price: null,
        // category: null,
        // img: null,
        // qualtity:1,
        totalcost:0,
        totalitem:0,
        items:[]
    },
    reducers:{
        setCart:(state,{payload:{name,price,category,img,quantity}})=>{
            // state.name=name;
            // state.price=price;
            // state.category=category;
            // state.img=img;
            state.items=[...state.items,{
                name:name,
                price:price,
                category:category,
                img:img,
                quantity:quantity
            }]
            console.log(state.items)

            state.totalcost = 0
            state.totalitem = 0
            state.items.map(s => {state.totalcost += (s.quantity * s.price); state.totalitem += s.quantity;})
            console.log(state.totalcost)
        },
        increment:(state) => {
            state.qualtity += 1
            console.log(state.qualtity)
        },
        decrement:(state,{payload:{name}}) => {
            const newItem = state.items
            const indexItem = newItem.findIndex(item => item.name === name)
            newItem[indexItem].quantity--
            if(newItem[indexItem].quantity == 0){
                state.items.splice([indexItem],1);
            }
            console.log(state.items);

            state.totalcost = 0
            state.totalitem = 0
            state.items.map(s => {state.totalcost += (s.quantity * s.price); state.totalitem += s.quantity;})
            console.log(state.totalcost)
        },
        removeItem:(state,{payload:{name}}) =>{
            const newItem = state.items
            const indexItem = newItem.findIndex(item => item.name === name)
            state.items.splice([indexItem],1)
            
            state.totalcost = 0
            state.totalitem = 0
            state.items.map(s => {state.totalcost += (s.quantity * s.price); state.totalitem += s.quantity;})
        },
        addQuantity:(state,{payload:{name}})=>{
            let newItem = state.items
            let indexItem = newItem.findIndex(item => item.name === name)
            console.log(indexItem);
            newItem[indexItem].quantity++
            state.items = newItem
            console.log(state.items)

            state.totalcost = 0
            state.totalitem = 0
            state.items.map(s => {state.totalcost += (s.quantity * s.price); state.totalitem += s.quantity;})
            console.log(state.totalcost)
            console.log(state.totalitem)
        },
    }
})
export const {setCart,increment,decrement,removeItem ,addQuantity} = cartSlice.actions
export default cartSlice.reducer