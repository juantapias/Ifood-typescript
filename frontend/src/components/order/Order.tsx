import React, { Fragment } from 'react'
import './Order.css';

//Material Component
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import FoodIcon from '@material-ui/icons/Fastfood';
import Alert from '@material-ui/lab/Alert/Alert';



//Interface
import { IResetOrder } from '../../interfaces/ResetOrder';

interface IOrderProps {
  resetOrder: (resetOrder: IResetOrder) => void
}

interface IOrderState {
  resetOrder: IResetOrder[];
}

export class Order extends React.Component<IOrderProps, IOrderState> {

  newOrder = () => {
    const resetOrder: IResetOrder = {
      showOrder: false
    }
    this.props.resetOrder(resetOrder);
  }

  render() {
    return (
      <div className="order-box">
        <Typography component="h2" variant="h2" align="center">
          Your order is ready
        </Typography>
        <Typography component="h5" variant="h5" align="center">
          <FoodIcon/> Enjoy
        </Typography>
        <Alert severity="info">If you want to make another order you can click the new order button</Alert>
        <div className="new-order">
          <Button
            color="primary"
            variant="contained"
            onClick={() => this.newOrder()}
          >Make a new order</Button>
        </div>
      </div>
    )
  }
}

export default Order;