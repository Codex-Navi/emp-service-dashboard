import React, { useMemo, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, MenuItem, TablePagination, Box, FormControl, InputLabel } from "@mui/material";
import styles from './table.module.css'


const NewComplainTable = (props) => {

    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('');
    const [orderBy, setOrderBy] = useState('');
   console.log("Complain Table Data",props)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // State for complaints
    const [complaints, setComplaints] = useState([
        { id: 1, complaint: "Issue with login", assignedEmployee: "" },
        { id: 2, complaint: "Payment not processed", assignedEmployee: "" },
        { id: 3, complaint: "App crashing on start", assignedEmployee: "" },
    ]);


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
    const handleEmployeeChange =async (id, value) => {
    console.log("Employee Assign value",id,value)

        try {
            const response = await fetch('https://navicompu.co.in/api/assignemp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "tcId": id,
                    "epId": value.epId,
                    "status": 2
            }),
            });

            const data = await response.json();
       
            console.log(data);  // Handle the response as needed
        } catch (error) {
            console.error('Error fetching data:', error);
        }

      
    };

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
            <h1 className={styles.pendingHeader} >New Complain List</h1>
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
                            <TableRow key={complaint._id}>
                                <TableCell className={styles.tableData}>{page * rowsPerPage + index + 1}</TableCell>
                                <TableCell className={styles.tableData}>{complaint.tcId}</TableCell>
                                <TableCell className={styles.tableData}>{complaint.machineId}</TableCell>
                                <TableCell className={styles.tableData}>{complaint.companyName}</TableCell>
                                <TableCell className={styles.tableData}>{complaint.contactPersonName}</TableCell>
                                <TableCell className={styles.tableData}>{complaint.contactPersonNumber}</TableCell>
                                <TableCell>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select Employee</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={''}
                                            onChange={(e) => handleEmployeeChange(complaint.tcId, e.target.value)}
                                            displayEmpty
                                            fullWidth
                                            label="Select Employee"
                                        >

                                            {props.employeeData.map((employee, index) => (
                                                <MenuItem key={index} value={employee}>
                                                    {`${employee.firstName} ${employee.lastName}`}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 15, 20]}
                component="div"
                count={props.userdata.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
};

export default NewComplainTable;
