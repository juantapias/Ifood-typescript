import React, { Fragment } from 'react';

//Material Components
import Grid from '@material-ui/core/Grid/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CartIcon from '@material-ui/icons/AddShoppingCart';

//Image Drink
import DrinkImg from '../../../../assets/images/drinks.png';

//Interface
import { IOrder } from '../../../../interfaces/Order';

interface IDrinkMenuProps {
  addSumary: (order: IOrder) => void
}

//Menu Drink
const MenuJson =  [
  { "id": 5, "name": "Gin and Tonic",  "price": "9.05" },
  { "id": 6, "name": "White Russian", "price": "9.20" },
  { "id": 7, "name": "Mojito", "price": "8.00" },
  { "id": 8, "name": "Old Fashioned", "price": "9.00" }
]

export class DrinkMenu extends React.Component<IDrinkMenuProps, any> {
  handleNewOrder = (id: number, name: string, price: string) => {
    const newOrder: IOrder = {
      id: id,
      order: name,
      price: price
    };
    this.props.addSumary(newOrder);
  };

  render() {
    return (
      <Fragment>
        <Grid item xs={12} sm container>
          {MenuJson.map((item, i: number) => (
            <Card key={item.name} className="card-container">
              <div className="card-details">
                <CardContent className="card-content">
                  <Typography
                    component="h5"
                    variant="h5"
                    className="card-typography"
                  >
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
                image={DrinkImg}
                title="Live from space album cover"
              />
            </Card>
          ))}
        </Grid>
      </Fragment>
    );
  }
}

export default DrinkMenu;