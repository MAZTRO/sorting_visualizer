import { create } from 'zustand'
import { settingsStore, barsContSize, AlgorithmOptions } from 'src/utils/types'
import { MIN_SIZE, MIN_SPEED } from 'src/utils/utils'

export const useSettingsStore = create<settingsStore>((set) => ({
  arrayToSort: [],
  isSorting: false,
  animationComplete: false,
  selectedAlgorithm: { value: 'NA', label: 'NA' },
  speed: MIN_SPEED,
  size: MIN_SIZE,
  barWidth: 0,
  barHeight: 0,
  barsContSize: { x: 0, y: 0 },
  changeSpeed: (data: number) => set(() => ({ speed: data })),
  changeSize: (data: number) => set(() => ({ size: data })),
  changeBarsContSize: (data: barsContSize) => set(() => ({ barsContSize: data })),
  changeArrayToSort: (data: number[]) => set(() => ({ arrayToSort: data })),
  setIsAnimationComplete: (data: boolean) => set(() => ({ animationComplete: data })),
  setIsSorting: (data: boolean) => set(() => ({ isSorting: data })),
  changeBarWidth: (data: number) => set(() => ({ barWidth: data })),
  changeSelectedAlgorithm: (data: AlgorithmOptions) => set(() => ({ selectedAlgorithm: data }))
}))
