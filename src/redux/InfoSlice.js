// import { createSlice } from "@reduxjs/toolkit";

// export const InfoSlice = createSlice({
//     name: "info",
//     initialState : {
//         data: "hey",
//         date:"1990"
//     },
//     reducers : {
//         getDate: (state) => {
//             state.date= "test"
//             console.log(state.date);
//         }
//     }
// })

// export const {getDate} = InfoSlice.actions;
  
//   export const selectDate = (state) => state.info.date;
  
//   export default InfoSlice.reducer;
  

import {createSlice} from "@reduxjs/toolkit";
 export const counterSlice = createSlice({

    name:'counter',
    initialState:{
        objAll:{value:"Dan", amount:1234
    }},
    reducers:{
        plus:(state)=>{
            state.objAll.value="hellow word"
        },
        minus:(state)=>{
            state.objAll.value= "Dan"

        },
        add:(state)=>{
            state.objAll.amount=state.amount+1
        },
    },  
    
 })
 export const {plus ,minus,add} = counterSlice.actions

 export const selectAll = (state)=>state.counter.objAll

 export default counterSlice.reducer