import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface ProductState {
    list: [],
    error: string | null | undefined
}

const initialState: ProductState = {
    list: [],
    error: null
}

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async () => {
        const response = await fetch('./product-data.json')
        return await response.json();
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, () => {
                alert("Fetching products, please wait...");
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.error = action.error.message;
                alert("Failed to fetch products: " + state.error);
            });
    }
});

export const productsReducer = productSlice.reducer;