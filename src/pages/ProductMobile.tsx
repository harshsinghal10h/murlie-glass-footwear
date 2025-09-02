import ProductDetailMobile from "@/components/ProductDetailMobile";
import { useNavigate } from "react-router-dom";

const ProductMobile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return <ProductDetailMobile onBack={handleBack} />;
};

export default ProductMobile;