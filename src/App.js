import React from 'react'
import './styles/global.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/styled-engine'
import { Login } from './features/auth/Login'
import { Register } from './features/auth/Register'
import { Home } from './features/home/Home'
import { SimpleSnackbar } from './generalComponents/Snackbars'
import { selectIsAuth } from './store/auth/slice'
import { useSelector } from 'react-redux'
import { ROUTES } from './utils/constants'
import { Booking } from './features/booking/Booking'
function App () {
  const isLogged = useSelector(selectIsAuth)
  const publicRoutes = (
    <Routes>
      <Route exact path={ROUTES.LOGIN} element={<Login />} />
      <Route exact path={ROUTES.REGISTER} element={<Register />} />
      <Route path='*' element={<Navigate replace to={ROUTES.LOGIN} />} />
    </Routes>
  )
  const privateRoutes = (
    <Routes>
      <Route exact path={ROUTES.HOME} element={<Home />} />
      <Route exact path={ROUTES.BOOKING} element={<Booking />} />
      <Route path='*' element={<Navigate replace to={ROUTES.HOME} />} />
    </Routes>
  )
  return (

    <>
      <StyledEngineProvider injectFirst>
        <Router>
          <SimpleSnackbar />
          {isLogged
            ? privateRoutes
            : publicRoutes}
        </Router>

      </StyledEngineProvider>
    </>

  )
}

export default App
