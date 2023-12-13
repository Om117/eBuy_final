import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoggedInUserOrders } from './UserApi';

const initialState = {
    userOrders: [],
    status: 'idle',
};

export const fetchLoggedInUserOrdersAsync = createAsyncThunk(
    'auth/fetchLoggedInUser',
    async (userId) => {
        const response = await fetchLoggedInUserOrders(userId);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLoggedInUserOrdersAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLoggedInUserOrdersAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                // this info can be different or more from logged-in User info
                state.userOrders = action.payload;
            });
    },
});

export const selectUserOrders = (state) => state.auth.userOrders;

export const { increment } = userSlice.actions;

export default userSlice.reducer;