import { create } from 'zustand'
import { MIN_SIZE, MIN_SPEED, MAX_SIZE } from 'src/utils/utils'
import { settingsStore, barsContSize, AlgorithmOptions } from 'src/utils/types'

export const useSettingsStore = create<settingsStore>((set) => ({
  size: MIN_SIZE,
  speed: MIN_SPEED,
  maxSize: MAX_SIZE,
  barWidth: 0,
  openInfo: true,
  barHeight: 0,
  isSorting: false,
  arrayToSort: [],
  barsContSize: { x: 0, y: 0 },
  animationComplete: false,
  selectedAlgorithm: { value: 'merge', label: 'Merge Sort' },
  changeSize: (data: number) => set(() => ({ size: data })),
  changeSpeed: (data: number) => set(() => ({ speed: data })),
  setIsSorting: (data: boolean) => set(() => ({ isSorting: data })),
  changeMaxSize: (data: number) => set(() => ({ maxSize: data })),
  changeBarWidth: (data: number) => set(() => ({ barWidth: data })),
  changeOpneInfo: (data: boolean) => set(() => ({ openInfo: data })),
  changeArrayToSort: (data: number[]) => set(() => ({ arrayToSort: data })),
  changeBarsContSize: (data: barsContSize) => set(() => ({ barsContSize: data })),
  setIsAnimationComplete: (data: boolean) => set(() => ({ animationComplete: data })),
  changeSelectedAlgorithm: (data: AlgorithmOptions) => set(() => ({ selectedAlgorithm: data }))
}))
