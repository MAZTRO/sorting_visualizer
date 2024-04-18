export type SortingAlgorithmType =
  | 'bubble'
  | 'insertion'
  | 'selection'
  | 'merge'
  | 'quick';

export type barsContSize = {x: number, y: number}
export type AnimationArrayType = [number[], boolean][];
export type AlgorithmOptions = { value: SortingAlgorithmType, label: string }

export interface settingsStore {
  size: number
  speed: number
  maxSize: number
  barWidth: number
  openInfo: boolean
  barHeight: number
  isSorting: boolean
  arrayToSort: number[]
  barsContSize: barsContSize
  animationComplete: boolean
  selectedAlgorithm: AlgorithmOptions
  changeSize: (size: number) => void
  changeSpeed: (speed: number) => void
  setIsSorting: (data: boolean) => void
  changeMaxSize: (data: number) => void
  changeBarWidth: (data: number) => void
  changeOpneInfo: (data: boolean) => void
  changeArrayToSort: (data: number[]) => void
  changeBarsContSize: (data: barsContSize) => void
  setIsAnimationComplete: (data: boolean) => void
  changeSelectedAlgorithm: (data: AlgorithmOptions) => void
}
