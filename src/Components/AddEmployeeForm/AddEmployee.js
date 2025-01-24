import React, { useState } from 'react';
import styles from './addemploye.module.css'
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { addEmployefun, setEmployeeData } from '@/Redux/AddEmpSlice/AddEmpSlice';





function AddEmployee(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        employeeFirstName: '',
        employeeLastName: '',
        employeePhone: '',
        employeeEmail: '',
        employeePassoword: '',
    });


const dispatch=useDispatch()


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const req={
        method:"POST",
        body:{
            "firstName": formData.employeeFirstName,
            "lastName": formData.employeeLastName,
            "email": formData.employeeEmail,
            "password": formData.employeePassoword,
            "phoneNumber":formData.employeePhone
           },
        header:{
          'Content-type':'application/json',
    
        }
        
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
        // Dispatch form data to Redux
        const response = await fetch(`https://navicompu.co.in/api/createuser/`,req);
        const data = await response.json();
        console.log('employe response',data)
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    }


    return (
        <div>

            <Box className={styles.modelBox}>
                <Typography className={styles.formHeader}>Add Service Team Member</Typography>
                <form>
                    <div className={styles.nameFieldWrape}>
                        <TextField
                            style={{ marginBottom: '20px' }}
                            label="Employee FirstName"
                            name="employeeFirstName"
                            variant="outlined"
                            fullWidth
                            value={formData.employeeFirstName}
                            onChange={handleChange}
                            required
                        />

                        <TextField
                            style={{ marginBottom: '20px',marginLeft:'10px' }}
                            label="Employee LastName"
                            name="employeeLastName"
                            variant="outlined"
                            fullWidth
                            value={formData.employeeLastName}
                            onChange={handleChange}
                            required
                        />


                    </div>

                    <div>
                        <TextField
                            style={{ marginBottom: '20px' }}
                            label="Employee Phone No."
                            name="employeePhone"
                            variant="outlined"
                            fullWidth
                            value={formData.employeePhone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <TextField
                            style={{ marginBottom: '20px' }}
                            label="Employee Email"
                            name="employeeEmail"
                            variant="outlined"
                            type="email"
                            fullWidth
                            value={formData.employeeEmail}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <TextField
                        
                            style={{ marginBottom: '20px' }}
                            label="Password"
                            name='employeePassoword'
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            fullWidth
                            onChange={handleChange}
                            value={formData.employeePassoword}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleTogglePasswordVisibility}
                                            edge="end"
                                            aria-label="toggle password visibility"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </form>

            </Box>

        </div>
    );
}

export default AddEmployee;