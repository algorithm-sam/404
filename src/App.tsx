import './App.css'
import scareCrow from '../src/assets/Scarecrow.png'

function App() {

  return (

    <div className='container p-5 h-screen overflow-hidden'>
      <header className='uppercase font-incon font-bold text-mid'>
        <span>404 not found</span>
      </header>
      <main className='h-screen md:grid md:items-center'>
        <div className='md:flex md-flex-row md:justify-between gap-4'>
          <div id="404-image" className='p-5 md:w-2/3'>
            <img src={scareCrow} alt='Scare crow' />
          </div>

          <div id="404-body">
            <h2 className='font-mono font-bold text-[48px] tracking-tighter leading-[71px] mb-6 md:mb-10 md:text-[60px] md:leading-[95px]'>I have bad news for you</h2>

            <p className='text-lg font-mono tracking-tighter mb-10 md:text-xl md:leading-[35px] md:mb-20 md:w-2/3'>The page you're looking for might be removed or is temporarily unavailable</p>

            <button className='bg-primary text-secondary uppercase py-6 px-8 font-mono font-bold'> Back to homepage</button>
          </div>
        </div>
      </main>
      <footer className="sticky bottom-0 text-center">
        <p>created by <a href="https://devchallanges.io">algorithm-sam</a> devChallenges.io </p>
      </footer>
    </div>
  )
}

export default App
