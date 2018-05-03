import React from 'react'
import {connect} from 'react-redux'

import Order from './Order'
import {requestCurrentOrder, requestUsers} from '../actions'

class Home extends React.Component {
  constructor (props) {
    super(props)

    // this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  // handleChange (e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  handleAdd (e) {
    e.preventDefault()
    this.sendNewPost()
    window.location.reload()
  }
  componentDidMount () {
    this.props.dispatch(requestCurrentOrder(), requestUsers())
  }

  render () {
    const orders = this.props.orders || []
    return (
      <div className='order-container'>
        <h2>Current Order</h2>
        <ul>
          {orders.map(order =>
            <Order key={order.id}
              {...order}
            />
          )}
        </ul>
        <div className='addorder'>
          <form onSubmit={this.handleAdd}>
            <h2>Add Order</h2>
            <div className="dropdown">
              <button className="dropbtn">Users</button>
              <div className="dropdown-content">
                {users.map(user =>
                  <Users key={user.id}
                    {...order}
                  />
                )}
              </div>
            </div>
            <button className="btn btn-submit">Add to Order</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.currentOrder.items,
    users: state.userList
  }
}

export default connect(mapStateToProps)(Home)
