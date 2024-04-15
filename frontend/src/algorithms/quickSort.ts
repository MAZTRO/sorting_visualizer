import { AnimationArrayType } from 'src/utils/types'

function partition (
  array: number[],
  begin: number,
  finish: number,
  animations: AnimationArrayType
) {
  let i = begin
  let j = finish + 1
  const pivot = array[begin]
  while (1) { // always true
    while (array[++i] <= pivot) {
      if (i === finish) break
      animations.push([[i], false])
    }
    while (array[--j] >= pivot) {
      if (j === begin) break
      animations.push([[j], false])
    }
    // Exit statment
    if (j <= i) break
    animations.push([[i, array[j]], true])
    animations.push([[j, array[i]], true]);
    [array[i], array[j]] = [array[j], array[i]]
  }
  animations.push([[begin, array[j]], true])
  animations.push([[j, array[begin]], true]);
  [array[begin], array[j]] = [array[j], array[begin]]
  return j
}

export const runQuickort = (
  array: number[],
  begin: number,
  finish: number,
  animations: AnimationArrayType
) => {
  if (begin < finish) {
    const part = partition(array, begin, finish, animations)
    runQuickort(array, begin, part - 1, animations)
    runQuickort(array, part + 1, finish, animations)
  }
}
