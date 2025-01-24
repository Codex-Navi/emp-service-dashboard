"use client"
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../UserSlices/userSlices'
import addEmploye from '../AddEmpSlice/AddEmpSlice'

export const store = configureStore({
  reducer: {
    user:userReducer,
    employe:addEmploye
  },
})

export default store