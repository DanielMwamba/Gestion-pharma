import ProductPreview from "../components/product-preview/product-preview";
import ProductService from "../models/services/productService";

export default function ProductsList({ product, seeMore }) {
    const data = ProductService.getProducts();

    return (
        <>
            <ul>
                {data.map((product, index) => (
                    <li key={index}>
                        <ProductPreview product={product} seeMore={false}></ProductPreview>
                    </li>
                ))}
            </ul>
        </>
    );
}