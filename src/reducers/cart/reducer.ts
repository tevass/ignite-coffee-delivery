import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Item {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  img: string
  amount: number
}

export function cartReducer(state: Item[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        draft.push(action.payload.newItem)
      })

    case ActionTypes.CHANGE_AMOUNT_ITEM:
      return produce(state, (draft) => {
        const item = draft.find((item) => item.id === action.payload.item.id)
        if (item) {
          item.amount = action.payload.newAmount
        }
      })

    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemIndex = draft.findIndex(
          (item) => item.id === action.payload.item.id,
        )

        if (!(itemIndex < 0)) {
          draft.splice(itemIndex, 1)
        }
      })

    default:
      return state
  }
}
