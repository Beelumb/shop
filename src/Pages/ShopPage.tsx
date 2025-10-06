import Product from "../components/Product.tsx";
import ProductList from "../components/ProductList.tsx";
import { useOutletContext } from "react-router";
import { glasses } from "../DUMMY_PRODUCTS.ts";

export default function ShopPage() {

  const { search } = useOutletContext<{ search: string }>();

  const filteredProducts = glasses.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ProductList>
       {filteredProducts.map(product => (
        <Product key={product.name} {...product} />
      ))}
      </ProductList>
    </>
  );
}
