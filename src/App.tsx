import { Product } from "./components/Product";
import { products } from "./data/products";
import { Container } from "@mui/system";
import { Box } from "@mui/material";

function App() {
  return (
    <Container fixed>
      <Box component="div" sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center"
    }}>
        <Product product={products[0]} />
        <Product product={products[1]} />
      </Box>
    </Container>
  );
}

export default App;
