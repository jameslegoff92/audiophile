//Components
import Header from './organisms/Header';
import Category from './organisms/molecules/Category';

//SCSS Files
import './App.scss';
import categoryStyles from './organisms/molecules/Category.module.scss';



function App() {
  return (
    <div>
      <Header />

      <div>
        <Category/>
      </div>


    </div>
  );
}

export default App;
