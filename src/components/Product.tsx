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
        image={product.thumbnailUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.id}
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
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};
