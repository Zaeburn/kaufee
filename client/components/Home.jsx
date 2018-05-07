import React from 'react'
import {connect} from 'react-redux'

import OrderList from './OrderList'
import AddToOrder from './AddToOrder'
import {requestCurrentOrder, requestUsers, orderComplete} from '../actions'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.markComplete = this.markComplete.bind(this)
  }

  markComplete () {
    this.props.dispatch(orderComplete(this.props.currentOrder.id))
  }

  componentDidMount () {
    this.props.dispatch(requestCurrentOrder())
    this.props.dispatch(requestUsers())
  }

  render () {
    return (
      <div className='order-container'>
        <h2>Current Order</h2>
        {
          this.props.currentOrder.isCurrentOrderActive ? (
            <div>
              <OrderList orders={this.props.currentOrder.items} />
              <div className="completed">
                <button onClick={this.markComplete}>Mark as Complete</button>
              </div>
              <AddToOrder />
            </div>
          ) : (
            <div className="completed">
              <button onClick={this.markComplete}>Mark as Complete</button>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

    currentOrder: state.currentOrder
  }
}

export default connect(mapStateToProps)(Home)
