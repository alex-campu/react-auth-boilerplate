import React from 'react'
import { TextField, Grid, Typography, Button } from '@mui/material'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { logInThunk } from '../../store/auth/thunks'
import { Link } from 'react-router-dom'
import { PasswordField } from '../../generalComponents/Fields'
import '../../styles/global.css'

export const Login = () => {
  const navigate = useNavigate()
  // const error = useSelector((state) => state.error)

  const dispatch = useDispatch()

  const [values, setValues] = React.useState({
    email: '',
    password: ''
  })
  const { email, password } = values

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      logIn()
    }
  }

  const logIn = () => {
    dispatch(logInThunk(values))
  }
  return (

    <Grid
      className='login-container'
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <DirectionsCarFilledIcon className='logo' />
      <TextField
        name='email'
        type='email'
        className='top-margin email'
        label='Email'
        onChange={handleChange('email')}
      />
      <PasswordField
        value={values.password}
        name='password'
        label='Password'
        handleChange={handleChange}
        onKeyDown={handleKeyDown}

      />

      <Button onClick={() => logIn()} className='big-button top-margin' variant='outlined'>
        LOGIN
      </Button>
      <Typography>
        Do not have an account?
        <Link to='/register'>Sign Up</Link>

      </Typography>
    </Grid>

  )
}
