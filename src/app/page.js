'use client'
import React, { useEffect, useState } from 'react';
import styles from './home.module.css'
import Barchart from '@/Components/Barcharts/Barchart';
import Piechar from '@/Components/PieCharts/Piechar';
import Linecharts from '@/Components/Linecharts/Linecharts';
import Gauges from '@/Components/Gauge/Gauges';
import { Button, LinearProgress, Modal} from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import AddEmployee from '@/Components/AddEmployeeForm/AddEmployee';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComplaintCount } from '@/Redux/UserSlices/userSlices';






function page(props) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const complainCounts=useSelector((state=>state.user.complainCountData))
  
  const dispatch=useDispatch()


const handleLogOut=()=>{

}


useEffect(()=>{
  dispatch(fetchComplaintCount())
},[])

console.log("complain count ========",complainCounts)

  return (
    <div className={styles.mainPageConatiner}>
      <section className={styles.topsection}>
      <Button className={styles.addMemberBtn} variant="outlined" startIcon={<GroupAddIcon />} onClick={handleOpen}>Add Member</Button>
      <Button className={styles.addMemberBtn} variant="outlined" startIcon={<LogoutIcon />} onClick={handleLogOut}>Logout</Button>
        
       
        <Modal
          className={styles.maodelcont}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddEmployee/>
          
        </Modal>
      </section>
      {complainCounts?.resp ?<section className={styles.homeHeaderSection}>

      <div className={styles.homeHeaderNewComplain}>
          <h1>New Complain</h1>
          <h2>{complainCounts.resp.newComplaint}</h2>
        </div>

        <div className={styles.homeHeaderPending}>
          <h1>Pending</h1>
          <h2>{complainCounts.resp.assignComplaint}</h2>

        </div>

        <div className={styles.homeHeaderPostpond}>
          <h1>PostPond</h1>
          <h2>{complainCounts.resp.postpone}</h2>

        </div>

        <div className={styles.homeHeaderComplet}>
          <h1>Completed</h1>
          <h2>{complainCounts.resp.complete}</h2>

        </div>

        <div className={styles.homeHeaderCancell}>
          <h1>Cancelled</h1>
          <h2>{complainCounts.resp.cancel}</h2>

        </div>

       

      </section>:<LinearProgress />}

      <section className={styles.chatsection}>
        <Barchart />
        <Piechar />
      </section>

      <section className={styles.customerChats}>
        <Linecharts />
        <Gauges />
      </section>



    </div>
  );
}

export default page;