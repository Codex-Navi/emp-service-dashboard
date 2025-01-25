"use client"
import TableComponent from '@/Components/TableComponent/TestingTableComponent';
import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress } from '@mui/material';
import { fetchComplaint } from '@/Redux/UserSlices/userSlices';
import NewComplainTable from '@/Components/TableComponent/NewComplainTable';




function page(props) {
    const [employeeData, setemployeeData] = useState([]);
    
   const complainData=useSelector((state)=>state.user.complaindata)
   const dispatch=useDispatch()
   
   

  const fetchEmploye=async()=>{
    try{

        const response = await fetch('https://navicompu.co.in/api/fetchemployees/')
        const data =await response.json();
        console.log("Fetch employee data",data)
        if(data.status == "success"){
            setemployeeData(data.data)
            
        }

    }catch(error){

    }

  }




useEffect(() => {
    console.log("fetching data");
    fetchEmploye()
    dispatch(fetchComplaint())


}, []);



console.log("Coplained data =====",complainData)



    return (
        <div style={{height:'100%'}}>
             {complainData.resp ?<NewComplainTable name={'Pending'} complaindata={complainData.resp} employeeData={employeeData} />:<LinearProgress />}
        </div>
    );
}

export default page;