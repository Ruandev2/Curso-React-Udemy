import { useParams } from "react-router-dom";

const Info = () => {
    //6 - Nested Route
    const {id} = useParams();
  return (
    <div>
        <h1>Mais Informaçoes Sobre Produto:{id}</h1>
    </div>
  )
}

export default Info