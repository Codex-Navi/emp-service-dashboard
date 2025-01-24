"use client"

import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function createData(id, companyname, machineid, ticketid, contectperson, contectnumber, serviceteam) {
    return {
        id,
        companyname,
        machineid,
        ticketid,
        contectperson,
        contectnumber,
        serviceteam
    };
}

const rows = [
    createData(1, 'Cupcake', 305, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(2, 'Donut', 452, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(3, 'Eclair', 262, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(4, 'Frozen yoghurt', 159, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(5, 'Gingerbread', 356, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(6, 'Honeycomb', 408, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(7, 'Ice cream sandwich', 237, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(8, 'Jelly Bean', 375, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(9, 'KitKat', 518, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(10, 'Lollipop', 392, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(11, 'Marshmallow', 318, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(12, 'Nougat', 360, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(13, 'Oreo', 437, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(14, 'Cupcake', 305, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(15, 'Donut', 452, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(16, 'Eclair', 262, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(17, 'Frozen yoghurt', 159, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(18, 'Gingerbread', 356, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(19, 'Honeycomb', 408, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(20, 'Ice cream sandwich', 237, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(21, 'Jelly Bean', 375, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(22, 'KitKat', 518, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(23, 'Lollipop', 392, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(24, 'Marshmallow', 318, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(25, 'Nougat', 360, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(26, 'Oreo', 437, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(27, 'Oreo', 437, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(28, 'Oreo', 437, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(29, 'Oreo', 437, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(30, 'Oreo', 437, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(31, 'Oreo', 437, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(32, 'Oreo', 437, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(33, 'Oreo', 437, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(34, 'Oreo', 437, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
    createData(35, 'Oreo', 437, 'ITHDSRV_00061', 'Mukesh Kumar Tiwary', '+91 79917-18363', ['Mukesh', 'Suraj', 'Sobik', 'Subodeep']),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
    {
        id: 'companyname',
        numeric: false,
        disablePadding: true,
        label: 'Company Name',
    },
    {
        id: 'machineid',
        numeric: true,
        disablePadding: false,
        label: 'Machine ID',
    },
    {
        id: 'ticketid',
        numeric: true,
        disablePadding: false,
        label: 'Ticket ID',
    },
    {
        id: 'contectperson',
        numeric: true,
        disablePadding: false,
        label: 'Contect Person Name',
    },
    {
        id: 'contectnumber',
        numeric: true,
        disablePadding: false,
        label: 'Contect Person Number',
    },
    {
        id: 'serviceteam',
        numeric: true,
        disablePadding: false,
        label: 'Service Team',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow style={{ background: 'skyblue', color: "white" }}>
                <TableCell padding="checkbox" >
                    {/* <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          /> */}
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        style={{ textAlign: 'center' }}
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            style={{ color: "white", fontWeight: 'bolder', textAlign: 'center' }}
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const { numSelected } = props;
    return (
        <Toolbar
            sx={[
                {
                    pl: { sm: 2 },
                    pr: { xs: 1, sm: 1 },
                },
                numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                },
            ]}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    {props.name}
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};



export default function TableComponent(props) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [age, setAge] = React.useState('');

    console.log("user table data",props);
    

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            [...rows]
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage],
    );

    return (

        
        <Box style={{height:'100%'}}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} name={props.name} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            style={{ border: "1px solid black" }}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {props.userdata.map((data,index)=>{

                                return <TableRow key={index}>
                                    <TableCell>{data.companyName}</TableCell>
                                </TableRow>

                            }
                                
                            
                            )}
                            {visibleRows.map((row, index) => {
                                const isItemSelected = selected.includes(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        // onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        // selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox">
                                            {/* <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            /> */}
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.companyname}
                                        </TableCell>
                                        <TableCell align="center">{row.machineid}</TableCell>
                                        <TableCell align="center">{row.ticketid}</TableCell>
                                        <TableCell align="center">{row.contectperson}</TableCell>
                                        <TableCell align="center">{row.contectnumber}</TableCell>
                                        <TableCell align="center">

                                            <FormControl >

                                                <Select
                                                    value={age}
                                                    onChange={handleChange}
                                                    displayEmpty
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    {row.serviceteam.map((teamname,index) => (
                                                          <MenuItem key={index} value={teamname}>{teamname}</MenuItem>
                                                    ))}
                                                    
                                                  
                                                    
                                                </Select>

                                            </FormControl>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 15, 20]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

        </Box>
    );
}