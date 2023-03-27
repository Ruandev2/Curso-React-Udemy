import { useState } from "react";

const ManageData = () => {
  let someDate = 10;

  const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
      <div>
        <p>Valor: {someDate}</p>
        <button onClick={() => (someDate = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
      </div>
    </div>
  );
};

export default ManageData;
