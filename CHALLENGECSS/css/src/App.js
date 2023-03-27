import './App.css';
import CarTest from './component/CarTest';

function App() {
  const cars = [
    { id: 1, brand: "Fusca", color: "Laranja", km: 0 },
    { id: 2, brand: "Renoult", color: "Prata", km: 200 },
    { id: 3, brand: "Renault", color: "Azul", km: 10 },
  ];
  return (
    <div className="App">
      <h1>Aprendendo React Desafio</h1>
      {cars.map((car) => (
        <CarTest
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
    </div>
  );
}

export default App;
