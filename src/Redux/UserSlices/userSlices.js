"use client"
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


// export  const fetchUser=createAsyncThunk('user/fetchUserData',()=>{
//    return fetch('http://192.168.1.240/api/fetchcomplaint/',{
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       // Include other headers if needed
//     },
//     credentials: 'include', // If you need to include cookies
//   })
//     .then(respnse=>console.log("fetch user data",respnse))
// })

const body={
    method:"POST",
    body:{
   
        "sortKey": "address",
        "sortValue": 1,
        "skip": 10,
        "limit": 10
    },
    header:{
        'Content-type':'application/json',
    }
}

export const fetchUser = createAsyncThunk('user/fetchUserData', async () => {
      try {
        const response = await fetch(`https://navicompu.co.in/api/fetchcomplaint/`,body);
        const data = await response.json();
        return data;
      } catch (error) {
        return error.message;
      }
    }
  );


const initialState={
    loading:false,
    usersdata:[],
    error:'',
}

const userSlice=createSlice({
name:'user',
initialState,
extraReducers:builder=>{
    builder.addCase(fetchUser.pending,state=>{
        state.loading=true
    })

    builder.addCase(fetchUser.fulfilled,(state,action)=>{
        console.log("fullfilled data",action);
        
        state.loading=false
        state.usersdata =action.payload.data
        state.error=''
    })

    builder.addCase(fetchUser.rejected,(state,action)=>{
        state.loading=false
        state.usersdata=[]
        state.error=action.error.message
    })
}
})

export default userSlice.reducer