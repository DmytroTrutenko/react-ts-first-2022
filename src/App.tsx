import { Product } from "./components/Product";
import { products } from "./data/products";
import { Container } from "@mui/system";
import { Box } from "@mui/material";

function App() {
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
          <Product key ={product.id} product={product} />
        ))}
      </Box>
    </Container>
  );
}

export default App;
