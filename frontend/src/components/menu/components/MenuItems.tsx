import React, { Fragment } from 'react';

//App componets
import Title from './title/Title';
import FoodMenu from './foods/FoodMenu';
import DrinkMenu from './drinks/DrinkMenu';
import DessertMenu from './desserts/DessertMenu';

//Interface
import { IOrder } from '../../../interfaces/Order';

interface IMenuItemProps {
  addSumary: (order: IOrder) => void
}

export class MenuItems extends React.Component<IMenuItemProps, any> {

  render() {
    return (
      <Fragment>
        <Title title="Foods" />
        <FoodMenu addSumary={this.props.addSumary} />
        <Title title="Drinks" />
        <DrinkMenu addSumary={this.props.addSumary} />
        <Title title="Desserts" />
        <DessertMenu addSumary={this.props.addSumary} />
      </Fragment>
    )
  }
}

export default MenuItems;