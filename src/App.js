//Components
import Header from './organisms/Header';

//SCSS Files
import './App.scss';



function App() {
  return (
    <div>
      <Header />
      <div className='hr' ></div>

      <div>
        <div>
          <p>new product</p>
          <h1>xx99 mark II heaphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
        </div>
        <button>
          see product
        </button>
      </div>


    </div>
  );
}

export default App;
