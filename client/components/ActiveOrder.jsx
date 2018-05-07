import React from 'react'
import OrderList from './OrderList'
import AddToOrder from './AddToOrder'

const ActiveOrder = () => (
  <div className='order-container'>
    <h2>Current Order</h2>
    <OrderList orders={orders} />
    <div className="completed">
      <button onClick={this.markComplete}>Mark as Complete</button>
    </div>
    <AddToOrder />
  </div>
)

export default ActiveOrder
