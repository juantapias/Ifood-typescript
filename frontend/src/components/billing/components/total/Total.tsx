import React, { Fragment, MouseEvent } from 'react';

//Material component
import Button from '@material-ui/core/Button/Button';
import OrderIcon from '@material-ui/icons/Fastfood';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography/Typography';

//Interface
import { IOrder } from '../../../../interfaces/Order';
import { INewOrder } from '../../../../interfaces/NewOrder';
import { IResetOrder } from '../../../../interfaces/ResetOrder';

interface ITotalProps {
  orders: IOrder[];
  createNewOrder: (newOrder: INewOrder, resetOrder: IResetOrder) => void
}

interface ITotalState {
  total?: number;
  makeOrder?: boolean;
  waitOrder?: boolean;
  validateOrder?: boolean;
  date?: Date;
}

type clickMekeOrder = MouseEvent<HTMLButtonElement>

export class Total extends React.Component<ITotalProps, ITotalState> {

  constructor(props: ITotalProps) {
    super(props);
    this.state = {
      total: undefined,
      makeOrder: false,
      waitOrder: false,
      validateOrder: false,
      date: undefined
    }
  }

  getCurrentTimestamp = () => {
    const date: Date = new Date();
    return date.getTime();
  }

  makeOrder = (e: clickMekeOrder) => {

    //Map all orders
    const arrayOrders = this.props.orders.map((item, i: number) => {
      return item.order;
    });
    const allOrders = arrayOrders.join(',');

    //Map all price
    const arrayPrice = this.props.orders.map((item, i: number) => {
      return Number(item.price);
    });

    if ( arrayOrders.length > 0 ) {
      const reducer = (accumulator: number , currentValue: number) => accumulator + currentValue;
      const allTotal = arrayPrice.reduce(reducer);
      //Change state
      this.setState({
        total: allTotal,
        makeOrder: true,
        waitOrder: true,
      })
      //Create new orders
      const newOrder: INewOrder = {
        id: this.getCurrentTimestamp(),
        order: allOrders,
        price: allTotal,
        completed: false
      }
      const resetOrder: IResetOrder = {
        showOrder: true
      }
      this.props.createNewOrder(newOrder, resetOrder);
    } else {
      this.setState({
        validateOrder: true
      })
    }
  }

  render () {
    return (
      <Fragment>
          { this.state.waitOrder && <Alert className="alert-order" severity="success">Sending Order to the chef wait for it</Alert>}
          { this.state.validateOrder && <Alert className="alert-order" severity="error">There isn't any order</Alert>}

          { this.state.makeOrder
            ? <Typography component="h4" variant="h4">Total: ${this.state.total}</Typography>
            : <Button
                variant="contained"
                color="primary"
                onClick={e => this.makeOrder(e)}
                endIcon={<OrderIcon />}
                className="btn-make-order"
                >
                  Ordenar
                </Button>
          }
      </Fragment>
    )
  }
}

export default Total;