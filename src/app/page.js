'use client'
import React, { useState } from 'react';
import styles from './home.module.css'
import Barchart from '@/Components/Barcharts/Barchart';
import Piechar from '@/Components/PieCharts/Piechar';
import Linecharts from '@/Components/Linecharts/Linecharts';
import Gauges from '@/Components/Gauge/Gauges';
import { Button, Modal} from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import AddEmployee from '@/Components/AddEmployeeForm/AddEmployee';
import LogoutIcon from '@mui/icons-material/Logout';






function page(props) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



const handleLogOut=()=>{

}






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
      <section className={styles.homeHeaderSection}>

      <div className={styles.homeHeaderNewComplain}>
          <h1>New Complain</h1>
          <h2>2000</h2>
        </div>

        <div className={styles.homeHeaderPending}>
          <h1>Pending</h1>
          <h2>2000</h2>
        </div>

        <div className={styles.homeHeaderPostpond}>
          <h1>PostPond</h1>
          <h2>4000</h2>
        </div>

        <div className={styles.homeHeaderComplet}>
          <h1>Completed</h1>
          <h2>1000</h2>
        </div>

        <div className={styles.homeHeaderCancell}>
          <h1>Cancelled</h1>
          <h2>1000</h2>
        </div>

       

      </section>

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