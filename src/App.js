import '../src/output.css';

import logo from '../src/images/logo.png';
import bghome from '../src/images/bghome.png';

function App() {
  return (
    <div className="w-screen h-screen bg flex flex-col">
      <header className='flex px-10 justify-between w-screen h-18 items-center fixed' >
        <a href='#'><img src={logo}/></a>
        <button className='bgOrange py-2 px-6 rounded-md cursor-pointer text-white'>Contact</button>
      </header>

      <main className='w-scren p-20 mt-18 '>
        <div className='flex px-20 h-full flex justify-center items-center'>
          <div className='halfWidth'>
            <h3 className='text-3xl pb-3'>New learning experience</h3>
            <h2 className='text-5xl pb-6'>Online Learn</h2>
            <p className='text-xl pb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

            <button className='py-4 px-11 bgOrange rounded-md cursor-pointer text-white'>Explore now</button>
          </div>

          <div className='halfWidth ml-10'>
            <img src={bghome}/>
          </div> 
        </div>

      </main>
    </div>
  );
}

export default App;
