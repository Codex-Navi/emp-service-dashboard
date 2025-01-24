"use client"
import TableComponent from '@/Components/TableComponent/TableComponent';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress } from '@mui/material';
import { fetchUser } from '@/Redux/UserSlices/userSlices';

function page(props) {
  
    
   const user= useSelector((state)=>state.user.usersdata)
   
   const dispatch=useDispatch()



   useEffect(()=>{
       dispatch(fetchUser())

   },[])

   console.log("user data",user)

    return (
        <div style={{height:'100%'}}>
             {user?.length > 0 ?<TableComponent name={'Pending'} userdata={user}/>:<LinearProgress />}
        </div>
    );
}

export default page;