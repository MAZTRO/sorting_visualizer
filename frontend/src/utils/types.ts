export type SortingAlgorithmType =
  | 'bubble'
  | 'insertion'
  | 'selection'
  | 'merge'
  | 'quick'
  | 'NA';

export type AnimationArrayType = [number[], boolean][];
export type barsContSize = {x: number, y: number}
export type AlgorithmOptions = { value: SortingAlgorithmType, label: string }

export interface settingsStore {
  arrayToSort: number[]
  isSorting: boolean
  animationComplete: boolean
  selectedAlgorithm: AlgorithmOptions
  speed: number
  size: number
  barWidth: number
  barHeight: number
  barsContSize: barsContSize
  changeSpeed: (speed: number) => void
  changeSize: (size: number) => void
  changeBarsContSize: (data: barsContSize) => void
  changeArrayToSort: (data: number[]) => void
  setIsSorting: (data: boolean) => void
  setIsAnimationComplete: (data: boolean) => void
  changeBarWidth: (data: number) => void
  changeSelectedAlgorithm: (data: AlgorithmOptions) => void
}
