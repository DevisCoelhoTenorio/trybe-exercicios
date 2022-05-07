// arquivo Order.js
import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.valores;
   

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}
Order.protoType = {
    user: PropTypes.string,
    product: PropTypes.string,
    value: PropTypes.number,
    currency: PropTypes.number,
}

export default Order;