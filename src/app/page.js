'use client'
import React, { useState } from 'react';
import styles from './home.module.css'
import Barchart from '@/Components/Barcharts/Barchart';
import Piechar from '@/Components/PieCharts/Piechar';
import Linecharts from '@/Components/Linecharts/Linecharts';
import Gauges from '@/Components/Gauge/Gauges';
import { Modal} from '@mui/material';

import AddEmployee from '@/Components/AddEmployeeForm/AddEmployee';






function page(props) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);










  return (
    <div className={styles.mainPageConatiner}>
      <div className={styles.topsection}>
        <button className={styles.addMemberBtn} onClick={handleOpen}>Add Member</button>
        <Modal
          className={styles.maodelcont}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddEmployee/>
        </Modal>
      </div>
      <section className={styles.homeHeaderSection}>

        <div className={styles.homeHeaderPending}>
          <h1>Pending</h1>
          <h2>2000</h2>
        </div>

        <div className={styles.homeHeaderCompleted}>
          <h1>Completed</h1>
          <h2>4000</h2>
        </div>

        <div className={styles.homeHeaderCustomerReview}>
          <h1>Customer Review</h1>
          <h2>1000</h2>
        </div>

        <div className={styles.homeHeaderCustomerextra}>
          <h1>Extra</h1>
          <h2>2000</h2>
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