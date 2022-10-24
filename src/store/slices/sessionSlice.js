import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        user: null,
    },
    reducers: {
        setSession: (state, session) => {
            state.user = session
        }
    }
})

export const { setSession } = sessionSlice.actions
export default sessionSlice.reducer