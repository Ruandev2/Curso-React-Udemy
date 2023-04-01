import { Link, useParams } from "react-router-dom";
//5- Carregamento dado Individual
import { useFetch } from "../hooks/useFeth";
const Product = () => {
    // 4- Rota Dinamica
    const { id } = useParams();
    // 5 Carregamento dado Individual
    const url = "http://localhost:3000/products/" + id;
    const { data: product, loading, error } = useFetch(url);
    return (
        <div>
            <p>ID do produto: {id}</p>

            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando produto...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R${product.price}</p>
                    {/*6 - nested routes*/}
                    <Link to={`/products/${product.id}/info`}>Mais Informaçoes!</Link>
                </div>
            )}
        </div>
    )
}

export default Product