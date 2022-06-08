import { createSlice } from '@reduxjs/toolkit'


const searchSlice = createSlice({
    name: 'search',
    initialState: { value: '' },
    reducers: {
        changeValue(state, { payload }) {
            return {
                ...state,
                value: payload
            }
        }
    }
})


export const { changeValue } = searchSlice.actions

export default searchSlice.reducer