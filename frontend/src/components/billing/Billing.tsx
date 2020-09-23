import React, { Fragment } from 'react';
import './Billing.css';

//Materail component
import Typography from '@material-ui/core/Typography';

//App components
import Sumary from './components/sumary/Sumary';
import Total from './components/total/Total';

//Interface
import { IOrder } from "../../interfaces/Order";
import { INewOrder } from '../../interfaces/NewOrder';
import { IResetOrder } from '../../interfaces/ResetOrder';

interface IBillingProps {
  orders: IOrder[];
  createNewOrder: (newOrder: INewOrder, resetOrder: IResetOrder) => void
  deleteOrder: (id: number) => void
}

export class Billing extends React.Component<IBillingProps, any> {

  render () {
    return (
      <Fragment>
        <div className="billing">
          <Typography component="h2" variant="h2" className="billing-typography">
            Billing orders
          </Typography>
          <Sumary
            orders={this.props.orders}
            deleteOrder={this.props.deleteOrder}
          />
          <Total
            orders={this.props.orders}
            createNewOrder={this.props.createNewOrder}
          />
        </div>
      </Fragment>
    );
  }
}

export default Billing;