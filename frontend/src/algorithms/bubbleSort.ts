import { AnimationArrayType } from 'src/utils/types'

export const runBubbleSort = (array: number[], animations: AnimationArrayType) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      animations.push([[j, j + 1], false])
      if (array[j] > array[j + 1]) {
        animations.push([[j, array[j + 1]], true])
        animations.push([[j + 1, array[j]], true]);
        [[array[j], array[j + 1]]] = [[array[j + 1], array[j]]]
      }
    }
  }
}
