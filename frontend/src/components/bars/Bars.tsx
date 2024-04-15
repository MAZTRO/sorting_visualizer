import { useEffect } from 'react'
import { Background } from './background'
import { useSettingsStore } from 'src/store/settings'
import { resetArrayAndAnimation } from './resetAniomation'

export const Bars = () => {
  const size = useSettingsStore(state => state.size)
  const barWidth = useSettingsStore(state => state.barWidth)
  const arrayToSort = useSettingsStore(state => state.arrayToSort)
  const setIsSorting = useSettingsStore(state => state.setIsSorting)
  const changeBarWidth = useSettingsStore(state => state.changeBarWidth)
  const changeArrayToSort = useSettingsStore(state => state.changeArrayToSort)
  const changeBarsContSize = useSettingsStore(state => state.changeBarsContSize)
  const setIsAnimationComplete = useSettingsStore(state => state.setIsAnimationComplete)

  useEffect(() => {
    const handleResize = () => {
      const parent = document.getElementById('barsCont')
      const sizeTochange = { x: Number(parent?.clientWidth), y: Number(parent?.clientHeight) }
      changeBarsContSize(sizeTochange)
      resetArrayAndAnimation(
        sizeTochange,
        changeArrayToSort,
        setIsSorting,
        setIsAnimationComplete,
        size,
        changeBarWidth
      )
    }
    if (parent) handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size])

  return (
    <section className='m-auto w-[90%] h-full max-h-[60dvh] md:max-h-[70dvh] border-b-[5px] border-b-sa-lightPurple'>
      <section className='mesh relative w-full h-full flex'>
        <Background />
        <section id='barsCont' className='barsCont w-[90%] h-full m-auto flex'>
          {
            arrayToSort.map((bar, index) => (
              <div key={index} className='arrayLine mx-auto mt-auto mb-[5px] bg-sa-lightPurple' style={{ height: `${bar}px`, maxHeight: `${bar}px`, minWidth: `${barWidth}px`, width: `${barWidth}px` }} />
            ))
          }
        </section>
      </section>
    </section>
  )
}
