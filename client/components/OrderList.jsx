import React from 'react'

import Order from './Order'

const OrderList = ({orders, onClickFn}) => (
  <div className='orderlist'>
    <ul>
      {orders.map(order =>
        <Order key={order.id}
          {...order}
          onClickFn = {onClickFn}
        />
      )}
    </ul>
  </div>
)

export default OrderList
