import React from 'react'
import { Grid, TextField, Button, Typography, FormControlLabel, Checkbox } from '@mui/material'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import '../../styles/global.css'
import { PasswordField } from '../../generalComponents/Fields'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export const Register = ({ open, setOpen, message, setMessage }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [values, setValues] = React.useState({
        name: '',
        email: '',
        phone: '',
        password1: '',
        password2: ''
    })
    const { email, password1, password2 } = values

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value })
    }


    const signUp = () => {
        console.log(values)
    }

    return (
        <>
            <Grid
                className='login-container'
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
            >
                <DirectionsCarFilledIcon className='logo' />
                <TextField
                    type='text'
                    name='name'
                    onChange={handleChange('name')}
                    className='top-margin email'
                    label='Full Name'
                />
                <TextField
                    type='email'
                    name='email'
                    onChange={handleChange('email')}
                    className='top-margin email'
                    label='Email'
                />
                <TextField
                    type='phone'
                    className='top-margin email'
                    label='Phone'
                    name='phone'
                    onChange={handleChange('phone')}
                />
                <PasswordField
                    value={values.password}
                    name='password1'
                    label='Password'
                    handleChange={handleChange}
                />
                <PasswordField
                    value={values.password}
                    name='password2'
                    label='Confirm Password'
                    handleChange={handleChange}
                />

                <Typography style={{ maxWidth: '280px', color: 'rgba(0, 0, 0, 0.6)' }}>
                    By clicking Sign Up, you agree to our Terms of Use and Privacy Policy
                </Typography>
                <Button onClick={() => signUp()} className='big-button top-margin' variant='outlined'>
                    SIGN UP
                </Button>
                <Typography>
                    Have an account already? <Link to='/login'>Sign in</Link>
                </Typography>
            </Grid>
        </>
    )
}
