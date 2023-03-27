import './App.css';
import MyFom from './components/MyFom';

function App() {
  return (
    <div className="App">
      <h1>Formulario:</h1>
      <MyFom user={{name:"Joias",email:"ruanrodrigue1989@gmail.com"}}/>
    </div>
  );
}

export default App;
