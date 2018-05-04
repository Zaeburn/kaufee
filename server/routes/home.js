const express = require('express')

const db = require('../db/orders')
const orderItems = require('../db/orderItems')

const router = express.Router()

router.use(express.json())

module.exports = router

router.get('/', (req, res) => {
  db.getCurrentOrder()
    .then(items => {
      const currentOrder = {
        id: items[0].orderId,
        items: items.map(item => ({
          id: item.orderItemId,
          name: item.userName,
          order: item.orderDetails
        }))
      }
      res.json(currentOrder)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const orderId = req.body.orderId
  const userId = req.body.userId
  orderItems.addToOrder(userId, orderId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/is-complete', (req, res) => {
  const orderId = req.body.orderId
  db.markCompleted(orderId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
