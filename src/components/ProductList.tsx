import type { ReactNode } from "react";
import './Product.css'


type ProductListProps = {
  children:ReactNode
}


export default function ProductList({children} : ProductListProps) {

  return (
    <ul className="container product-list">
     {children}
    </ul>
  );
};


