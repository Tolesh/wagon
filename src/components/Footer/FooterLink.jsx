import { Link } from '@mui/material'
import React from 'react'

const FooterLink = ({ text }) => {
  return (
    <Link 
    href="#"
    variant='p'
    component='a'
    sx={{
  textDecorationLine: 'none',
      fontSize: '1.1rem',
      fontWeight: '400',
      textDecoration: 'none',
      color: '#fff',
      textTransform: 'capitalize',
      
    }}
    >
      {text}
    </Link>
  )
}

export default FooterLink