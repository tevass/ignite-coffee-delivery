import { formatPrice } from './formatPrice'

export const randomValue = (min = 1, max = 16) => {
  const random = Math.random() * (max - min) + min

  return Math.floor(random)
}
