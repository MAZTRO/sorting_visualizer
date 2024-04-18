import { Bars } from 'components/bars/Bars'
import { Header } from 'components/header/Header'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <main className='relative w-dvw h-dvh flex'>
      <div className='backgroundDegree absolute top-0 left-0 z[-1] h-dvh w-dvw bg-slate-950'>
        <div className='absolute bottom-0 left-[0%] right-0 top-[-10%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]' />
        <div className='absolute bottom-0 right-[0%] top-[-10%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]' />
      </div>
      <div className='backgroundMesh absolute top-0 left-0 z-[1] h-dvh w-dvw bg-[#11111100] bg-[radial-gradient(var(--color-lightPurple30)_1px,#11111100_1px)] bg-[size:40px_40px]' />
      <section className='wrapper relative z-[1] m-auto w-dvw h-dvh flex flex-col overflow-y-auto overflow-x-hidden max-w-[1920px]'>
        <Header />
        <Bars />
      </section>
    </main>
  )
}
