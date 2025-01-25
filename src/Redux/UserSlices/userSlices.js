"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchComplaint = createAsyncThunk("user/fetchComplainData", async () => {
  try {
    const response = await fetch('https://navicompu.co.in/api/fetchcomplaint/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "sortKey": "address",
            "sortValue": 1,
            "skip": 0,
            "limit": 20,
            sp: {
                status: 1
            }
        }),
    });

    const data = await response.json();
  
    return data
   
} catch (error) {
    return error.message
}
});






export const fetchComplaintCount = createAsyncThunk("user/fetchComplainCountData", async () => {
  try {
    const response = await fetch('https://navicompu.co.in/api/dashboarddata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    });

    const data = await response.json();
  
    return data
   
} catch (error) {
    return error.message
}
});







// Initial State
const initialState = {
  loading: false,
  complaindata: [],
  error: "",
  complainCountData:[]

};

// Create Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchComplaint.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchComplaint.fulfilled, (state, action) => {
      console.log("Fulfilled Data:", action.payload);
      state.loading = false;
      state.complaindata = action.payload.data.resp; // Ensure action.payload.data exists
      state.error = "";
    });

    builder.addCase(fetchComplaint.rejected, (state, action) => {
      state.loading = false;
      state.complaindata = [];
      state.error = action.payload || "Something went wrong";
    });



    builder.addCase(fetchComplaintCount.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchComplaintCount.fulfilled, (state, action) => {
      console.log("Fulfilled Data:", action.payload);
      state.loading = false;
      state.complainCountData = action.payload.data; // Ensure action.payload.data exists
      state.error = "";
    });

    builder.addCase(fetchComplaintCount.rejected, (state, action) => {
      state.loading = false;
      state.complainCountData = [];
      state.error = action.payload || "Something went wrong";
    });





  },
});

export default userSlice.reducer;
