import { StylesConfig } from 'react-select'
import { AlgorithmOptions } from 'src/utils/types'

export const options: AlgorithmOptions[] = [
  { value: 'bubble', label: 'Bubble Sort' },
  { value: 'quick', label: 'Quick Sort' },
  { value: 'merge', label: 'Merge Sort' },
  { value: 'insertion', label: 'Insertion Sort' },
  { value: 'selection', label: 'Selection Sort' }
]

export const AlgorithmStyles: StylesConfig<AlgorithmOptions> = {
  // OPTION: elements into dropdown item
  option: (styles) => {
    return {
      ...styles,
      borderRadius: '5px',
      backgroundColor: 'var(--color-darkPurple)',
      color: 'var(--color-midBlue)',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'var(--color-midBlue)',
        color: 'var(--color-darkPurple)'
      }
    }
  }
}
