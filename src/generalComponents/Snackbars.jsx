import * as React from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch, useSelector } from 'react-redux'

export const SimpleSnackbar = () => {
    const dispatch = useDispatch()
    const message = false // useSelector((state) => state.messages)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        // dispatch(snackbarAlert('')

    }

    const action = (
        <>
            <Button color='secondary' size='small' onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={handleClose}
            >
                <CloseIcon fontSize='small' />
            </IconButton>
        </>
    )

    return (
        <div>
            <Snackbar
                open={Boolean(message)}
                autoHideDuration={6000}
                onClose={handleClose}
                message={message}
                action={action}
            />
        </div>
    )
}
