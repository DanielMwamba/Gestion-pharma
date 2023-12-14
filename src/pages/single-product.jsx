import { useParams } from "react-router-dom";
import ProductPreview from "../components/product-preview/product-preview";
import ProductService from "../models/services/productService";

export default function SignleProduct() {
    const { id } = useParams();
    const data = ProductService.getProducts();
    const product = data.find((product) => product.id === id);

    return (
        <>
            <ProductPreview product={product} seeMore={true}></ProductPreview>
        </>
    );
}