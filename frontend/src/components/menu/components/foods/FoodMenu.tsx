import React, { Fragment } from 'react';

//Material Components
import Grid from '@material-ui/core/Grid/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CartIcon from '@material-ui/icons/AddShoppingCart';

//Image Food
import FoodImg from '../../../../assets/images/foods.png';

//Interface
import { IOrder } from '../../../../interfaces/Order';

interface IFoodMenuProps {
  addSumary: (order: IOrder) => void
}


//Menu Food
const MenuJson =  [
  { "id": 1, "name": "Avo on toast",  "price": "8.50" },
  { "id": 2, "name": "Pesto pasta with pine nuts and mozzarella", "price": "9.50" },
  { "id": 3, "name": "Roasted pork belly with kimchi and soy sauce glaze", "price": "11.00" },
  { "id": 4, "name": "Mac and cheese with crunchy seitan ‘bacon’ (V)", "price": "10.00" }
]

export class FoodMenu extends React.Component<IFoodMenuProps, any> {

  handleNewOrder = (id: number, name: string, price: string ) => {
    const newOrder: IOrder = {
      id: id,
      order: name,
      price: price
    }
    this.props.addSumary(newOrder)
  }

  render () {
    return (
      <Fragment>
        <Grid item xs={12} sm container>
          { MenuJson.map( (item, i: number) => (
            <Card key={item.name} className="card-container">
              <div className="card-details">
                <CardContent className="card-content">
                  <Typography component="h5" variant="h5" className="card-typography">
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle1" className="card-typography">
                    ${item.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.handleNewOrder(item.id, item.name, item.price)}
                    startIcon={<CartIcon />}
                  >
                    Add Cart
                  </Button>
                </CardContent>
              </div>
              <CardMedia
                className="card-cover"
                image={FoodImg}
                title="Live from space album cover"
              />
            </Card>
          ))}
        </Grid>
      </Fragment>
    )
  }
}

export default FoodMenu;