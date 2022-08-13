import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <div className="product_item d-flex">
      <p className="id_product">{product.id}</p>
      <img className="img_product" src={product.thumbnailUrl} alt={product.thumbnailUrl} />
      {/* <p className="title">{product.title}</p> */}
    </div>
  );
};
