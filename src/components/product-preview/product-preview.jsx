import { Link } from "react-router-dom";

export default function ProductPreview({ product, seeMore}) {
    return (
        <div>
            <img src={product.image} alt="product image" />
            <h2>{product.name}</h2>
            {seeMore ? (
                <p>{product.description}</p>
            ) : (
                <Link to={`/products/${product.id}`}>Voir plus</Link>
            )}
        </div>
    );
}