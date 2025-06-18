import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

const BASE_URL = 'https://68111cf13ac96f7119a39e27.mockapi.io/products';

export const createProduct = createAsyncThunk(
    'product/createProduct',
    async (productData) => {
        const response = await axios.post(BASE_URL, productData);
        return response.data;
    }
);
export const getProduct = createAsyncThunk(
    'product/getProduct',
    async () => {
        const response = await axios.get(BASE_URL);
        return response.data;
    }

);
export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (id) => {
        const respone = await axios.delete(`${BASE_URL}/${id}`);
        return respone.data;
    }
)

const initialFormState = {
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
};


const productSlice = createSlice({
    name: 'product',
    initialState: {
        formData: { ...initialFormState },
        products: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        updateForm(state, action) {
            const { name, value } = action.payload;
            state.formData[name] = value;
        },
        clearForm(state) {
            state.formData = { ...initialFormState };
        }
    },
    extraReducers: (builder) => {
        builder
            //post
            .addCase(createProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createProduct.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            //get
            .addCase(getProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })

            //delete
            .addCase(deleteProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteProduct.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const { updateForm, clearForm } = productSlice.actions;
export default productSlice.reducer;