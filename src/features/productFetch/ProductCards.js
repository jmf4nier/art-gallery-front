import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../../components/materialComponents/styling'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'


export default function ProductsCards(props) {
  
  const {products} = props
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {products.map((card) => (
              <Grid item key={card.product_id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image1}
                    title={card.product_title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      color="textPrimary"
                    >
                      {card.product_title}
                    </Typography>
                    <Typography gutterBottom>
                      {card.product_description}
                    </Typography>
                    <Typography
                      className={classes.cardPrice}
                      color="textSecondary"
                      variant="caption"
                    >
                      ${card.product_price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  )
}
