import React from 'react';
import logo from './logo.png';
import './App.css';

//Material Components
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';

//Interface
import { IOrder } from './interfaces/Order';
import { INewOrder } from './interfaces/NewOrder';
import { IResetOrder } from './interfaces/ResetOrder';

//App Components
import Menu from './components/menu/Menu';
import Billing from './components/billing/Billing';
import Order from './components/order/Order';

//Api services
import ApiUrl from './services/Api';

interface IProps {
  title: string
}

interface IState {
  orders: IOrder[];
  newOrders: INewOrder[];
  serveOrder: INewOrder[];
  showOrder: IResetOrder[];
  resetOrder: IResetOrder[];
}

export class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      orders: [],
      newOrders: [],
      serveOrder: [],
      showOrder: [],
      resetOrder: []
    }
  }

  addSumary = (order: IOrder) => {
    this.setState({
      orders: [...this.state.orders, order]
    })
  }

   createNewOrder = async (newOrder: INewOrder, resetOrder: IResetOrder) => {
    this.setState({
      newOrders: [...this.state.newOrders, newOrder],
      orders: []
    }, async () => {
      let config = {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order: this.state.newOrders[0].order,
          price: this.state.newOrders[0].price,
          completed: this.state.newOrders[0].completed
        })
      }
      await fetch(`${ApiUrl}/order`, config)
        .then(res => {
          res.text().then(res => {
            let data = JSON.parse(res);
            let orderId = data.id;

            setTimeout(() => {
              this.setState({
                showOrder: [... this.state.showOrder, resetOrder]
              }, async () => {
                let config = {
                  method: "PUT",
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    completed: true
                  })
                }
                  await fetch(`${ApiUrl}/order/${orderId}`, config)
                  .then(res => {
                    console.log(res)
                  })
                }
              );
            }, 1000);

          })
        })
      }
    )


  }

  resetOrder = ( resetOrder: IResetOrder ) => {
    this.setState({
      showOrder: [],
      resetOrder: [ ...this.state.showOrder, resetOrder ]
    });
  }

  deleteOrder = (id: number) => {
    const orders: IOrder[] = this.state.orders.filter(
      (order: IOrder) => order.id !== id
    );
    this.setState({orders});
  }

  render () {
    return (
      <div className="App">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h1>{this.props.title}</h1>
              <figure className="App-logo">
                <img src={logo} />
              </figure>
            </Grid>
            <Grid item xs={8}>
              <Menu addSumary={this.addSumary} />
            </Grid>
            <Grid item xs={4}>
              {this.state.showOrder[0]
              ?
                <Order
                  resetOrder={this.resetOrder}
                />
              :
                <Billing
                  orders={this.state.orders}
                  createNewOrder={this.createNewOrder}
                  deleteOrder={this.deleteOrder}
                />
              }

            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
};

export default App;
