import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoggedInUserOrders, fetchLoggedInUser } from './UserApi';
import { updateUser } from '../auth/AuthAPI';

const initialState = {
    userOrders: [],
    status: 'idle',
    userInfo: null,
};

export const fetchLoggedInUserOrdersAsync = createAsyncThunk(
    'auth/fetchLoggedInUserOrders',
    async (userId) => {
        const response = await fetchLoggedInUserOrders(userId);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);
export const fetchLoggedInUserAsync = createAsyncThunk(
    'user/fetchLoggedInUser',
    async (id) => {
        const response = await fetchLoggedInUser(id);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const updateUserAsync = createAsyncThunk(
    'user/updateUser',
    async (id) => {
        const response = await updateUser(id);
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
            })
            .addCase(updateUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateUserAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userOrders = action.payload;
            })
            .addCase(fetchLoggedInUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                // this info can be different or more from logged-in User info
                state.userInfo = action.payload;
            });
    },
});

export const selectUserOrders = (state) => state.auth.userOrders;
export const selectUserInfo = (state) => state.auth.userInfo;
export const { increment } = userSlice.actions;

export default userSlice.reducer;