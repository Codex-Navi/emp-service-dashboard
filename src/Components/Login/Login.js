import React, { useState } from 'react';
import styles from './login.module.css'
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


let user = {
    email: 'himukuji1997@gmail.com',
    password: 123456
}

function Login(props) {



      const [showPassword, setShowPassword] = useState(false);
        const [snackBarOpen, setSnackBarOpen] = useState(false)
        const [snackBarMessage, setSnackBarMessage] = useState('')
        const [formData, setFormData] = useState({
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
    
      
    
    
        const handleSubmit = async (e) => {
            e.preventDefault();

            if(formData.employeeEmail=="himukuji1997@gmail.com" && formData.employeePassoword == 123456){
                props.setLoginStatus(true)
            }
            
            // const response = await fetch(`https://navicompu.co.in/api/login/`, {
            //     method: "POST",
            //     body: JSON.stringify(req),
            //     headers: {
            //         'Content-type': 'application/json',
    
            //     }
    
            // });
            // const data = await response.json();
    
            // console.log("add emplouedadsfasd",data)
            // if(data.status == "success" ){
            //     setSnackBarMessage(data.message)
            //     setSnackBarOpen(true)
            // }
            // else{
            //     setSnackBarMessage("Some Thing Went Wrong")
            //     setSnackBarOpen(true)
            // }
    
        };
    
        const handleTogglePasswordVisibility = () => {
            setShowPassword((prev) => !prev);
        }






    return (
        <div className={styles.LoginCont}>
            <img src='/it-helpdesk.png' height={800} className={styles.lgoingImg}/>
            <div className={styles.LoginWrap}>
                <h1 className={styles.LoginHeader}>Admin Login</h1>

                <form>
                   
                    
                    <div>
                        <TextField
                            style={{ marginBottom: '20px',background:'white' ,borderRadius:'10px'}}
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
                             style={{background:'white',borderRadius:'10px'}}
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
                    <section></section>
                    <Button style={{ marginTop: '20px',fontSize:'20px' }} onClick={handleSubmit} variant="contained" color="success" fullWidth>
                        LogIn
                    </Button>
                </form>


            </div>

        </div>
    );
}

export default Login;