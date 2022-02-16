import React from 'react'
import LayoutInternal from '../../utils/layouts/LayoutInternal'
import { Typography } from '@mui/material'
import { GetItems } from '../../api/itemsService'

const Dashboard = () => {
  
  React.useEffect(() => {
    GetItems()
  }, [])

  return(
    <LayoutInternal sectionTitle="Tablero">
      <Typography paragraph>
        Bienvenido a tu tablero
      </Typography>
    </LayoutInternal>
  )
}

export default Dashboard