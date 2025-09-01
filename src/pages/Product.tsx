import ProductDetail from "@/components/ProductDetail";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return <ProductDetail onBack={handleBack} />;
};

export default Product;