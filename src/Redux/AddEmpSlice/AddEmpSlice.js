import { useDispatch } from "react-redux";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");





const initialState={
    loading:false,
    data:'',
    error:'',
    employeeFirstName: '',
    employeeLastName: '',
    employeePhone: '',
    employeeEmail: '',
    employeePassoword: '',
}




const req={
    method:"POST",
    body:{
        "firstName": initialState.employeeFirstName,
        "lastName": initialState.employeeLastName,
        "email": initialState.employeeEmail,
        "password": initialState.employeePassoword,
        "phoneNumber":initialState.employeePhone
       },
    header:{
      'Content-type':'application/json',

    }
    
}

export const addEmployefun=createAsyncThunk('employe/addEmploye',async()=>{
    try{
        console.log("data of body",req);
        
        const response = await fetch(`https://navicompu.co.in/api/createuser/`,JSON.stringify(req));
        const data = await response.json();
        return data;

    }catch(error){
       return error.message
    }
})


const employeAddSlice=createSlice({
    name:'Add Employe',
    initialState,
    reducers:{
        setEmployeeData:(state,action)=>{
         const {employeeFirstName,employeeLastName,employeeEmail,employeePassoword,employeePhone}=action.payload
         state.employeeFirstName=employeeFirstName;
         state.employeeLastName=employeeLastName;
         state.employeeEmail=employeeEmail;
         state.employeePassoword=employeePassoword;
         state.employeePhone=employeePhone

        
    
        },
    },
    extraReducers:builder=>{
        builder.addCase(addEmployefun.pending,(state,action)=>{
            state.loading=true
        })

        builder.addCase(addEmployefun.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.eror=''
        })

        builder.addCase(addEmployefun.rejected,(state,action)=>{
            state.loading=false
            state.data=''
            state.error=action.error.message
        })
    }
})

export const { setEmployeeData } = employeAddSlice.actions;
export default employeAddSlice.reducer;