import { IProduct } from "../models";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);
  const btnClassName = details ? "outlined" : "contained";

  return (
    <Card sx={{ width: 345, my: 2 }}>
      <CardMedia
        component="img"
        alt="img"
        height="300"
        image={product.image}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography  variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography  variant="h5" component="div" sx={{ color: "red" }}>
          {product.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant={btnClassName}
          size="small"
          sx={{ minWidth: 120 }}
          onClick={() => {
            setDetails((prev) => !prev);
          }}
        >
          {details ? "Hide Details" : "Show Details"}
        </Button>
      </CardActions>

      {details && (
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography sx={{ fontWeight: 500 }} >
            {product.rating.rate}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};
