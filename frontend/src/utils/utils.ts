export const generateRandomNumberFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const MIN_SPEED = 1
export const MAX_SPEED = 1000
export const MIN_SIZE = 3
export const MAX_SIZE = 100
