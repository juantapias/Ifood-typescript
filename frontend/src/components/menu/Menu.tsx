import React, { Fragment } from 'react';
import './Menu.css';

//App components
import MenuItems from './components/MenuItems';

//interface
import { IOrder } from '../../interfaces/Order';

interface IOrderProps {
  addSumary: (order: IOrder) => void
}

interface IOrderState {
  orders: IOrder[];
}

export class Menu extends React.Component<IOrderProps, IOrderState> {
  render() {
    return (
      <Fragment>
        <MenuItems addSumary={this.props.addSumary}/>
      </Fragment>
    )
  }
}

export default Menu;