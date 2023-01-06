import './App.css';
import Food from './Food';


function App() {
  return (
    <div className='App'>
      <Food dish="1" dishName="Chicken Biryani" sweetDish="Bangali Rus Gulle"/>
      <br />
      <Food dish="2" dishName="Chicken Korma" sweetDish="Gajar Ka Halwa"/>
      <br />
      <Food dish="3" dishName="Motton Karahi" sweetDish="Trifle"/>
    </div>
  );
}

export default App;
