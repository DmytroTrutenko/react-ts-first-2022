import { IProduct } from "../models";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <Card sx={{ maxWidth: 345, my: 3}}>
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
        <Button size="small">Show Details</Button>
      </CardActions>
    </Card>
  );
};
