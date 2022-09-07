import { createSlice } from "@reduxjs/toolkit";

export const InfoSlice = createSlice({
    name: "info",
    initialState : {
        data: "hey",
        date:"1990"
    },
    reducers : {
        getDate: (state, payload) => {
            state.date= payload
        }
    }
})

export const {getDate} = InfoSlice.actions;
  
  export const selectDate = (state) => state.info.date;
  
  export default InfoSlice.reducer;
  