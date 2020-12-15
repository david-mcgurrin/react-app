import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './components/MyFirstComponent';
import MyFancyComponent from './components/MyFancyComponent';

function App() {
  return (
    <div className="App">
      <MyFirstComponent/>
      <MyFancyComponent name="Rup"/>
    </div>
  );
}

export default App;
