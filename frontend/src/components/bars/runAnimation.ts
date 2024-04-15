import { AnimationArrayType } from 'src/utils/types'

export const runAnimation = (
  animations: AnimationArrayType,
  speed: number,
  setIsSorting: (data: boolean) => void,
  setIsAnimationComplete: (data: boolean) => void
) => {
  setIsSorting(true)

  const inverseSpeed = (speed)
  const arrLines = document.getElementsByClassName(
    'arrayLine'
  ) as HTMLCollectionOf<HTMLElement>

  const updateClassList = (
    indexes: number[],
    addClassName: string,
    removeClassName: string
  ) => {
    indexes.forEach((index) => {
      arrLines[index].classList.add(addClassName)
      arrLines[index].classList.remove(removeClassName)
    })
  }

  const updateHeightValue = (
    lineIndex: number,
    newHeight: number | undefined
  ) => {
    arrLines[lineIndex].style.height = `${newHeight}px`
    arrLines[lineIndex].style.maxHeight = `${newHeight}px`
  }

  animations.forEach((animation, index) => {
    setTimeout(() => {
      const [lineIndexes, isSwap] = animation

      if (!isSwap) {
        updateClassList(
          lineIndexes,
          'change-line-color',
          'default-line-color'
        )
        setTimeout(
          () =>
            updateClassList(
              lineIndexes,
              'default-line-color',
              'change-line-color'
            ),
          inverseSpeed
        )
      } else {
        const [lineIndex, newHeight] = lineIndexes
        updateHeightValue(lineIndex, newHeight)
      }
    }, index * inverseSpeed)
  })

  const finalTimeout = animations.length * inverseSpeed
  setTimeout(() => {
    Array.from(arrLines).forEach((line) => {
      line.classList.add('pulse-animation', 'change-line-color')
      line.classList.remove('default-line-color')
    })

    setTimeout(() => {
      Array.from(arrLines).forEach((line) => {
        line.classList.remove('pulse-animation', 'change-line-color')
        line.classList.add('default-line-color')
      })
      setIsSorting(false)
      setIsAnimationComplete(true)
    }, 1000)
  }, finalTimeout)
}
