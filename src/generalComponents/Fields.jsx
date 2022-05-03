import React from 'react'
import {
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton
} from '@mui/material'
import '../index.css'
import { VisibilityOff, Visibility } from '@mui/icons-material'

export const PasswordField = ({ label, name, value, handleChange, onKeyDown }) => {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <FormControl
        className='top-margin '
        sx={{ m: 1, minWidth: '300px' }}
        variant='outlined'
      >
        <InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
        <OutlinedInput
          onKeyDown={onKeyDown}
          id='outlined-adornment-password'
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={handleChange(name)}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={(e) => e.preventDefault()}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={label}
        />
      </FormControl>
    </>

  )
}
