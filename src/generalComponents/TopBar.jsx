import {
  CssBaseline,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MuiAppBar from '@mui/material/AppBar'
import Divider from '@mui/material/Divider'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import LogoutIcon from '@mui/icons-material/Logout'
import { styled, useTheme } from '@mui/material/styles'
import '../styles/global.css'
import { logOut } from '../store/auth/slice'
import { useDispatch } from 'react-redux'
import HomeIcon from '@mui/icons-material/Home'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Navigate, useNavigate } from 'react-router-dom'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export const TopBar = ({ title = 'My Car Butler', goBack = false }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const tabs = [
    {
      name: 'My Account',
      icon: <AccountCircleIcon />,
      action: () => navigate('/account'),
    },
    {
      name: 'My Addressess',
      icon: <EditLocationAltIcon />,
      action: () => navigate('address'),
    },
    {
      name: 'My Cars',
      icon: <DirectionsCarIcon />,
      action: () => navigate('vehicles'),
    },
    {
      name: 'Log out',
      icon: <LogoutIcon />,
      action: () => dispatch(logOut()),
    },
  ]

  const [open, setOpen] = React.useState(false)
  const theme = useTheme()

  const handleClickIcon = () => {
    if (goBack) {
      navigate(goBack)
    } else {
      setOpen(true)
    }
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaselinne /> */}
      <AppBar
        position="fixed"
        style={{ height: '56px' }}
        open={open}
        className="background-primary"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleClickIcon}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            {goBack ? (
              <>
                <ArrowBackIcon />
                <p style={{ marginLeft: '15px' }}>Cancel</p>
              </>
            ) : (
              <MenuIcon />
            )}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {goBack ? '' : title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <AccountCircleIcon style={{ margin: '10px', fontSize: '50px' }} />
        <Typography style={{ margin: '10px' }} variant="h5">
          {' '}
          Menu{' '}
        </Typography>
        <List>
          {tabs.map((item, index) => (
            <ListItem
              button
              key={item.name}
              onClick={() => {
                item.action()
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Button>Request a butler</Button>
      </Drawer>
    </Box>
  )
}
