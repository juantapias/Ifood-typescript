import React from 'react';

//Material components
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography/Typography';

//Interface
import { IOrder } from '../../../../interfaces/Order';

interface ISumaryProps {
  orders: IOrder[]
  deleteOrder: (id: number) => void
}

export class Sumary extends React.Component<ISumaryProps, any> {
  render (): JSX.Element[] {
    return this.props.orders.map ( ( order: IOrder, i: number )  => {
      return (
        <div className="sumary-box" key={order.id}>
          <Typography
            component="h5"
            variant="h5"
            className="item-sumary"
          >
            {order.order}
          </Typography>
          <div className="price-box">
            <Typography
              component="h3"
              variant="h3"
              className="price"
            >
              ${order.price}
            </Typography>
            <IconButton
              color="secondary"
              onClick={() => this.props.deleteOrder(order.id)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      );
    })
  }
}

export default Sumary;