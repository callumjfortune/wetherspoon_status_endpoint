import './App.css';

import { MdOutlineRestaurant } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";

function App(timeData) {

  let times = timeData.timeData;

  return (
    <div className="App w-screen h-screen grid place-content-center">

      <div className=''>

        <h1 className='mb-2 text-[3em] font-[500]'>The George Inn</h1>
        <h2 className='mb-16 text-[2em] text-gray-600'>Is currently achieving the following times</h2>

        <div className='flex items-center justify-around'>
          <div>
            <h1 className='text-[3em] mb-2 flex justify-center'><MdOutlineRestaurant></MdOutlineRestaurant></h1>
            <h1 className='text-[1.5em]'>{JSON.stringify(times.seconds.food/60) + " Mins"}</h1>
          </div>
          <div>
          <h1 className='text-[3em] mb-2 flex justify-center'><BiSolidDrink></BiSolidDrink></h1>
            <h1 className='text-[1.5em]'>{JSON.stringify(times.seconds.drinks/60) + " Mins"}</h1>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
