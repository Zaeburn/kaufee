import React from 'react'
import {connect} from 'react-redux'

class NewOrder extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='neworder'>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orderId: state.currentOrder.id,
    orders: state.currentOrder.items,
    users: state.userList
  }
}

export default connect(mapStateToProps)(NewOrder)
