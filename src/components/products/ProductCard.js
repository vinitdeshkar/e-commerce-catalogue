import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";

export default function ProductCard(props) {
  const onProductClick = () => {
    props.onProductClickCallback(props.productInfo.id);
  };
  return (
    <div onClick={onProductClick}>
      <Card sx={{ maxWidth: 345, height: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image={props.productInfo.thumbnail}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.productInfo.title}
            </Typography>
            <Rating
              name="read-only"
              value={props.productInfo.rating}
              readOnly
            />
            <Typography gutterBottom variant="p" component="div">
              <b>{props.productInfo.brand}</b>
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              <b>${props.productInfo.price}</b>
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              {props.productInfo.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
