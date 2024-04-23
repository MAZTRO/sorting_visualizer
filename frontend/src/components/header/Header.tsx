import Select from 'react-select'
import { useSettingsStore } from 'src/store/settings'
import { runAnimation } from 'components/bars/runAnimation'
import { AlgorithmStyles, options } from './algorythimsOptions'
import { resetArrayAndAnimation } from 'components/bars/resetAniomation'
import {
  MIN_SIZE,
  MIN_SPEED,
  MAX_SPEED
} from 'src/utils/utils'
import { toast, ToastContainer } from 'react-toastify'
import { runQuickort } from 'src/algorithms/quickSort'
import { runMergeSort } from 'src/algorithms/mergeSort'
import { runBubbleSort } from 'src/algorithms/bubbleSort'
import { runInsertionSort } from 'src/algorithms/insertionSort'
import { runSelectionSort } from 'src/algorithms/selectionSort'
import { AlgorithmOptions, AnimationArrayType } from 'src/utils/types'

export const Header = () => {
  const size = useSettingsStore(state => state.size)
  const speed = useSettingsStore(state => state.speed)
  const maxSize = useSettingsStore(state => state.maxSize)
  const isSorting = useSettingsStore(state => state.isSorting)
  const changeSize = useSettingsStore(state => state.changeSize)
  const arrayToSort = useSettingsStore(state => state.arrayToSort)
  const changeSpeed = useSettingsStore(state => state.changeSpeed)
  const setIsSorting = useSettingsStore(state => state.setIsSorting)
  const changeBarWidth = useSettingsStore(state => state.changeBarWidth)
  const changeArrayToSort = useSettingsStore(state => state.changeArrayToSort)
  const selectedAlgorithm = useSettingsStore(state => state.selectedAlgorithm)
  const setIsAnimationComplete = useSettingsStore(state => state.setIsAnimationComplete)
  const changeSelectedAlgorithm = useSettingsStore(state => state.changeSelectedAlgorithm)

  const handleRunAnimation = () => {
    if (isSorting) return
    if (arrayToSort.length <= 1) return []

    let animations: AnimationArrayType = []
    const auxiliaryArray = arrayToSort.slice()

    switch (selectedAlgorithm.value) {
      case 'bubble':
        runBubbleSort(auxiliaryArray, animations)
        runAnimation(
          animations,
          speed,
          setIsSorting,
          setIsAnimationComplete
        )
        break
      case 'quick':
        runQuickort(auxiliaryArray, 0, arrayToSort.length - 1, animations)
        runAnimation(
          animations,
          speed,
          setIsSorting,
          setIsAnimationComplete
        )
        break
      case 'merge':
        animations = runMergeSort(auxiliaryArray)
        runAnimation(
          animations,
          speed,
          setIsSorting,
          setIsAnimationComplete
        )
        break
      case 'insertion':
        runInsertionSort(auxiliaryArray, animations)
        runAnimation(
          animations,
          speed,
          setIsSorting,
          setIsAnimationComplete
        )
        break
      case 'selection':
        runSelectionSort(auxiliaryArray, animations)
        runAnimation(
          animations,
          speed,
          setIsSorting,
          setIsAnimationComplete
        )
        break
      default:
        toast.warn('You should select some algorithm!', {
          position: 'top-center',
          autoClose: 3000,
          closeOnClick: true
        })
        break
    }
  }

  return (
    <header className='z-30 w-full m-auto my-0 flex flex-col'>
      <ToastContainer toastClassName={() => 'relative flex p-3 min-w-max min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-sa-darkPurple border-sa-lightPurple border-[2px]'} />
      <h1 className='w-full text-center my-1 text-[18px] md:text-[30px] uppercase font-semibold'>Sorting Visualizer</h1>
      <section className='configContainer w-[90%] max-h-[35dvh] flex flex-wrap justify-center m-auto my-2 md:border-b md:border-sa-lightPurple pb-4 gap-5 overflow-visible'>
        <button
          onClick={() => resetArrayAndAnimation(
            { x: Number(document.getElementById('barsCont')?.clientWidth), y: Number(document.getElementById('barsCont')?.clientHeight) },
            changeArrayToSort,
            setIsSorting,
            setIsAnimationComplete,
            size,
            changeBarWidth
          )}
          className='py-1 px-5 z-20 text-[14px] md:text-[16px] border-sa-lightPurple border-[1px] rounded-md text-sa-lightBlue bg-[radial-gradient(circle_farthest-side,#9400FF,#9400FF)] m-auto border-none outline-none min-w-max transition hover:bg-[radial-gradient(circle_farthest-side,#60089f,#9400FF)]'
        >Ramdom Array
        </button>

        <label htmlFor='speedViz' className='flex flex-col m-auto w-[90%] md:w-auto'>
          <span className='text-[12px] md:text-[16px] w-full text-center my-1 mx-auto'>Select speed ({speed} ms)</span>
          <input
            className='rangeInput w-full md:w-[200px]'
            type='range'
            id='speedViz'
            min={MIN_SPEED}
            max={MAX_SPEED}
            value={speed}
            onChange={(event) => changeSpeed(Number(event.target.value))}
          />
        </label>

        <label htmlFor='sizeViz' className='flex flex-col m-auto w-[90%] md:w-auto'>
          <span className='text-[12px] md:text-[16px] w-full text-center my-1 mx-auto'>Select size ({size} items)</span>
          <input
            className='rangeInput w-full md:w-[200px]'
            type='range'
            id='sizeViz'
            min={MIN_SIZE}
            max={maxSize}
            value={size}
            onChange={(event) => changeSize(Number(event.target.value))}
          />
        </label>

        <Select
          styles={AlgorithmStyles}
          className='algorithm min-w-max border-none outline-none'
          options={options}
          isClearable
          isSearchable
          placeholder='Select algorithm'
          value={selectedAlgorithm}
          onChange={(e) => {
            changeSelectedAlgorithm(e as AlgorithmOptions)
          }}
        />

        <button
          className='py-1 px-5 text-[14px] md:text-[16px] border-sa-lightPurple border-[1px] rounded-md text-sa-lightBlue bg-[radial-gradient(circle_farthest-side,#9400FF,#9400FF)] m-auto border-none outline-none min-w-max transition hover:bg-[radial-gradient(circle_farthest-side,#60089f,#9400FF)] disabled:opacity-50'
          onClick={() => handleRunAnimation()}
          disabled={isSorting}
        >
          {
            isSorting ? 'Sorting...' : 'Sort'
          }
        </button>
      </section>
    </header>
  )
}
