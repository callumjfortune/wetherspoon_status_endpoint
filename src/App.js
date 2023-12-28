import './App.css';

function App(timeData) {

  let times = timeData.timeData;

  return (
    <div className="App w-screen h-screen grid place-content-center">

      <div className=''>

        <h1 className='mb-2 text-[3em] font-[500]'>The George Inn</h1>
        <h2 className='mb-8 text-[2em] text-gray-600'>is currently achieving the following times</h2>

        <div className='flex items-center justify-around'>
          <div>
            <h1 className='text-[1.75em] mb-2'>Food</h1>
            <h1 className='text-[1.5em]'>{JSON.stringify(times.seconds.food/60) + " Mins"}</h1>
          </div>
          <div>
            <h1 className='text-[1.75em] mb-2'>Drinks</h1>
            <h1 className='text-[1.5em]'>{JSON.stringify(times.seconds.drinks/60) + " Mins"}</h1>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
