import ProductPreview from "../components/product-preview/product-preview.jsx";
import ProductService from "../models/services/productService.js";

function ProductList() {
    const data = ProductService.getProducts();

    return(
        <>
          <ul>
            {data.map((product, index) => (
                <li key={index}>
                    <ProductPreview product={product} seeMore={false}></ProductPreview>
                </li>
            ))};
          </ul>
        </>
    );
};

export default ProductList
