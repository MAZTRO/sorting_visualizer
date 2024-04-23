import { InfoIcon } from 'src/assets/infoIcon'
import { CloseIcon } from 'src/assets/closeIcon'
import { useSettingsStore } from 'src/store/settings'
import { sortingAlgorithmsData } from 'src/utils/utils'

export const AlgorithmData = () => {
  const openInfo = useSettingsStore(state => state.openInfo)
  const changeOpneInfo = useSettingsStore(state => state.changeOpneInfo)
  const selectedAlgorithm = useSettingsStore(state => state.selectedAlgorithm)

  return (
    <section
      className='adCont absolute top-[1%] right-0 m-auto max-w-[60ch] flex flex-col z-50 overflow-hidden rounded-lg justify-center'
      style={{ border: `${openInfo ? '1px solid var(--color-lightPurple)' : 'none'}`, backgroundColor: `${openInfo ? 'var(--color-darkPurple)' : 'transparent'}` }}
    >
      <div className='relative h-full w-full z-10'>
        <div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.5),rgba(255,255,255,0))]' />
        <div className='absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.3),rgba(255,255,255,0))]' />
      </div>
      <button className='flex flex-col justify-center rounded-md bg-sa-lightPurple p-2 my-3 mx-auto z-20' onClick={() => changeOpneInfo(!openInfo)}>
        {
          openInfo
            ? <CloseIcon />
            : <InfoIcon />
        }
      </button>
      {
        openInfo &&
          <div className='container z-20 p-1 w-[98%] m-auto'>
            <h3 className='text-lg font-bold'>
              {sortingAlgorithmsData[selectedAlgorithm.value].title}
            </h3>
            <p className='text-sm text-grey-500 pt-2'>
              {sortingAlgorithmsData[selectedAlgorithm.value].description}
            </p>

            <div className='flex flex-col items-start justify-start w-full my-3 gap-2'>
              <h3 className='text-lg font-bold'>Time Complexity</h3>
              <div className='flex flex-col gap-2'>
                <p className='flex w-full text-sm text-gray-500'>
                  <span className='w-28'>Worst Case:</span>
                  <span>
                    {sortingAlgorithmsData[selectedAlgorithm.value].worstCase}
                  </span>
                </p>
                <p className='flex w-full text-sm text-gray-500'>
                  <span className='w-28'>Average Case:</span>
                  <span>
                    {sortingAlgorithmsData[selectedAlgorithm.value].averageCase}
                  </span>
                </p>
                <p className='flex w-full text-sm text-gray-500'>
                  <span className='w-28'>Best Case:</span>
                  <span>
                    {sortingAlgorithmsData[selectedAlgorithm.value].bestCase}
                  </span>
                </p>
              </div>
            </div>
          </div>
      }
    </section>
  )
}
