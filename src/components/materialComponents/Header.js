import React from 'react'
import { AppBar, Toolbar, Typography, Container, Grid, Button } from '@material-ui/core'
import { useStyles } from './styling'
import { CameraIcon } from '@material-ui/icons/PhotoCamera'
import PrimarySearchAppBar from './MenuBar'


function Header() {
  const classes = useStyles()
  return (
    <div>
      <PrimarySearchAppBar/>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Album layout
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Main call to action
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Header
