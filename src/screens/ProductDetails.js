import { useParams } from "react-router-dom";

const ProductDetails = () => {

  const { slug } = useParams();
  return (
    <div>
      <h2>Product Slug (Passing item is): {slug}</h2>
    </div>
  );
};

export default ProductDetails;
