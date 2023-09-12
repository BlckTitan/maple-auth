import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    step: 0
}

export const stepSlice = createSlice({
    name: 'authStep',
    initialState,
    reducers: {
        renderStep: (state, action) =>{
            state.step = action.payload
        }
    }
})

export const {renderStep} = stepSlice.actions;
export default stepSlice.reducer;