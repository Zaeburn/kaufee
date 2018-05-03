const initialCurrentOrder = {id: 0, items: []}

export default function (currentOrder = initialCurrentOrder, action) {
  switch (action.type) {
    case 'SHOW_CURRENT_ORDER':
      return action.currentOrder

    default:
      return currentOrder
  }
}
