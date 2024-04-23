import { useEffect } from 'react'
import { Background } from './background'
import { useSettingsStore } from 'src/store/settings'
import { resetArrayAndAnimation } from './resetAniomation'
import { AlgorithmData } from 'components/algorithmInfo/AlgorithmData'

export const Bars = () => {
  const size = useSettingsStore(state => state.size)
  const barWidth = useSettingsStore(state => state.barWidth)
  const isSorting = useSettingsStore(state => state.isSorting)
  const arrayToSort = useSettingsStore(state => state.arrayToSort)
  const setIsSorting = useSettingsStore(state => state.setIsSorting)
  const changeMaxSize = useSettingsStore(state => state.changeMaxSize)
  const changeBarWidth = useSettingsStore(state => state.changeBarWidth)
  const changeArrayToSort = useSettingsStore(state => state.changeArrayToSort)
  const changeBarsContSize = useSettingsStore(state => state.changeBarsContSize)
  const setIsAnimationComplete = useSettingsStore(state => state.setIsAnimationComplete)
  const changeSelectedAlgorithm = useSettingsStore(state => state.changeSelectedAlgorithm)

  useEffect(() => {
    const handleResize = () => {
      const parent = document.getElementById('barsCont')
      const sizeTochange = { x: Number(parent?.clientWidth), y: Number(parent?.clientHeight) }
      changeBarsContSize(sizeTochange)
      changeSelectedAlgorithm({ value: 'merge', label: 'Merge Sort' })
      changeMaxSize(Number(parent?.clientWidth) / (parent?.clientWidth || 1920 > 1024 ? 10 : 15))
      resetArrayAndAnimation(
        sizeTochange,
        changeArrayToSort,
        setIsSorting,
        setIsAnimationComplete,
        size,
        changeBarWidth
      )
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size])

  return (
    <section className='relative m-auto w-[90dvw] min-w-max h-full max-h-[50dvh] md:max-h-[60dvh] border-b-[5px] border-b-sa-lightPurple flex z-10'>
      <section className='mesh relative w-full md:w-[calc(90% - 65ch)] h-full flex'>
        <Background />
        <section id='barsCont' className='barsCont relative w-[90%] h-full m-auto flex'>
          {
            isSorting &&
              <button
                onClick={() => resetArrayAndAnimation(
                  { x: Number(document.getElementById('barsCont')?.clientWidth), y: Number(document.getElementById('barsCont')?.clientHeight) },
                  changeArrayToSort,
                  setIsSorting,
                  setIsAnimationComplete,
                  size,
                  changeBarWidth
                )}
                className='absolute top-0 left-0 m-auto px-5 py-1 bg-sa-lightPurple rounded-md text-sa-lightBlue hover:bg-[var(--color-orange)] transition-colors'
              >
                Reset
              </button>
          }
          {
            arrayToSort.map((bar, index) => (
              <div
                key={index}
                className='arrayLine mx-auto mt-auto mb-[5px] bg-sa-lightPurple'
                style={{
                  height: `${bar}px`,
                  maxHeight: `${bar}px`,
                  minWidth: `${barWidth}px`,
                  width: `${barWidth}px`
                }}
              />
            ))
          }
        </section>
        <AlgorithmData />
      </section>
    </section>
  )
}
