import { Product } from "./components/Product";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "./models";

function App() {

  const [products, setProducts] = useState<IProduct[]>([])


  const fetchProducts = async () => {
    const response = await axios.get<IProduct[]>("https://fakestoreapi.com/products?limit=5")
    setProducts(response.data)
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container fixed>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  );
}

export default App;
