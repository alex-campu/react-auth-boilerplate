import React from 'react'
import { TopBar } from '../../generalComponents/TopBar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Navigate, useNavigate } from 'react-router-dom'
import { HomeCard } from '../../generalComponents/Cards/Cards'
import '../../styles/global.css'
import { ROUTES } from '../../utils/constants'

export const Home = () => {
  const navigate = useNavigate()
  const cardsContent = [
    {
      Icon: AccountCircleIcon,
      text: 'Account',
      action: () => navigate(ROUTES.ACCOUNT),
    },
    {
      Icon: AccountCircleIcon,
      text: 'Request a Butler!',
      action: () => navigate(ROUTES.BOOKING),
    },
  ]

  return (
    <>
      <TopBar />
      <main className="margin-main">
        {cardsContent.map((card, index) => (
          <HomeCard key={index} {...card} />
        ))}
      </main>
    </>
  )
}
