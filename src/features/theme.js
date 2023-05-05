import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {value:''},
    reducers: {
        newColor: (state,action)=>{
            state.value = action.payload
        }
    }
})

export const {newColor} = themeSlice.actions

export default themeSlice.reducer