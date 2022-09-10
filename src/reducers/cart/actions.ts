import { Item } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  CHANGE_AMOUNT_ITEM = 'CHANGE_AMOUNT_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export function addNewItemAction(newItem: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newItem,
    },
  }
}

export function changeAmountItemAction(item: Item, newAmount: number) {
  return {
    type: ActionTypes.CHANGE_AMOUNT_ITEM,
    payload: {
      item,
      newAmount,
    },
  }
}

export function removeItemAction(item: Item) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      item,
    },
  }
}
