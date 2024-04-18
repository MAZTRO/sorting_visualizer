import { barsContSize } from 'src/utils/types'
import { generateRandomNumberFromInterval } from 'src/utils/utils'

export const resetArrayAndAnimation = (
  barsContSize: barsContSize,
  changeArrayToSort: (data: number[]) => void,
  setIsSorting: (data: boolean) => void,
  setIsAnimationComplete: (data: boolean) => void,
  size: number,
  changeBarWidth: (data: number) => void
) => {
  const tempArray: number[] = []
  const widthLine = Math.floor((barsContSize.x - (barsContSize.x * 0.1)) / size)
  const maxLineHeight = Math.max(barsContSize.y - 5, 100)
  for (let i = 0; i < size; i++) {
    tempArray.push(generateRandomNumberFromInterval(5, maxLineHeight))
  }

  changeArrayToSort(tempArray)
  setIsSorting(false)
  setIsAnimationComplete(false)
  changeBarWidth(widthLine)

  const highestId = window.setTimeout(() => {
    for (let i = highestId; i >= 0; i--) {
      window.clearInterval(i)
    }
  }, 0)

  setTimeout(() => {
    const arrLines = document.getElementsByClassName('arrayLine')
    for (let i = 0; i < arrLines.length; i++) {
      arrLines[i].classList.remove('change-line-color')
      arrLines[i].classList.add('default-line-color')
    }
  }, 0)
}
