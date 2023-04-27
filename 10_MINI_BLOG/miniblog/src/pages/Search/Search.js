//css
import styles from "./Search.module.css";
//components
import PostDetail from "../../components/PostDetail";
//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import { Link } from "react-router-dom";

const Search = () => {
    const query = useQuery();
    const search = query.get("q")
    const { documents: posts } = useFetchDocuments("posts", search)
    return (
        <div className={styles.search.container}>
            <h1>Resultados encontrados para: {search}</h1>
            {posts && posts.length === 0 && (
                <div className={styles.noposts}>
                    <p>Não foram encontrados posts a partir Busca</p>
                    <Link to="/" className="btn btn-dark">
                        Voltar</Link>
                </div>
            )}
            {posts && posts.map((post) => <PostDetail key={post} post={post} />)}
        </div>
    )
}

export default Search