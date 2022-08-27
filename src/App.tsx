import { Product } from "./components/Product";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import { useProducts } from "./hooks/products";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";
import { CreateProduct } from "./components/CreateProduct";
import { Modalka } from "./components/Modalka";
import { useState } from "react";

function App() {
  const { products, loading, error } = useProducts();
  const [ modal, setModal] = useState(true);
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
        {loading && <Loader />}
        {error && <Error error={error} />}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Box>

     {modal&& <Modalka title="Create new product">
        <CreateProduct onCreate={()=>setModal(false)}/>
      </Modalka>}
    </Container>
  );
}

export default App;
