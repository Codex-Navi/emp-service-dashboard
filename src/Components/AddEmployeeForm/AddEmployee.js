import React, { useState } from 'react';
import styles from './addemploye.module.css'
import { Alert, Box, Button, IconButton, InputAdornment, Snackbar, TextField, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';





function AddEmployee(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [snackBarOpen, setSnackBarOpen] = useState(false)
    const [snackBarMessage, setSnackBarMessage] = useState('')
    const [formData, setFormData] = useState({
        employeeFirstName: '',
        employeeLastName: '',
        employeePhone: '',
        employeeEmail: '',
        employeePassoword: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const req = {

        firstName: formData.employeeFirstName,
        lastName: formData.employeeLastName,
        email: formData.employeeEmail,
        password: formData.employeePassoword,
        phoneNumber: formData.employeePhone



    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Dispatch form data to Redux
        const response = await fetch(`https://navicompu.co.in/api/createuser/`, {
            method: "POST",
            body: JSON.stringify(req),
            headers: {
                'Content-type': 'application/json',

            }

        });
        const data = await response.json();

        console.log("add emplouedadsfasd",data)
        if(data.status == "success" ){
            setSnackBarMessage(data.message)
            setSnackBarOpen(true)
        }
        else{
            setSnackBarMessage("Some Thing Went Wrong")
            setSnackBarOpen(true)
        }

    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    }


    return (
        <div>

            <Box className={styles.modelBox} >
                <p className={styles.formHeader}>Add Service Team Member</p>
                <form>
                    <div className={styles.nameFieldWrape}>
                        <TextField
                            style={{ marginBottom: '20px',background:'white',borderRadius:'10px' }}
                            label="Employee FirstName"
                            name="employeeFirstName"
                            variant="outlined"
                            fullWidth
                            value={formData.employeeFirstName}
                            onChange={handleChange}
                            required
                        />

                        <TextField
                            style={{ marginBottom: '20px', marginLeft: '10px',background:'white' ,borderRadius:'10px' }}
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
                           
                            style={{ marginBottom: '20px',background:'white',borderRadius:'10px'  }}
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
                            style={{ marginBottom: '20px',background:'white' ,borderRadius:'10px' }}
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
                            className={styles.passwordField}
                            
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
                    <Button style={{marginTop:'20px'}} onClick={handleSubmit} variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </form>

            </Box>


            <Snackbar
                open={snackBarOpen}
                autoHideDuration={3000} // Auto close after 3 seconds
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Adjust position
            >
                <Alert >
                    {snackBarMessage}
                </Alert>
            </Snackbar>

        </div>
    );
}

export default AddEmployee;