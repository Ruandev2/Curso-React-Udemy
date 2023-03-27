import React from 'react'

const UserDetails = ({nome,idade,profissao}) => {
    
  return (
    <div>
        <h2>Pessoas Cadastradas:</h2>
      <ul>
        <h1> {nome}</h1>
        <li>Idade: {idade}</li>
        <li>Profissao: {profissao}</li>
      </ul>
      <div>
        {idade >=18 ? (<p>Idade Para votar</p>
        ):(
            <p>Menor de Idade</p>
        )}
      </div>
    </div>
  )
}

export default UserDetails