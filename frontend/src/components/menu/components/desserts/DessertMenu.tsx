import React, { Fragment } from 'react';

//Material Components
import Grid from '@material-ui/core/Grid/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CartIcon from '@material-ui/icons/AddShoppingCart';

//Image Dessert
import DessetImg from '../../../../assets/images/desserts.png';

//Interface
import { IOrder } from '../../../../interfaces/Order';

interface IDessertMenuProps {
  addSumary: (order: IOrder) => void
}

//Menu Dessert
const MenuJson =  [
  { "id": 9, "name": "Option A",  "price": "7.20" },
  { "id": 10, "name": "Option B", "price": "7.50" },
  { "id": 11, "name": "Option C", "price": "6.80" },
]

export class DessertMenu extends React.Component<IDessertMenuProps, any> {

  handleNewSumary = (id: number, name: string, price: string ) => {
    const newSumary: IOrder = {
      id: id,
      order: name,
      price: price
    }
    this.props.addSumary(newSumary)
  }

  render () {
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
                    onClick={() => this.handleNewSumary(item.id, item.name, item.price)}
                    startIcon={<CartIcon />}
                  >
                    Add Cart
                  </Button>
                </CardContent>
              </div>
              <CardMedia
                className="card-cover"
                image={DessetImg}
                title="Live from space album cover"
              />
            </Card>
          ))}
        </Grid>
      </Fragment>
    );
  }
}

export default DessertMenu;