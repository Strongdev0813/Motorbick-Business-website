
import {createSlice} from "@reduxjs/toolkit";
 export const InfoSlice = createSlice({

    name:'counter',
    initialState:{
        objAll:{value:"", amount:true
    }},
    reducers:{
        plus:(state,values)=>{
            let withOutQuotes=JSON.stringify(values.payload.username)
            withOutQuotes=withOutQuotes.replace(/(^"|"$)/g, '')
            state.objAll.value="We will call you "+withOutQuotes
        },
        minus:(state,formik)=>{
            let withOutQuotes =JSON.stringify(formik.payload.values.name)
            withOutQuotes=withOutQuotes.replace(/(^"|"$)/g, '')
           if (withOutQuotes.length>0){
            state.objAll.value="Hello "+withOutQuotes}

        },
        change:(state)=>{
            
            state.objAll.amount=!state.objAll.amount
        },
    },  
    
 })
 export const {plus ,minus,change} = InfoSlice.actions

 export const selectAll = (state)=>state.info.objAll
 export default InfoSlice.reducer