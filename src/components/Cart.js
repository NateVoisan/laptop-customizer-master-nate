import React from 'react';
import CartTotal from './CartTotal';
import Summary from './Summary';

class Cart extends React.Component {
    render() {
        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            <Summary 
              selected={this.props.selected}
            />
            <CartTotal total={this.props.total}/>
          </section>
        );
    }
}

export default Cart;