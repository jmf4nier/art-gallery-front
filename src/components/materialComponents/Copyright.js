import React from 'react'
import {Typography, Link} from '@material-ui/core'

 const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link href="https://jasonfournier.net">Jason Fournier</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
export default Copyright