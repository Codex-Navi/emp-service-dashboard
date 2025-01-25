'use client'
import React, { useMemo, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, MenuItem, TablePagination, Box, FormControl, InputLabel } from "@mui/material";
import styles from './table.module.css'


const PendingComplainTable = (props) => {

    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('');
    const [orderBy, setOrderBy] = useState('');


    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

 


    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }



    // Handle dropdown change for a specific row
   

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    const visibleRows = useMemo(
        () =>
            [...props.complaindata]
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Box>
            <h1 className={styles.pendingHeader} >Pending Complain List</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow className={styles.tableHead}>
                            <TableCell className={styles.tableHeadData}>Srl No.</TableCell>
                            <TableCell className={styles.tableHeadData}>Ticket ID</TableCell>
                            <TableCell className={styles.tableHeadData}>Machine ID</TableCell>
                            <TableCell className={styles.tableHeadData}>Company Name</TableCell>
                            <TableCell className={styles.tableHeadData}>Contect Person Name</TableCell>
                            <TableCell className={styles.tableHeadData}>Contect Person Number</TableCell>
                            <TableCell className={styles.tableHeadData}>Service Team</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleRows.map((complaint, index) => (
                            <TableRow key={index}>
                                <TableCell className={styles.tableData}>{page * rowsPerPage + index + 1}</TableCell>
                                <TableCell className={styles.tableData}>{complaint.tcId}</TableCell>
                                <TableCell className={styles.tableData}>{complaint.machineId}</TableCell>
                                <TableCell className={styles.tableData}>{complaint.companyName}</TableCell>
                                <TableCell className={styles.tableData}>{complaint.contactPersonName}</TableCell>
                                <TableCell className={styles.tableData}>{complaint.contactPersonNumber}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 15, 20]}
                component="div"
                count={props.complaindata.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
};

export default PendingComplainTable;
