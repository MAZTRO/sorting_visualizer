import { useSettingsStore } from 'src/store/settings'

export const Background = () => {
  const size = useSettingsStore(state => state.size)
  const barsContSize = useSettingsStore(state => state.barsContSize)

  return (
    <>
      <div className='absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#f0f0f000_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f033_1px,transparent_1px)] bg-[size:4rem_7rem]' />
      <p className='absolute top-0 left-0 opacity-30 text-[12px]'>{barsContSize.y}</p>
      <p className='absolute bottom-0 left-0 opacity-30 text-[12px]'>0</p>
      <p className='absolute bottom-0 right-0 opacity-30 text-[12px]'>{size}</p>
    </>
  )
}
